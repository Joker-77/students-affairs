import React, { useEffect, useState } from "react";
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
import { ICourseModel } from "../../../../Models/Courses/CourseModel";
import CourseService from "../../../../Services/CourseService";
import SuiButton from "../../../../components/SuiButton";
import CandidateDetails from "../../affairs_officer/candidates/candidate-details";
import CourseDetails from "./course-details";

interface ICoursesListProps {}
const CoursesList: React.FC<ICoursesListProps> = ({}) => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const router = useRouter();
  const [showCandidateDetail, setshowCandidateDetail] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [searchResult, setSearchResult] = React.useState(null);
  const setShow = () => {
    setshowCandidateDetail(!showCandidateDetail);
  };
  const activateEdit = () => {
    setIsEditable(!isEditable);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setSearchResult(null);
    setOpen(false);
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
  const [filter, setFilter] = React.useState(0);
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const [sortBy, setSortBy] = React.useState(0);
  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };
  /************************** Data ****************************/
  useEffect(() => {
    CourseService.GetAll()
      .then((res) => {
        console.log("Courses", res);
        setCourses(res.result);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);
  /************************** Finish Data ****************************/
  /************************** Handle edit data ****************************/
  const [isEditable, setIsEditable] = React.useState(false);
  /************************** Finish Handle edit data ****************************/
  const [Courses, setCourses] = React.useState<ICourseModel[]>(null);
  const renderCourses = () => {
    if (Courses != null && Courses.length > 0) {
      let columns = [
        {
          title: translate("Id"),
          field: "id",
          hidden: true,
        },
        {
          title: translate("English Name"),
          field: "en_name",
        },
        {
          title: translate("Arabic Name"),
          field: "ar_name",
        },
        {
          title: translate("French Name"),
          field: "fr_name",
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
      ];
      let data = Courses;
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
          onClick: (evt, data) => {},
        },
        {
          icon: () => (
            <SuiButton style={{ minWidth: 140, width: 140 }} color={"primary"}>
              {translate("Course Details")}
            </SuiButton>
          ),
          onClick: (evt, data) => {
            setshowCandidateDetail(true);
          },
        },
      ];
      return (
        <ActionTable
          Title={translate("Courses List")}
          Columns={columns}
          Data={data}
          Options={options}
          Actions={actions}
        />
      );
    } else return <Placeholder loading={false} />;
  };
  return (
    <GridContainer>
      {!showCandidateDetail && (
        <>
          <GridItem md={12}>
            <GridItem container md={12} style={{ margin: "0px 0px 10px 0" }}>
              <GridItem md={7}>
                {/* <Button
                  style={{ margin: "0px 5px" }}
                  disabled={false}
                  variant="contained"
                  className={classes.submitBtn}
                  onClick={handleOpen}
                >
                  <span style={{ padding: "0px 0px 0px 10px" }}>
                    {translate("Add New Course")}
                  </span>
                  <Add />
                </Button> */}
              </GridItem>
              <GridItem>
                <Button
                  style={{ margin: "0px 5px" }}
                  disabled={false}
                  variant="contained"
                  className={classes.submitBtn}
                  onClick={handleOpen}
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
                  onClick={handleOpen}
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
                  onClick={handleOpen}
                >
                  <span style={{ padding: "0px 0px 0px 10px" }}>
                    {translate("Add Course Document")}
                  </span>
                  <AddBox />
                </Button>
              </GridItem>
            </GridItem>
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
          <GridItem md={12}>{renderCourses()}</GridItem>
        </>
      )}
      {showCandidateDetail && (
        <CourseDetails
          activateEdit={activateEdit}
          setShow={setShow}
          show={showCandidateDetail}
          courseDetail={null}
          isEditable={isEditable}
        />
      )}
    </GridContainer>
  );
};
(CoursesList as any).auth = true;
(CoursesList as any).layout = Admin;
export default CoursesList;
