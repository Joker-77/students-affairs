import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Select,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
  Input,
  TextField,
  InputAdornment,
  OutlinedInput,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import {
  FilterList,
  Sort,
  Search,
  Print,
  Add,
  Details,
  FilterListSharp,
  AddComment,
  AddBox,
  Folder,
  PostAdd,
  Description,
  ExpandMore,
  FileCopy,
} from "@material-ui/icons";
import Admin from "../../../../layouts/Admin";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import Placeholder from "../../../../Utility/Placeholders";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import { ITeacherModel } from "../../../../Models/Teachers/TeacherModel";
import Teacherservice from "../../../../Services/TeacherService";
import TeacherDetails from "./teacher-details";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import _ from "lodash";
import SuiButton from "../../../../components/SuiButton";
import { ExportToCsv } from "export-to-csv";

interface ITeachersListProps {}
const TeachersList: React.FC<ITeachersListProps> = ({}) => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [showCourseDetail, setshowCourseDetail] = React.useState(false);
  const [course, setCourse] = React.useState<ITeacherModel[]>();
  const [searchResult, setSearchResult] = React.useState(null);

  const handleCreate = () => {};

  const handleClose = () => {
    setSearchResult(null);
    setshowCourseDetail(false);
  };

  /********************** Filter && Sort *********/
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel?.current?.offsetWidth);
  }, []);

  const inputSortLabel = React.useRef(null);
  const [sortLabelWidth, setSortLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setSortLabelWidth(inputSortLabel?.current?.offsetWidth);
  }, []);

  const filters = [
    {
      value: 0,
      label: translate("None"),
    },
    {
      value: "1",
      label: translate("Name"),
    },
    {
      value: "2",
      label: translate("Phone"),
    },
    {
      value: "3",
      label: translate("Degree"),
    },
  ];

  const [Teachers, setTeachers] = React.useState<ITeacherModel[]>(null);
  const [filteredTeachers, setfilteredTeachers] =
    React.useState<ITeacherModel[]>(null);
  const [filter, setFilter] = React.useState(0);
  const [search, setSearch] = React.useState("");

  const filterData = () => {
    let _filteredTeachers = Teachers;
    let _value = search;
    if (filter == 0) {
      _filteredTeachers = Teachers.filter((teacher, index) => {
        return (
          teacher.number.includes(_value) ||
          teacher.activity.includes(_value) ||
          teacher.degree.includes(_value) ||
          teacher.person.first_name.includes(_value) ||
          teacher.person.last_name.includes(_value) ||
          teacher.person.phones.at(0).toString().includes(_value)
        );
      });
      setfilteredTeachers(_filteredTeachers);
    }
    if (filter == 1) {
      _filteredTeachers = Teachers.filter((course, index) => {
        return (
          course.ar_name.includes(_value) ||
          course.en_name.includes(_value) ||
          course.fr_name.includes(_value)
        );
      });
      setfilteredTeachers(_filteredTeachers);
    }
    if (filter == 2) {
      _filteredTeachers = Teachers.filter((course, index) => {
        return course.current_description?.total_hours
          .toString()
          .includes(_value);
      });
      setfilteredTeachers(_filteredTeachers);
    }
    if (filter == 3) {
      _filteredTeachers = Teachers.filter((course, index) => {
        return course.current_description?.credit.toString().includes(_value);
      });
      setfilteredTeachers(_filteredTeachers);
    }
  };
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
    filterData();
  };
  const handleSearch = (event) => {
    let _value = event?.target?.value;
    setSearch(_value);
    filterData();
  };

  const [sortBy, setSortBy] = React.useState(0);
  const handleSortBy = (event) => {
    let _value = event?.target?.value;
    setSortBy(_value);
    let _filteredTeachers = Teachers;
    if (sortBy == 1) {
      _filteredTeachers = Teachers.sort((a, b) => {
        if (a.ar_name > b.ar_name) {
          return 1;
        } else if (a.ar_name < b.ar_name) {
          return -1;
        }
        if (a.en_name > b.en_name) {
          return 1;
        } else if (a.en_name < b.en_name) {
          return -1;
        }
        if (a.fr_name > b.fr_name) {
          return 1;
        } else if (a.fr_name < b.fr_name) {
          return -1;
        } else {
          return 0;
        }
      });
      setfilteredTeachers(_filteredTeachers);
    }
    if (sortBy == 2) {
      _filteredTeachers = Teachers.sort((a, b) => {
        if (
          a.current_description?.total_hours >
          b.current_description?.total_hours
        ) {
          return 1;
        } else if (
          a.current_description?.total_hours <
          b.current_description?.total_hours
        ) {
          return -1;
        } else {
          return 0;
        }
      });
      setfilteredTeachers(_filteredTeachers);
    }
    if (sortBy == 3) {
      _filteredTeachers = Teachers.sort((a, b) => {
        if (a.current_description?.credit > b.current_description?.credit) {
          return 1;
        } else if (
          a.current_description?.credit < b.current_description?.credit
        ) {
          return -1;
        } else {
          return 0;
        }
      });
      setfilteredTeachers(_filteredTeachers);
    }
  };
  /************************** Data ****************************/
  useEffect(() => {
    Teacherservice.GetAll()
      .then((res) => {
        console.log("Teachers", res.result);
        let _teachers = res.result as ITeacherModel[];
        _teachers.forEach(
          (e) =>
            (e.internal_phone = e.person?.phones?.filter(
              (e) => e.type == "private"
            )[0].phone)
        );
        console.clear();
        console.log("Teachers", _teachers);
        setfilteredTeachers(_teachers);
        setTeachers(_teachers);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);
  /************************** Finish Data ****************************/
  /************************** Handle edit data ****************************/
  const [isEditable, setIsEditable] = React.useState(false);
  /************************** Finish Handle edit data ****************************/

  /**************************  Handle Export data ****************************/
  const [showExportColumns, setShowExportColumns] = React.useState(false);
  let columns = [
    {
      title: translate("Id"),
      field: "id",
      hidden: true,
    },
    {
      title: translate("Id Number"),
      field: "number",
    },
    {
      title: translate("First Name"),
      field: "person.first_name",
    },
    {
      title: translate("Last Name"),
      field: "person.last_name",
    },
    {
      title: translate("Degree"),
      field: "degree",
    },
    {
      title: translate("Teacher Activity"),
      field: "activity",
    },
    {
      title: translate("Internal Phone"),
      field: "internal_phone",
    },
  ];
  const [checked, setChecked] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState([]);
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
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: selectedColumns.map((c) => c.title),
  };
  const csvExporter = new ExportToCsv(csvOptions);
  const handleExportData = () => {
    setShowExportColumns(!showExportColumns);
  };
  const generateExcel = () => {
    csvExporter.generateCsv(
      filteredTeachers.map((course) => {
        let object = {};
        selectedColumns.forEach((item, index) => {
          _.set(object, `col ${index}`, _.get(course, item.field) ?? "");
        });
        console.log(object);
        return object;
      })
    );
  };
  /************************** Finish Handle Export Data ****************************/
  const tableRef = useRef();
  const generatePDF = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: translate("Teachers"),
  });

  const getTeacher = (data: ITeacherModel) => {};
  const renderTeachers = () => {
    if (filteredTeachers != null && filteredTeachers.length > 0) {
      let data = filteredTeachers;
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
        paging: true,
        pageSize: 10,
        maxBodyHeight: "500px",
        search: false,
        tableLayout: "auto",
      };
      let actions = [
        {
          icon: () => (
            <SuiButton
              variant="outlined"
              style={{ minWidth: 140, width: 140 }}
              color={"primary"}
            >
              {translate("Print")}
              <Print />
            </SuiButton>
          ),
          onClick: (evt, data) => {},
        },
        {
          icon: () => (
            <SuiButton style={{ minWidth: 140, width: 140 }} color={"primary"}>
              {translate("Teacher Details")}
              <FileCopy />
            </SuiButton>
          ),
          onClick: (evt, data) => getTeacher(data),
        },
      ];
      return (
        <div ref={tableRef}>
          <ActionTable
            Title={translate("Teachers List")}
            Columns={columns}
            Data={data}
            Options={options}
            Actions={actions}
          />
        </div>
      );
    } else return <Placeholder loading={false} />;
  };
  return (
    <GridContainer>
      {!showCourseDetail && (
        <>
          <GridItem md={12}>
            <GridItem container md={12} style={{ margin: "0px 0px 10px 0" }}>
              <GridItem md={7}></GridItem>
              <GridItem>
                <Button
                  style={{ margin: "0px 5px" }}
                  disabled={false}
                  variant="contained"
                  className={classes.submitBtn}
                  onClick={generatePDF}
                >
                  <span style={{ padding: "0px 0px 0px 10px" }}>
                    {translate("Print")}
                  </span>
                  <Print />
                </Button>
                <Button
                  style={{ margin: "0px 5px" }}
                  disabled={false}
                  variant="contained"
                  className={classes.submitBtn}
                  onClick={handleExportData}
                >
                  <span style={{ padding: "0px 0px 0px 10px" }}>
                    {translate("Export to excel")}
                  </span>
                  <Description />
                </Button>
                <Button
                  style={{ margin: "0px 5px" }}
                  disabled={false}
                  variant="contained"
                  className={classes.submitBtn}
                  onClick={handleCreate}
                >
                  <span style={{ padding: "0px 0px 0px 10px" }}>
                    {translate("Add New Teacher")}
                  </span>
                  <AddBox />
                </Button>
              </GridItem>
            </GridItem>
            {showExportColumns && (
              <GridItem>
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
            <GridItem style={{ marginBottom: "1em", marginTop: "2em" }}>
              <FormControl
                size="small"
                variant="outlined"
                style={{ minWidth: 150, margin: "0 0 0 1em" }}
              >
                <InputLabel
                  style={{ display: "flex" }}
                  shrink
                  ref={inputLabel}
                  htmlFor="outlined-filter"
                >
                  <span>{translate("Filter")}</span>
                  <FilterList />
                </InputLabel>
                <Select
                  id="select-filter"
                  value={filter}
                  onChange={handleChangeFilter}
                  label={filters[filter].label}
                  input={
                    <OutlinedInput
                      notched
                      labelWidth={labelWidth}
                      name="filter"
                      id="outlined-filter"
                    />
                  }
                >
                  {filters.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <TextField
                  onKeyUp={handleSearch}
                  size="small"
                  id="outlined-basic"
                  label="بحث"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </FormControl>
              <FormControl
                size="small"
                variant="outlined"
                style={{ minWidth: 150, margin: "0 1em 0 1em" }}
              >
                <InputLabel
                  style={{ display: "flex" }}
                  shrink
                  ref={inputSortLabel}
                  htmlFor="outlined-sort"
                >
                  <span>{translate("Sort By")}</span>
                  <Sort />
                </InputLabel>
                <Select
                  displayEmpty
                  fullWidth
                  labelId="autowidth-label"
                  id="select-sort"
                  value={sortBy}
                  onChange={handleSortBy}
                  autoWidth
                  input={
                    <OutlinedInput
                      notched
                      labelWidth={sortLabelWidth}
                      name="sort"
                      id="outlined-sort"
                    />
                  }
                  label={filters[sortBy].label}
                >
                  {filters.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </GridItem>
          </GridItem>
          <GridItem md={12}>{renderTeachers()}</GridItem>
        </>
      )}
      {showCourseDetail && <TeacherDetails />}
    </GridContainer>
  );
};
(TeachersList as any).auth = true;
(TeachersList as any).layout = Admin;
export default TeachersList;
