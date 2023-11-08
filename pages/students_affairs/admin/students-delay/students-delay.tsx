import Admin from "./../../../../layouts/Admin";
import GridContainer from "./../../../../components/Grid/GridContainer";
import EduYearService from "../../../../Services/EduYearService";
import PlanService from "../../../../Services/PlanService";
import YearsService from "../../../../Services/SpecYearsService";
import SpecialityService from "../../../../Services/SpecialityService";
import StudentsImportService from "../../../../Services/StudentsImportService";
import { default as RSelect } from "react-select";
import React, { useEffect, useState } from "react";
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
} from "@material-ui/core";
import GridItem from "../../../../components/Grid/GridItem";
import { ExportToCsv } from "export-to-csv";
import { ICandidateModel } from "../../../../Models/ApiResponse/CandidateModel";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import Placeholder from "../../../../Utility/Placeholders";
import SuiButton from "../../../../components/SuiButton";
import { getStudentToPrint } from "../../../../Helpers/delay-print.js";

const StudentDelay: React.FC<ITeachersListProps> = ({}) => {
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
    setLoadNum(true);
    StudentsImportService.getStudents(e, eduYear)
      .then((resp) => {
        console.log(resp);
        let nums = resp.result.map((e) => {
          return {
            label: e.candidate.personal_number,
            value: e.candidate.personal_number,
          };
        });
        console.clear();
        console.log(nums);
        setNums(nums);
        setCandidates(resp.result.map((e) => e.candidate));
        setLoadNum(false);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setLoadNum(false);
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
      title: translate("Father"),
      field: "father.first_name",
      hidden: true,
      filtering: false,
    },
    {
      title: translate("Mother"),
      field: "mother.first_name",
      hidden: true,
      filtering: false,
    },
    {
      title: translate("Registeration number"),
      field: "registeration_number",
      filtering: false,
      type: "string",
    },
    {
      title: translate("Subscription number"),
      field: "certificates[0].subscription_number",
      filtering: false,
    },
    {
      title: translate("City"),
      field: "certificates[0].city",
      filtering: false,
    },
    {
      title: translate("Round"),
      field: "certificates[0].round",
      filtering: false,
    },
    {
      title: translate("Ministry External"),
      field: "external_value",
      filtering: false,
    },
    {
      title: translate("Registration Year"),
      field: "registeration_year_name",
      filtering: false,
    },
    // {
    //     title: translate("Result"),
    //     field: "certificates[0].result",
    // },
  ];
  // Dynamic Export
  const [showExportColumns, setShowExportColumns] = React.useState(false);
  const [selectedColumns, setSelectedColumns] = React.useState([]);
  const [checked, setChecked] = React.useState([]);
  const [num, setPersonalNum] = React.useState("");
  const [nums, setNums] = React.useState([]);
  const [loadNum, setLoadNum] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [student, setStudent] = React.useState(null);
  const handleExportData = () => {
    setShowExportColumns(!showExportColumns);
  };
  const csvOptions = {
    fieldSeparator: ";",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: selectedColumns.map((c) => c.title),
  };
  const csvExporter = new ExportToCsv(csvOptions);
  const generateExcel = () => {
    csvExporter.generateCsv(
      Candidates.map((ct) => {
        let object = {};
        selectedColumns.forEach((item, index) => {
          if (item.field == "full_name")
            _.set(
              object,
              `col ${index}`,
              `${ct.person?.first_name} ${ct.father?.first_name} ${ct.person?.last_name}`
            );
          else _.set(object, `col ${index}`, _.get(ct, item.field) ?? "");
        });
        console.log(object);
        return object;
      })
    );
  };

  const changeNum = (e) => {
    setPersonalNum(e);
    setDisable(true);
    StudentsImportService.getDelay(e, eduYear)
      .then((resp) => {
        setStudent(resp.result);
        setDisable(false);
      })
      .catch((e) => {
        console.log(e);
        setDisable(false);
      });
  };

  const printDelay = () => {
    if (student) {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(getStudentToPrint(student, 1));
      setTimeout(() => printWindow.print(), 2500);
    }
  };
  const printAttend = () => {
    if (student) {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(getStudentToPrint(student, 2));
      setTimeout(() => printWindow.print(), 2500);
    }
  };
  const renderCandidates = () => {
    if (loading) return <Placeholder loading />;
    if (Candidates != null && Candidates.length > 0) {
      let data = Candidates;
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
          Title={translate("Candidates List")}
          Columns={columns}
          Data={data.map((item) => {
            return {
              ...item,
              registeration_year_name:
                item.registeration_year == new Date().getFullYear()
                  ? "الحالي"
                  : "السابق",
              external_value: item.external
                ? translate("Yes")
                : translate("No"),
              full_name: `${item.person?.first_name} ${item.father?.first_name} ${item.person?.last_name}`,
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
        <GridItem md={2}>
          <InputLabel id="demo-simple-select-label">الرقم الذاتي</InputLabel>
          <FormControl fullWidth variant="filled" size="small">
            <RSelect
              defaultValue={num}
              label="Single select"
              placeholder={"اختيار الرقم الذاتي"}
              isSearchable={true}
              isDisabled={loadNum}
              options={nums}
              onChange={(e) => changeNum(e.value)}
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.value}
            />
          </FormControl>
        </GridItem>
        <GridItem md={3}>
          <SuiButton
            style={{ minWidth: 140, marginTop: "1.5em" }}
            color={"primary"}
            onClick={printDelay}
            disabled={disable}
          >
            طباعة وثيقة تأجيل
          </SuiButton>
        </GridItem>
        <GridItem md={3}>
          <SuiButton
            style={{ minWidth: 140, marginTop: "1.5em" }}
            color={"primary"}
            onClick={printAttend}
            disabled={disable}
          >
            طباعة وثيقة دوام
          </SuiButton>
        </GridItem>
      </Grid>
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
(StudentDelay as any).auth = true;
(StudentDelay as any).layout = Admin;
export default StudentDelay;
