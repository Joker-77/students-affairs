import * as React from "react";
import {
  Modal, Box, Grid, IconButton, Typography, TextField, MenuItem, FormControlLabel, Checkbox,
} from "@material-ui/core";
import {useRouter} from "next/router";
import colors from "../../assets/theme/base/colors";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import {Close} from "@material-ui/icons";
import CardBody from "../Card/CardBody";
import {useTranslation} from "../../Utility/Translations/useTranslation";
import { Form, Formik, setIn } from "formik";
import { useEffect } from "react";
import ObserverService from "../../Services/ObserverService";
import { IObserverModel } from "../../Models/Observers/ObserverModel";
import SuiButton from "../SuiButton";
import ActionTable from "../MaterialTable/ActionTable";
import Placeholder from "../../Utility/Placeholders";
//import {Autocomplete} from "@material-ui/Autocomplete";

interface IAssignObserversToHallModalProps {
  open: boolean;
  handleClose(): void;
  hall: any;
  formScheme: any;
  submitForm(values, submitting): void;
}
const AssignObserversToHallModal: React.FC<IAssignObserversToHallModalProps> = ({
  open,
  handleClose,
  hall,
  formScheme,
  submitForm
}) => {
  const initValues = {
    //from: hall.from,
    //to: hall.to,
    employee: null,
    hallChef: 1,
  };

  const {locale} = useRouter();
  const {translate} = useTranslation();

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
      direction: locale === 'ar' ? "rtl" : "ltr",
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
  const [inactiveEmployees, setInactiveEmployees] = React.useState([]);
  const [hallChefDisabled, setHallChefDisabled] = React.useState(false);

  useEffect(() => {
    ObserverService.GetAll()
      .then((res) => {
        console.log("Observers", res.result);
        let result = res.result as IObserverModel[];
        setEmployees(result.filter(emp => !emp.excluded));
      })
      .catch((error) => {
        console.error("error", error);
      });

      //TODO ------ Get observers of the selected hall
  }, []);

  const title = `${translate("Exam")} ${hall?.examsDetails} ${translate("from")} ${hall?.from} ${translate("to")} ${hall?.to} ${translate("in")} ${hall?.hallName} ${translate("on")} ${hall?.examDate}`;
  //const [employee, setEmployee] = React.useState(null);

  let columns = [
    {
        title: translate("Id"),
        field: "id",
        hidden: true,
    },
    {
        title: translate("Observer"),
        field: "name",
    },
    {
        title: translate("Hall chef"),
        field: "is_hall_chef",
    },
  ];

  const handleAddObserver = (values, { setSubmitting }) => {
    console.log(employees);
    console.log(values.employee);
    let emp = employees.find(emp => emp.id == values.employee);
    setObservers([...observers, {
      id: values.employee,
      first_name: emp.first_name,
      last_name: emp.last_name,
      hall_chef: hallChefDisabled ? 0 : values.hallChef
    }]);
    setInactiveEmployees([...inactiveEmployees, {
      id: emp.id,
      first_name: emp.first_name,
      last_name: emp.last_name
    }]);
    setEmployees(employees.filter(emp => emp.id != values.employee));
    if (values.hallChef == 1)
      setHallChefDisabled(true);
  }

  const handleDeleteObserver = (data) => {
    let emp = observers.find(emp => emp.id == data.id);
    setObservers(observers.filter(emp => emp.id != data.id));
    setInactiveEmployees(inactiveEmployees.filter(e => e.id != emp.id));
    setEmployees([...employees, {
      id: emp.id,
      first_name: emp.first_name,
      last_name: emp.last_name
    }]);
    setHallChefDisabled(false);
  }

  const renderObservers = () => {
    if (observers != null && observers.length > 0) {
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
            Data={data.map(item => { return {...item,
              is_hall_chef: item.hall_chef ? translate("Yes") : translate("No"),
              name: `${item.first_name} ${item.last_name}`,
              }})}
            Options={options}
            Actions={actions}
          />
        </div>
      );
    } else return <Placeholder loading={false} />;
  };
  

  return (
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={styles.modal}>
          <Card style={cardStyle}>
            <CardHeader style={styles.header}>
              <Grid container>
                <Grid md={8}>
                  <h4 style={{ fontWeight: "bold" }}>{title}</h4>
                </Grid>
                <Grid md={4}>
                  <IconButton
                      style={{
                        color: '#fff',
                        position: "absolute",
                        top: "1em",
                        [locale === 'ar' ? 'left' : 'right']: "2em",
                      }}
                      onClick={handleClose}
                  >
                    <Close />
                  </IconButton>
                </Grid>
              </Grid>
            </CardHeader>
            <CardBody>
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
                    } = formik;
                return (
                <Form>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                            {/*}
                            <Autocomplete
                              disablePortal
                              id="select-observer"
                              options={employees.map(emp => {
                                return {label: `${emp.firstName} ${emp.lastName}`, id: emp.id};
                              })}
                              sx={{ width: 300 }}
                              renderInput={(params) => <TextField {...params} label={translate("Observer")} />}
                            />
                            {*/}
                            <TextField
                              disabled={false}
                              onChange={handleChange}
                              variant="outlined"
                              size="small"
                              type="select"
                              id="employee"
                              name="employee"
                              select={true}
                              value={values.employee}
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.employee && errors.employee
                              )}
                              helperText={
                                touched.employee && errors.employee
                              }
                              placeholder={translate("Observer")}
                              label={translate("Observer")}
                              fullWidth
                            >
                              {employees?.map((emp) => (
                                <MenuItem key={emp.id} value={emp.id}>
                                  {`${emp.first_name} ${emp.last_name}`}
                                </MenuItem>
                              ))}
                            </TextField>
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel label={translate("Hall chef")}
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
                        } />
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
                    )}}
            </Formik>
            {renderObservers()}
            </CardBody>
          </Card>
      </Box>
    </Modal>
  );
};

export default AssignObserversToHallModal;
