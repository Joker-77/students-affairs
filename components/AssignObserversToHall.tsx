import * as React from "react";
import {
  Box,
  Grid,
  IconButton,
  Typography,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { useRouter } from "next/router";
import colors from "../assets/theme/base/colors";
import Card from "./Card/Card";
import CardHeader from "./Card/CardHeader";
import { ArrowBack, Close } from "@material-ui/icons";
import CardBody from "./Card/CardBody";
import { useTranslation } from "../Utility/Translations/useTranslation";
import { Form, Formik, setIn, Field } from "formik";
import { useEffect } from "react";
//import ObserverService from "../../Services/ObserverService";
import { IObserverModel } from "../Models/Observers/ObserverModel";
import ObservationService from "../Services/ObservationService";
import SuiButton from "./SuiButton";
import ActionTable from "./MaterialTable/ActionTable";
import Placeholder from "../Utility/Placeholders";
import GridItem from "./Grid/GridItem";
import _ from "lodash";
import { toast } from "react-toastify";
import Admin from "../layouts/Admin";
import { IObservationModel } from "../Models/ObservationModel";
import ObserverService from "../Services/ObserverService";
//import {Autocomplete} from "@material-ui/Autocomplete";
import AlertDialog from "./Modals/AlertDialog";
import { default as RSelect } from "react-select";

interface IAssignObserversToHallProps {
  setShow(): void;
  hall: any;
  formScheme: any;
  //submitForm(values, submitting): void;
  examDate: string;
}
const AssignObserversToHall: React.FC<IAssignObserversToHallProps> = ({
  setShow,
  hall,
  formScheme,
  //submitForm,
  examDate,
}) => {
  const initValues = {
    //from: hall.from,
    //to: hall.to,
    employee: null,
    hallChef: 1,
  };

  const { locale } = useRouter();
  const { translate } = useTranslation();

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    bgcolor: "background.paper",
    // border: "2px solid brown",
    boxShadow: 24,
    borderRadius: "20px",
  };
  const cardStyle = {
    position: "absolute" as "absolute",
    //top: "50%",
    //left: "50%",
    //transform: "translate(-50%, -50%)",
    // width: 400,
    bgcolor: "background.paper",
    // border: "2px solid brown",
    boxShadow: 24,
    borderRadius: "20px",
    marginTop: "0px",
    marginBottom: "0px",
  };
  const styles = {
    modal: {
      overflowY: "scroll",
      overflowX: "hidden",
      height: "95%",
      direction: locale === "ar" ? "rtl" : "ltr",
    },
    header: {
      height: "7em",
      position: "sticky",
      borderTopRightRadius: "inherit",
      borderTopLeftRadius: "inherit",
      backgroundColor: colors.gradients.primary.main,
      color: "#fff",
    },
  };

  const [employees, setEmployees] = React.useState([]);
  const [observers, setObservers] = React.useState([]);
  const [initialObservers, setInitialObservers] = React.useState([]);
  const [inactiveEmployees, setInactiveEmployees] = React.useState([]);
  const [hallChefDisabled, setHallChefDisabled] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  const loadData = () => {
    //console.log(`${examDate}===${hall.hall.id}`);
    ObservationService.GetAll(examDate, "", hall.hall.id)
      .then((res) => {
        let result = res.result as IObservationModel[];
        //console.log(result);
        result.forEach((obs) => {
          if (obs.is_master) setHallChefDisabled(true);
        });
        let observers = [];
        Promise.all(
          result.map((obs) => {
            return ObserverService.Get(obs.employee_id.toString())
              .then((res) => {
                let ovr = res.result as IObserverModel;
                return { ...ovr, hall_chef: obs.is_master, obs_id: obs.id };
              })
              .catch((error) => {
                console.error("error", error);
              });
          })
        ).then((result) => {
          //console.log(result);
          setObservers(result);
          setInitialObservers(result);
          setInactiveEmployees(result);
        });
      })
      .catch((error) => {
        console.error("error", error);
      });

    ObservationService.GetAvailableObservers(
      examDate,
      hall.timePeriod.slice(11, 16),
      hall.timePeriod.slice(33, 38)
    )
      .then((res) => {
        console.log("Observers", res.result);
        let result = res.result as IObserverModel[];
        //setEmployees(result.filter(emp => !emp.excluded));
        setEmployees(result);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const title = `${translate("Exam")} ${hall?.examsDetails} ${translate(
    "from"
  )} ${hall?.from} ${translate("to")} ${hall?.to} ${translate("in")} ${
    hall?.hallName
  } ${translate("on")} ${examDate}`;
  //const [employee, setEmployee] = React.useState(null);

  let columns = [
    {
      title: translate("Id"),
      field: "id",
      hidden: true,
    },
    {
      title: translate("Observer"),
      field: "printing_name",
    },
    {
      title: translate("Hall chef"),
      field: "is_hall_chef",
    },
  ];

  const handleAddObserver = (values, { setSubmitting }) => {
    console.log(employees);
    console.log(values.employee);
    let emp = employees.find((emp) => emp.id == values.employee);
    setObservers([
      ...observers,
      { ...emp, hall_chef: hallChefDisabled ? 0 : values.hallChef },
    ]);
    setInactiveEmployees([...inactiveEmployees, { ...emp }]);
    setEmployees(employees.filter((emp) => emp.id != values.employee));
    if (values.hallChef == 1) setHallChefDisabled(true);
  };

  const handleDeleteObserver = (data) => {
    let emp = observers.find((emp) => emp.id == data.id);
    setObservers(observers.filter((emp) => emp.id != data.id));
    setInactiveEmployees(inactiveEmployees.filter((e) => e.id != emp.id));
    setEmployees([...employees, { ...emp }]);
    if (emp.hall_chef) setHallChefDisabled(false);
  };

  const noHallChefAlert = () => {
    return (
      <AlertDialog
        open={showAlert}
        handleClose={() => {
          setShowAlert(false);
        }}
        text={translate(
          "There's no chef in this hall. Do you want to continue?"
        )}
        handleOK={() => {
          saveObservers();
          setShowAlert(false);
        }}
        ok={translate("Yes")}
        discard={translate("No")}
      />
    );
  };

  const saveObservers = () => {
    if (!_.isEqual(observers, initialObservers)) {
      let success = true;
      if (initialObservers.length === 0) {
        observers.forEach((observer, index, arr) => {
          let payload = {
            exam_halls_ids: hall.exam_halls_ids,
            date: examDate,
            from: hall.from,
            to: hall.to,
            hall_id: hall.hall.id,
            employee_id: observer.id,
            is_master: observer.hall_chef,
          };
          ObservationService.Add(payload)
            .then((response) => {
              if (response.success) {
                if (index === observers.length - 1) {
                  if (success)
                    toast.success(
                      translate("Observations Updated Successfully")
                    );
                }
              } else {
                console.log(response.error);
                toast.error(response.error.message);
                success = false;
              }
            })
            .catch((error) => {
              console.error("error", error);
              success = false;
            })
            .finally(() => {
              setShow();
            });
        });
      }
      initialObservers.forEach((observer, index, arr) => {
        let payload = { id: observer.obs_id };
        ObservationService.Delete(payload)
          .then((response) => {
            if (response.success) {
              if (index === initialObservers.length - 1) {
                if (success && observers.length === 0)
                  toast.success(translate("Observations Updated Successfully"));
                observers.forEach((observer, index, arr) => {
                  let payload = {
                    exam_halls_ids: hall.exam_halls_ids,
                    date: examDate,
                    from: hall.from,
                    to: hall.to,
                    hall_id: hall.hall.id,
                    employee_id: observer.id,
                    is_master: observer.hall_chef,
                  };
                  ObservationService.Add(payload)
                    .then((response) => {
                      if (response.success) {
                        if (index === observers.length - 1) {
                          if (success)
                            toast.success(
                              translate("Observations Updated Successfully")
                            );
                        }
                      } else {
                        console.log(response.error);
                        toast.error(response.error.message);
                        success = false;
                      }
                    })
                    .catch((error) => {
                      console.error("error", error);
                      success = false;
                    });
                });
              }
            } else {
              console.log(response.error);
              toast.error(response.error.message);
              success = false;
            }
          })
          .catch((error) => {
            console.error("error", error);
            success = false;
          })
          .finally(() => {
            setShow();
          });
      });
    } else setShow();
  };

  const handleSave = () => {
    if (hallChefDisabled) {
      saveObservers();
    } else {
      setShowAlert(true);
    }
  };

  const renderObservers = () => {
    if (observers && observers.length > 0) {
      let data = observers;
      let options = {
        // exportAllData: true,
        // exportButton: true,
        actionsColumnIndex: -1,
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF",
          fontWeight: "bold",
        },
        filtering: false,
        paging: false,
        //pageSize: 10,
        maxBodyHeight: "300px",
        search: false,
        tableLayout: "auto",
      };
      let actions = [
        {
          icon: () => (
            <SuiButton
              style={{
                minWidth: 80,
                color: "#dc3545",
                backgroundColor: "transparent",
                border: "1px solid #dc3545",
              }}
            >
              {translate("Delete")}
            </SuiButton>
          ),
          onClick: (evt, data) => handleDeleteObserver(data),
        },
      ];
      return (
        <div>
          <ActionTable
            Title=""
            Columns={columns}
            Data={data.map((item) => {
              return {
                ...item,
                is_hall_chef: item.hall_chef
                  ? translate("Yes")
                  : translate("No"),
              };
            })}
            Options={options}
            Actions={actions}
          />
        </div>
      );
    } else return <Placeholder loading={false} />;
  };

  return (
    <>
      <Grid container md={12} sm={12}>
        <Grid md={12} sm={12} xs={12}>
          <Card style={{ padding: "1em 4em", margin: "5px 0px" }}>
            <Grid container>
              <GridItem item md={9} xs={12} sm={12}>
                <Typography variant="h5" component="div">
                  {title}
                </Typography>
              </GridItem>
              <GridItem md={3} xs={12} sm={12}>
                <SuiButton onClick={setShow} color={"warning"}>
                  <ArrowBack />
                  {translate("Cancel")}
                </SuiButton>
              </GridItem>
            </Grid>
          </Card>
          <Card style={{ padding: "3em 3em", margin: "5px 0px" }}>
            <Formik
              initialValues={initValues}
              validationSchema={formScheme}
              onSubmit={handleAddObserver}
            >
              {(formik) => {
                const {
                  values,
                  handleChange,
                  handleSubmit,
                  errors,
                  touched,
                  handleBlur,
                  isSubmitting,
                  isValid,
                  dirty,
                  setFieldValue,
                } = formik;
                return (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={3}>
                        <InputLabel id="demo-simple-select-label">
                          المراقب
                        </InputLabel>
                        <Field name="employee">
                          {({
                            field, // { name, value, onChange, onBlur }
                            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                            meta,
                          }) => (
                            <RSelect
                              defaultValue={values.employee}
                              placeholder={"اختيار المراقب"}
                              isSearchable={true}
                              options={employees}
                              id="employee"
                              name="employee"
                              error={Boolean(
                                touched.employee && errors.employee
                              )}
                              helperText={touched.employee && errors.employee}
                              onChange={(option) => {
                                setFieldValue("employee", option.id);
                              }}
                              getOptionLabel={(option) => option.printing_name}
                              getOptionValue={(option) => option.id}
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item xs={3}>
                        <FormControlLabel
                          label={translate("Hall chef")}
                          onChange={handleChange}
                          control={
                            <Checkbox
                              disabled={hallChefDisabled}
                              onChange={handleChange}
                              id="hallChef"
                              name="hallChef"
                              //checked={values.hallChef == 1}
                              onBlur={handleBlur}
                              placeholder={translate("Hall chef")}
                              defaultChecked
                            />
                          }
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <SuiButton
                          type="submit"
                          variant="gradient"
                          color="primary"
                        >
                          {translate("Add observer")}
                        </SuiButton>
                      </Grid>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
            {renderObservers()}
            <Box mt={4} mb={1}>
              <SuiButton
                onClick={handleSave}
                variant="gradient"
                color="primary"
              >
                {translate("Save")}
              </SuiButton>
            </Box>
          </Card>
        </Grid>
      </Grid>
      {noHallChefAlert()}
    </>
  );
};

(AssignObserversToHall as any).layout = Admin;
(AssignObserversToHall as any).auth = false;

export default AssignObserversToHall;
