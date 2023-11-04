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
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import {
  ICourseModel,
  ICourseDescriptionModel,
} from "../../../../Models/Courses/CourseModel";
import CourseService from "../../../../Services/CourseService";
import SuiButton from "../../../../components/SuiButton";
import CandidateDetails from "../../affairs_officer/candidates/candidate-details";
import CourseDetails from "./course-details";
import { ExportToCsv } from "export-to-csv";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import _ from "lodash";

interface ICoursesListProps {}
const CoursesList: React.FC<ICoursesListProps> = ({}) => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const router = useRouter();
  const [showCourseDetail, setshowCourseDetail] = React.useState(false);
  const [course, setCourse] = React.useState<ICourseModel>();
  const [searchResult, setSearchResult] = React.useState(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const setShow = () => {
    setshowCourseDetail(!showCourseDetail);
  };
  const activateEdit = () => {
    setIsEditable(!isEditable);
  };

  const getCourse = (data: any) => {
    setLoading(true);
    let _course = Courses.find((item, index) => item.id === data?.id);
    CourseService.Get(data.id)
      .then((res) => {
        let _course = res.result as ICourseModel;
        setCourse(_course);
        console.log(_course);
        setIsCreate(false);
        setIsEditable(false);
        setshowCourseDetail(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const [isCreate, setIsCreate] = useState<boolean>(true);

  const handleCreate = () => {
    setCourse(null);
    setIsCreate(true);
    setIsEditable(true);
    setshowCourseDetail(true);
  };

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
      label: translate("Number of all hours"),
    },
    {
      value: "3",
      label: translate("Number of accredited hours"),
    },
  ];

  const [Courses, setCourses] = React.useState<ICourseModel[]>(null);
  const [filteredCourses, setFilteredCourses] =
    React.useState<ICourseModel[]>(null);
  const [filter, setFilter] = React.useState(0);
  const [search, setSearch] = React.useState("");

  const filterData = () => {
    setLoading(true);
    let _filteredCourses = Courses;
    let _value = search;
    if (filter == 0) {
      _filteredCourses = Courses.filter((course, index) => {
        return (
          course.ar_name.includes(_value) ||
          course.en_name.includes(_value) ||
          course.fr_name.includes(_value) ||
          course.current_description?.total_hours.toString().includes(_value) ||
          course.current_description?.credit.toString().includes(_value)
        );
      });
      setFilteredCourses(_filteredCourses);
    }
    if (filter == 1) {
      _filteredCourses = Courses.filter((course, index) => {
        return (
          course.ar_name.includes(_value) ||
          course.en_name.includes(_value) ||
          course.fr_name.includes(_value)
        );
      });
      setFilteredCourses(_filteredCourses);
    }
    if (filter == 2) {
      _filteredCourses = Courses.filter((course, index) => {
        return course.current_description?.total_hours
          .toString()
          .includes(_value);
      });
      setFilteredCourses(_filteredCourses);
    }
    if (filter == 3) {
      _filteredCourses = Courses.filter((course, index) => {
        return course.current_description?.credit.toString().includes(_value);
      });
      setFilteredCourses(_filteredCourses);
    }
    setLoading(false);
  };
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };
  const handleSearch = (event) => {
    let _value = event?.target?.value;
    setSearch(_value);
  };

  const [sortBy, setSortBy] = React.useState(0);
  const handleSortBy = (_value) => {
    setSortBy(_value);
  };
  const applySorting = () => {
    setLoading(true);
    setFilteredCourses([]);
    let _filteredCourses = Courses;
    let _value = sortBy;
    if (_value == 0) _filteredCourses = Courses;
    if (_value == 1) {
      _filteredCourses = Courses.sort((a, b) => {
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
    }
    if (_value == 2) {
      _filteredCourses = Courses.sort((a, b) => {
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
    }
    if (_value == 3) {
      _filteredCourses = Courses.sort((a, b) => {
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
    }
    setFilteredCourses([]);
    setTimeout(() => {
      setFilteredCourses(_filteredCourses);
    }, 100);
    setLoading(false);
  };
  /************************** Data ****************************/
  const getCourses = () => {
    CourseService.GetAll()
      .then((res) => {
        console.log("Courses", res.result);
        let courses = res.result.sort((a, b) => b.id - a.id);
        console.log(courses);
        setFilteredCourses(courses as ICourseModel[]);
        setCourses(courses as ICourseModel[]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  useEffect(() => {
    getCourses();
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
      title: translate("Arabic Name"),
      field: "ar_name",
    },
    {
      title: translate("English Name"),
      field: "en_name",
      hidden: true,
    },
    {
      title: translate("French Name"),
      field: "fr_name",
      hidden: true,
    },
    {
      title: translate("Course Code"),
      field: "code",
    },
    {
      title: translate("Total Hours"),
      field: "current_description.total_hours",
    },
    {
      title: translate("Credit Hours"),
      field: "current_description.credit",
    },
    {
      title: translate("Theoretical Hours"),
      field: "current_description.hours[0].hours",
    },
    {
      title: translate("Practical Hours"),
      field: "current_description.hours[1].hours",
    },
    {
      title: translate("Mixed Hours"),
      field: "current_description.hours[2].hours",
    },
    {
      title: "مذاكرة",
      field: "midTerm",
    },
    {
      title: "امتحان",
      field: "exam",
    },
    {
      title: "اعمال",
      field: "practice",
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
    fieldSeparator: ";",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: true,
    // headers: selectedColumns.map((c) => c.title),
  };
  const csvExporter = new ExportToCsv(csvOptions);
  const handleExportData = () => {
    setShowExportColumns(!showExportColumns);
  };
  const generateExcel = () => {
    let data = filteredCourses.map((course) => {
      let object = {};
      selectedColumns.forEach((item, index) => {
        if (item.field === "exam")
          _.set(
            object,
            `امتحان`,
            `${
              course.current_description?.evaluation_methods.filter(
                (e) => e.name === "امتحان"
              )[0].percentage
            }`
          );
        else if (item.field === "midTerm")
          _.set(
            object,
            `مذاكرة`,
            `${
              course.current_description?.evaluation_methods.filter(
                (e) => e.name === "مذاكرة"
              )[0].percentage
            }`
          );
        else if (item.field === "practice")
          _.set(
            object,
            `أعمال`,
            `${
              course.current_description?.evaluation_methods.filter(
                (e) => e.name === "أعمال"
              )[0].percentage
            }`
          );
        else _.set(object, item.title, _.get(course, item.field) ?? "");
      });
      return object;
    });
    console.log("data", data);
    csvExporter.generateCsv(data);
  };
  /************************** Finish Handle Export Data ****************************/
  const [confirm, setConfirm] = React.useState(false);
  const [deleteCourse, setDeleteCourse] = React.useState(false);
  const handleConfirmOpen = (data) => {
    setDeleteCourse(data.id);
    setConfirm(true);
  };

  const handleConfirmClose = () => {
    setConfirm(false);
  };
  const handleDeleteCourse = () => {};

  const ConfirmDialog = () => (
    <div>
      <Dialog
        open={confirm}
        onClose={handleConfirmClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {translate("Delete a course")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {translate("Are you sure you want to delete this course")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCourse}>{translate("Yes")}</Button>
          <Button onClick={handleConfirmClose} autoFocus>
            {translate("No")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

  /************************** Handle Delete Course ****************************/
  const tableRef = useRef();
  const generatePDF = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: translate("Courses"),
  });
  const renderCourses = () => {
    if (filteredCourses != null && filteredCourses.length > 0) {
      let data = filteredCourses;
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
              style={{
                minWidth: 80,
                color: "#dc3545",
                backgroundColor: "transparent",
                border: "1px solid #dc3545",
              }}
              color={"danger"}
            >
              {translate("Delete")}
            </SuiButton>
          ),
          onClick: (evt, data) => handleConfirmOpen(data),
        },
        {
          icon: () => (
            <SuiButton style={{ minWidth: 140, width: 140 }} color={"primary"}>
              {translate("Course Details")}
              <FileCopy />
            </SuiButton>
          ),
          onClick: (evt, data) => getCourse(data),
        },
      ];
      if (!loading)
        return (
          <div ref={tableRef}>
            <ActionTable
              Title={translate("Courses List")}
              Columns={columns}
              Data={data.map((item) => {
                return {
                  ...item,
                  midTerm: item.current_description?.evaluation_methods.filter(
                    (e) => e.name === "مذاكرة"
                  )[0].percentage,
                  exam: item.current_description?.evaluation_methods.filter(
                    (e) => e.name === "امتحان"
                  )[0].percentage,
                  practice: item.current_description?.evaluation_methods.filter(
                    (e) => e.name === "أعمال"
                  )[0].percentage,
                };
              })}
              Options={options}
              Actions={actions}
            />
          </div>
        );
      else return <Placeholder loading={loading} />;
    } else return <Placeholder loading={false} />;
  };

  const handleBack = () => {
    getCourses();
    setshowCourseDetail(false);
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
                    {translate("Add Course Document")}
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
                          {columns.map((item, index) => (
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
              <Button
                style={{ margin: "0px 5px" }}
                disabled={false}
                variant="contained"
                className={classes.submitBtn}
                onClick={filterData}
              >
                <span style={{ padding: "0px 0px 0px 10px" }}>
                  {translate("Search")}
                </span>
                <Search />
              </Button>
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
                  onChange={(e) => handleSortBy(e.target.value)}
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
              <Button
                style={{ margin: "0px 5px" }}
                disabled={false}
                variant="contained"
                className={classes.submitBtn}
                onClick={applySorting}
              >
                <span style={{ padding: "0px 0px 0px 10px" }}>
                  {translate("ترتيب")}
                </span>
                <Sort />
              </Button>
            </GridItem>
          </GridItem>
          <GridItem md={12}>{renderCourses()}</GridItem>
        </>
      )}
      {showCourseDetail && (
        <CourseDetails
          isCreate={isCreate}
          details={course}
          activateEdit={activateEdit}
          handleBack={handleBack}
          show={showCourseDetail}
          isEditable={isEditable}
        />
      )}
      <ConfirmDialog />
    </GridContainer>
  );
};
(CoursesList as any).auth = true;
(CoursesList as any).layout = Admin;
export default CoursesList;
