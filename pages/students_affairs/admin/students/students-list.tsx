import Admin from "./../../../../layouts/Admin";
import GridContainer from "./../../../../components/Grid/GridContainer";
import EduYearService from "../../../../Services/EduYearService";
import PlanService from "../../../../Services/PlanService";
import YearsService from "../../../../Services/SpecYearsService";
import SpecialityService from "../../../../Services/SpecialityService";
import StudentsImportService from "../../../../Services/StudentsImportService";
import { default as RSelect } from "react-select";
import React, { useEffect, useState } from "react";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { Close, Description } from "@material-ui/icons";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  makeStyles,
  Input,
  TextField,
  AccordionDetails,
  Accordion,
} from "@material-ui/core";
import GridItem from "../../../../components/Grid/GridItem";
import { ExportToCsv } from "export-to-csv";
import { ICandidateModel } from "../../../../Models/ApiResponse/CandidateModel";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import Placeholder from "../../../../Utility/Placeholders";
import SuiButton from "../../../../components/SuiButton";
import { getCandidatesToPrint } from "../../../../Helpers/candidates-print.js";
import _ from "lodash";

const StudentsList: React.FC<ITeachersListProps> = ({}) => {
  // Programs
  const [programs, setPrograms] = useState([]);
  const [program, setProgram] = useState(null);

  // Edu Year
  const [eduYears, setEduYears] = useState([]);
  const [eduYear, setEduYear] = useState(null);

  const [years, setYears] = useState<IStudentYear[]>();

  const [year, setYear] = useState<number | undefined>(null);
  const [speciality, setSpeciality] = useState(1);

  const [specialities, SetSpecialities] = useState<any>([]);

  // Years ( Speciality Year)
  const [specYears, setSpecYears] = useState([]);
  const [specYear, setSpecYear] = useState(null);

  const [loadSpecYear, setLoadSpecYear] = useState(false);
  const [spec, setSpec] = useState(null);
  const [loading, setLoading] = React.useState(false);
  const { translate } = useTranslation();
  const [Candidates, setCandidates] = React.useState<ICandidateModel[]>(null);
  const [filteredCandidates, setfilteredCandidates] =
    React.useState<ICandidateModel[]>(null);
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [status, setStatus] = useState("الكل");
  const [authority, setAuthority] = useState("الكل");
  const filters = [
    {
      label: "الكل",
      value: "الكل",
    },
    {
      label: "مستجد",
      value: "مستجد",
    },
    {
      label: "معيد",
      value: "معيد",
    },
  ];
  const authorityFilters = [
    {
      label: "الكل",
      value: "الكل",
    },
    {
      label: "المركز",
      value: "المركز",
    },
    {
      label: "وزارة التعليم العالي",
      value: "وزارة التعليم العالي",
    },
    {
      label: "دراسة خاصة",
      value: "دراسة خاصة",
    },
    {
      label: "خ-أ-ع",
      value: "خ-أ-ع",
    },
  ];
  useEffect(() => {
    PlanService.GetAll()
      .then((programs) => {
        EduYearService.GetYears("")
          .then((eduYears) => {
            setPrograms(programs.result);
            setEduYears(eduYears.result);
          })
          .catch((err) => {
            console.error("Error", err);
          });
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }, []);

  useEffect(() => {
    EduYearService.GetYears(`${new Date().getFullYear()}`)
      .then((resp) => {
        let result = resp.result;
        if (result.length > 0) setLatestYear(result[0]);
        console.log(result[0].year);
        EduYearService.checkYear(result[0]?.year)
          .then((response) => {
            console.log("response", response);
            if (response?.success) {
              EduYearService.InitYears({
                year: latestYear.year,
                type: value,
              })
                .then((response) => {
                  console.clear();
                  console.log(response);
                  let result = response?.result;
                })
                .catch((error) => {});
            } else {
              toast.success("السنة موجودة");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {});
    SpecialityService.GetAll()
      .then((response) => {
        if (response.result.length > 0) {
          console.log(response.result);
          YearsService.GetWhereSpeciality(response.result[0].id)
            .then((res) => {
              console.log(res.result);
              if (res.result.length > 0) {
                let specs = response.result.map((data) => {
                  return {
                    id: data.id,
                    en_name: data.en_name,
                    ar_name: data.ar_name,
                    code: data.code,
                  };
                });
                let initYears = res.result.map((data) => {
                  return {
                    id: data.id,
                    en_name: data.en_name,
                    ar_name: data.ar_name,
                    code: data.code,
                  };
                });
                SetSpecialities(specs);
              }
            })
            .catch((error) => {});
        }
      })
      .catch((error) => {});
  }, []);

  const changeProgram = (val: number) => {
    setProgram(val);
  };
  const changeEduYear = (val: number) => {
    setEduYear(val);
  };
  const changeSpec = (e) => {
    setSpeciality(e);
    setLoadSpecYear(true);
    YearsService.GetWhereSpeciality(e)
      .then((response) => {
        if (response.result && response.result.length > 0) {
          console.clear();
          console.log(response.result);
          let _data: ISpecYear[] = response.result.map((e) => {
            return {
              id: e.id,
              en_name: e.en_name,
              ar_name: e.ar_name,
              speciality_id: e.speciality_id,
            };
          });
          setSpecYears(_data);
          setSpecYear(_data[0].id);
        } else {
          setSpecYears([]);
          setSpecYear(null);
        }
        setLoadSpecYear(false);
      })
      .catch((err) => {
        setSpecYears([]);
        setSpecYear(null);
        setLoadSpecYear(false);
      });
  };

  const showStudents = (e) => {
    setSpec(e);
    setLoading(true);
    StudentsImportService.getStudents(e, eduYear)
      .then((resp) => {
        console.log(resp);
        setCandidates(resp.result.map((e) => e.candidate));
        setfilteredCandidates(resp.result.map((e) => e.candidate));
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  // columns
  let columns = [
    {
      title: translate("Id"),
      field: "id",
      hidden: true,
      filtering: false,
    },
    {
      title: translate("Name"),
      field: "full_name",
      filtering: false,
    },
    {
      title: "الرقم الذاتي",
      field: "personal_number",
      filtering: false,
    },
    {
      title: "جهة الإيفاد",
      field: "auth",
      filtering: false,
    },
    {
      title: translate("Ministry External"),
      field: "external_value",
      filtering: false,
    },
    {
      title: "الحالة",
      field: "status",
      filtering: false,
    },
  ];
  // Dynamic Export
  const [showExportColumns, setShowExportColumns] = React.useState(false);
  const [selectedColumns, setSelectedColumns] = React.useState([]);
  const [checked, setChecked] = React.useState([]);
  const handleExportData = () => {
    setShowExportColumns(!showExportColumns);
  };
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    setSelectedColumns(
      columns.filter((item) => {
        return updatedList.includes(item.field);
      })
    );
  };
  const csvOptions = {
    fieldSeparator: ";",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: true,
    // headers: selectedColumns.map((c) => c.title),
  };
  const csvExporter = new ExportToCsv(csvOptions);
  const generateExcel = () => {
    csvExporter.generateCsv(
      filteredCandidates.map((ct) => {
        let object = {};
        selectedColumns.forEach((item, index) => {
          if (item.field == "registeration_year_name") {
            let val =
              item.registeration_year == new Date().getFullYear()
                ? "الحالي"
                : "السابق";
            _.set(object, item.title, val);
          } else if (item.field == "external_value") {
            let val = ct.external ? translate("Yes") : translate("No");
            _.set(object, item.title, val);
          } else if (item.field == "auth") {
            let val = ct.registeration_class;
            _.set(object, item.title, val);
          } else if (item.field == "personal_number") {
            _.set(object, item.title, ct?.personal_number!);
          } else if (item.field == "status") {
            _.set(object, item.title, ct?.status!);
          } else if (item.field == "full_name")
            _.set(
              object,
              "الاسم الكامل",
              `${ct.person?.first_name} ${ct.father?.first_name} ${ct.person?.last_name}`
            );
          else _.set(object, item.title, _.get(ct, item.field) ?? "");
        });
        console.log(object);
        return object;
      })
    );
  };
  const print = () => {
    if (eduYear && speciality && specYear) {
      const printWindow = window.open("", "_blank");
      console.log(
        eduYear,
        speciality,
        specYear,
        eduYears.filter((e) => e.id == eduYear)[0].year,
        specialities.filter((e) => e.id == speciality)[0].ar_name,
        specYears.filter((e) => e.id == specYear)[0].ar_name
      );
      printWindow.document.write(
        getCandidatesToPrint(
          filteredCandidates,
          eduYears.filter((e) => e.id == eduYear)[0].year,
          specialities.filter((e) => e.id == speciality)[0].ar_name,
          specYears.filter((e) => e.id == spec)[0].ar_name
        )
      );
      setTimeout(() => printWindow.print(), 2500);
    }
  };
  const filterAuth = (data) => {
    if (authority != "الكل") {
      let filtered = data.filter((e) => e.registeration_class == authority);
      setfilteredCandidates(filtered);
    } else {
      setfilteredCandidates(data);
    }
  };
  const filterStatus = (data) => {
    if (status != "الكل") {
      let filtered = data.filter((e) => e.status == status);
      setfilteredCandidates(filtered);
    } else {
      setfilteredCandidates(data);
    }
  };
  const changeStatus = (val) => {
    setStatus(val);
    if (val != "الكل") {
      let filtered = Candidates.filter((e) => e.status == val);
      filterAuth(filtered);
    } else {
      let filtered = Candidates.slice();
      filterAuth(filtered);
    }
  };
  const changeAuth = (val) => {
    setAuthority(val);
    if (val != "الكل") {
      let filtered = Candidates.filter((e) => e.registeration_class == val);
      filterStatus(filtered);
    } else {
      let filtered = Candidates.slice();
      filterStatus(filtered);
    }
  };
  const renderCandidates = () => {
    if (loading) return <Placeholder loading />;
    if (filteredCandidates != null && filteredCandidates.length > 0) {
      let data = filteredCandidates;
      let options = {
        exportAllData: true,
        exportButton: true,
        actionsColumnIndex: -1,
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF",
          fontWeight: "bold",
        },
        filtering: true,
        paging: true,
        pageSize: 10,
        maxBodyHeight: "500px",
      };
      return (
        <ActionTable
          Title={`قائمة الطلاب (${filteredCandidates.length})`}
          Columns={columns}
          Data={data.map((item) => {
            return {
              ...item,
              registeration_year_name:
                item.registeration_year == new Date().getFullYear()
                  ? "الحالي"
                  : "السابق",
              auth: item.registeration_class,
              external_value: item.external
                ? translate("Yes")
                : translate("No"),
              full_name: `${item.person?.first_name} ${item.father?.first_name} ${item.person?.last_name}`,
              status: `${item.status!}`,
              personal_number: `${item.personal_number!}`,
            };
          })}
          Options={options}
          Actions={null}
        />
      );
    } else return <Placeholder />;
  };
  return (
    <GridContainer>
      <Grid container md={12} style={{ margin: "2em 0em" }}>
        <GridItem md={2}>
          <InputLabel id="demo-simple-select-label">البرنامج</InputLabel>
          <FormControl fullWidth variant="filled" size="small" size="small">
            <RSelect
              defaultValue={program}
              placeholder={"اختيار البرنامج"}
              isSearchable={true}
              options={programs}
              onChange={(e) => {
                changeProgram(e.id);
              }}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
            />
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <InputLabel id="demo-simple-select-label">السنة</InputLabel>
          <FormControl fullWidth variant="filled" size="small">
            <RSelect
              defaultValue={eduYear}
              placeholder={"اختيار السنة"}
              isSearchable={true}
              options={eduYears}
              onChange={(e) => changeEduYear(e.id)}
              getOptionLabel={(option) => option.year}
              getOptionValue={(option) => option.id}
            />
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <InputLabel id="demo-simple-select-label">الاختصاص</InputLabel>
          <FormControl fullWidth variant="filled">
            <RSelect
              defaultValue={speciality}
              placeholder={"اختيار الاختصاص"}
              isSearchable={true}
              options={specialities}
              onChange={(e) => changeSpec(e.id)}
              getOptionLabel={(option) => option.ar_name}
              getOptionValue={(option) => option.id}
            />
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <InputLabel id="demo-simple-select-label">السنة</InputLabel>
          <FormControl fullWidth variant="filled" size="small">
            <RSelect
              defaultValue={spec}
              label="Single select"
              placeholder={"اختيار السنة"}
              isSearchable={true}
              isDisabled={loadSpecYear}
              options={specYears}
              onChange={(e) => showStudents(e.id)}
              getOptionLabel={(option) => option.ar_name}
              getOptionValue={(option) => option.id}
            />
          </FormControl>
        </GridItem>
        <GridItem md={2} style={{ display: "flex", justifyContent: "center" }}>
          <SuiButton
            style={{ minWidth: 140, marginTop: "1.5em" }}
            color={"primary"}
            onClick={print}
          >
            طباعة
          </SuiButton>
        </GridItem>
        <GridItem md={2}>
          <SuiButton
            color={"primary"}
            style={{ minWidth: 140, marginTop: "1.5em" }}
            onClick={handleExportData}
          >
            تصدير
          </SuiButton>
        </GridItem>
        <Grid container style={{ marginTop: "2em" }}>
          <GridItem md={3}>
            <InputLabel id="demo-simple-select-label">فلتر الحالة</InputLabel>
            <FormControl fullWidth variant="filled" size="small">
              <RSelect
                defaultValue={status}
                label="Single select"
                placeholder={"اختيار الحالة"}
                isSearchable={true}
                options={filters}
                onChange={(e) => changeStatus(e.value)}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
              />
            </FormControl>
          </GridItem>
          <GridItem md={3}>
            <InputLabel id="demo-simple-select-label">فلتر الحالة</InputLabel>
            <FormControl fullWidth variant="filled" size="small">
              <RSelect
                defaultValue={authority}
                label="Single select"
                placeholder={"اختيار جهة الايفاد"}
                isSearchable={true}
                options={authorityFilters}
                onChange={(e) => changeAuth(e.value)}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
              />
            </FormControl>
          </GridItem>
        </Grid>
      </Grid>
      {showExportColumns && (
        <GridItem style={{ marginBottom: "1em" }}>
          <Accordion>
            <AccordionDetails>
              <GridItem container>
                <GridItem
                  md={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Typography
                    style={{
                      backgroundColor: "lightgray",
                      boxShadow:
                        "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                      padding: "0em 1.2em",
                      margin: "0em 0em .5em 0em",
                    }}
                  >
                    {translate("Select Columns")}
                  </Typography>
                </GridItem>
                <GridItem md={12}>
                  <GridItem
                    className="list-container"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {columns
                      // .filter((item) => !item.hidden)
                      .map((item, index) => (
                        <GridItem key={index}>
                          <input
                            value={item.field}
                            type="checkbox"
                            onChange={handleCheck}
                          />
                          <span>{item.title}</span>
                        </GridItem>
                      ))}
                  </GridItem>
                  <GridItem
                    md={12}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      style={{ margin: "0px 5px" }}
                      disabled={false}
                      variant="contained"
                      className={classes.successText}
                      onClick={generateExcel}
                    >
                      <span style={{ padding: "0px 0px 0px 10px" }}>
                        {translate("Export")}
                      </span>
                      <Description />
                    </Button>
                  </GridItem>
                </GridItem>
              </GridItem>
            </AccordionDetails>
          </Accordion>
        </GridItem>
      )}
      <Grid
        container
        style={{ display: "flex", justifyContent: "center" }}
        md={12}
      >
        {renderCandidates()}
      </Grid>
    </GridContainer>
  );
};
(StudentsList as any).auth = true;
(StudentsList as any).layout = Admin;
export default StudentsList;
