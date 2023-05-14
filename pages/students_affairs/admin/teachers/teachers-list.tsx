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
  ITeacherModel,
  //ITeacherDescriptionModel,
} from "../../../../Models/Teachers/TeacherModel";
import TeacherService from "../../../../Services/TeacherService";
import SuiButton from "../../../../components/SuiButton";
import CandidateDetails from "../../affairs_officer/candidates/candidate-details";
import TeacherDetails from "./teacher-details";
import { ExportToCsv } from "export-to-csv";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import _ from "lodash";
import TeacherDetailsPrint from "../../../../components/TeacherDetailsPrint/TeacherDetailsPrint";

interface ITeachersListProps {}
const TeachersList: React.FC<ITeachersListProps> = ({}) => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const router = useRouter();
  const [showTeacherDetail, setshowTeacherDetail] = React.useState(false);
  const [teacher, setTeacher] = React.useState<ITeacherModel>();
  const [searchResult, setSearchResult] = React.useState(null);
  const setShow = () => {
    setshowTeacherDetail(!showTeacherDetail);
  };
  const activateEdit = () => {
    setIsEditable(!isEditable);
  };

  const getTeacher = (data: any) => {
    let _teacher = Teachers.find((item, index) => item.id === data?.id);
    TeacherService.Get(data.id)
      .then((res) => {
        let _teacher = res.result as ITeacherModel;
        setTeacher(_teacher);
        console.log(_teacher);
        setIsCreate(false);
        setIsEditable(false);
        setshowTeacherDetail(true);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const [isCreate, setIsCreate] = useState<boolean>(true);

  const handleCreate = () => {
    setTeacher(null);
    setIsCreate(true);
    setIsEditable(true);
    setshowTeacherDetail(true);
  };

  const handleClose = () => {
    setSearchResult(null);
    setshowTeacherDetail(false);
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
      label: translate("ID Number"),
    },
    {
      value: "3",
      label: translate("Work Field"),
    },
  ];

  const [Teachers, setTeachers] = React.useState<ITeacherModel[]>(null);
  const [filteredTeachers, setFilteredTeachers] =
    React.useState<ITeacherModel[]>(null);
  const [filter, setFilter] = React.useState(0);
  const [search, setSearch] = React.useState("");

  const filterData = () => {
    let _filteredTeachers = Teachers;
    let _value = search;
    if (filter == 0) {
      _filteredTeachers = Teachers.filter((teacher, index) => {
        return (
          teacher.person.first_name.includes(_value) ||
          teacher.person.last_name.includes(_value) ||
          teacher.number.toString().includes(_value)
        );
      });
      setFilteredTeachers(_filteredTeachers);
    }
    if (filter == 1) {
      _filteredTeachers = Teachers.filter((teacher, index) => {
        return (
          teacher.person.first_name.includes(_value) ||
          teacher.person.last_name.includes(_value) ||
          teacher.work_field.includes(_value) || teacher.activity.includes(_value)
        );
      });
      setFilteredTeachers(_filteredTeachers);
    }
    if (filter == 2) {
      _filteredTeachers = Teachers.filter((teacher, index) => {
        return teacher.number.toString().includes(_value);
      });
      setFilteredTeachers(_filteredTeachers);
    }
    if (filter == 3) {
      _filteredTeachers = Teachers.filter((teacher, index) => {
        return teacher.work_field.includes(_value) || teacher.activity.includes(_value)
      });
      setFilteredTeachers(_filteredTeachers);
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
        if (a.person?.last_name > b.person?.last_name) {
          return 1;
        } else if (a.person?.last_name < b.person?.last_name) {
          return -1;
        }
        if (a.person?.first_name > b.person?.first_name) {
          return 1;
        } else if (a.person?.first_name < b.person?.first_name) {
          return -1;
        }
        if (a.father_name > b.father_name) {
          return 1;
        } else if (a.father_name < b.father_name) {
          return -1;
        } else {
          return 0;
        }
      });
      setFilteredTeachers(_filteredTeachers);
    }
    if (sortBy == 2) {
      _filteredTeachers = Teachers.sort((a, b) => {
        if (
          parseInt(a.number, 10) >
          parseInt(b.number, 10)
        ) {
          return 1;
        } else if (
          parseInt(a.number, 10) <
          parseInt(b.number, 10)
        ) {
          return -1;
        } else {
          return 0;
        }
      });
      setFilteredTeachers(_filteredTeachers);
    }
  };
  /************************** Data ****************************/

  //const [teachersRefs, setTeachersRefs] = React.useState([]);
  
  useEffect(() => {
    TeacherService.GetAll()
      .then((res) => {
        console.log("Teachers", res.result);
        setFilteredTeachers(res.result as ITeacherModel[]);
        setTeachers(res.result as ITeacherModel[]);
        //setTeachersRefs(Teachers.map(teacher => {return {id: teacher.id, ref: useRef()};}));
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);
  /************************** Finish Data ****************************/
  /************************** Handle edit data ****************************/
  const [isEditable, setIsEditable] = React.useState(true);
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
      title: translate("ID Number"),
      field: "number",
    },
    {
      title: translate("Full Name"),
      field: "full_name",
    },
    {
      title: translate("Functional Body"),
      field: "degree",
      /* الهيئة */
      //field: "commission",
    },
    {
      title: translate("Work Field"),
      field: "work_field",
    },
    {
      title: translate("Office Phone"),
      field: "office_phone",
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
      filteredTeachers.map((teacher, idx) => {
        let object = {};
        selectedColumns.forEach((item, index) => {
          if (item.field === 'full_name')
            _.set(object, 'full_name', `${teacher.person?.first_name} ${teacher.father_name || ''} ${teacher.person?.last_name}`);
          else if (item.field === 'office_phone')
            _.set(object, 'office_phone', teacher.person.phones.find(phone => phone.type === "office")?.phone);
          else
            _.set(object, `col ${index}`, _.get(teacher, item.field) ?? "");
        });
        console.log(object);
        return object;
      })
    );
  };
  /************************** Finish Handle Export Data ****************************/
  const [confirm, setConfirm] = React.useState(false);
  const [deleteTeacher, setDeleteTeacher] = React.useState(false);
  const handleConfirmOpen = () => {
    setConfirm(true);
  };

  const handleConfirmClose = () => {
    setConfirm(false);
  };
  const handleDeleteTeacher = () => {};

  const ConfirmDialog = () => (
    <div>
      <Dialog
        open={confirm}
        onClose={handleConfirmClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {translate("Delete a teacher")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {translate("Are you sure you want to delete this teacher")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteTeacher}>{translate("Yes")}</Button>
          <Button onClick={handleConfirmClose} autoFocus>
            {translate("No")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

  /************************** Handle Delete Teacher ****************************/
  const tableRef = useRef();
  const generatePDF = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: translate("Teachers"),
  });

  /*const getTeacherToPrint = (data: any) => {
    let _teacher = Teachers.find((item, index) => item.id === data?.id);
    TeacherService.Get(data.id)
      .then((res) => {
        let _teacher = res.result as ITeacherModel;
        setTeacher(_teacher);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };*/

  const teacherDetailsRef = useRef();
  const generateTeacherPDF = useReactToPrint({
    content: () => teacherDetailsRef.current,
    documentTitle: "",
    //onAfterPrint: () => {setTeacher(null)},
  });

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
            /*<SuiButton
                  style={{ margin: "0px 5px"}}
                  color={"primary"}
                >
                  <span style={{ padding: "0px 0px 0px 10px" }}>
                    {translate("Print")}
                  </span>
                  <Print />
                </SuiButton>*/
              <SuiButton style={{ minWidth: 80, width: 80 }} color={"primary"}>
                <span style={{ padding: "0px 0px 0px 10px" }}>
                {translate("Print")}
                </span>
                <Print />
              </SuiButton>
          ),
          onClick: (evt, data) => {
            TeacherService.Get(data.id)
              .then((res) => {
                let _teacher = res.result as ITeacherModel;
                setTeacher(_teacher);
                generateTeacherPDF();
              })
              .catch((error) => {
                console.error("error", error);
              });
          },
        },
        {
          icon: () => (
            <SuiButton style={{ minWidth: 140, width: 140 }} color={"primary"}>
              {translate("Teacher Details")}
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
            Data={data.map(item => { return {...item,
              full_name: `${item.person?.first_name} ${item.father_name} ${item.person?.last_name}`,
              office_phone: item.person.phones.find(phone => phone.type === "office")?.phone,
              }})}
            Options={options}
            Actions={actions}
          />
        </div>
      );
    } else return <Placeholder loading={false} />;
  };
  return (
    <GridContainer>
      {!showTeacherDetail && (
        <>
          <GridItem md={12}>
            <GridItem container md={12} style={{ margin: "0px 0px 10px 0" }}>
              <GridItem md={7}>
                {/* <Button
                  style={{ margin: "0px 5px" }}
                  disabled={false}
                  variant="contained"
                  className={classes.submitBtn}
                  onClick={handleCreate}
                >
                  <span style={{ padding: "0px 0px 0px 10px" }}>
                    {translate("Add New Teacher")}
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
      {showTeacherDetail ? ( 
        //<div ref={teacherDetailsRef}>
        <TeacherDetails
          isCreate={isCreate}
          details={teacher}
          activateEdit={activateEdit}
          setShow={setShow}
          show={showTeacherDetail}
          //isEditable={isEditable}
          isEditable={true}
          //ref={teacherDetailsRef}
        />
       //</div>
      ) :
        
        <div style={{display: 'none'}}>
          {/*
          <TeacherDetails
            isCreate={isCreate}
            details={teacher}
            activateEdit={activateEdit}
            setShow={setShow}
            show={showTeacherDetail}
            //isEditable={isEditable}
            isEditable={true}
            //ref={teachersRefs.find(item => item.id == teacher.id)[0].ref}
            ref={teacherDetailsRef}
          />
        */}
        <div ref={teacherDetailsRef}> 
          <TeacherDetailsPrint teacher={teacher} />
        </div>
        </div>
      }
      <ConfirmDialog />
    </GridContainer>
  );
};
(TeachersList as any).auth = true;
(TeachersList as any).layout = Admin;
export default TeachersList;
