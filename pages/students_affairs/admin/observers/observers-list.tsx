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
  Checkbox,
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
  IActivityModel,
  ILevelModel,
  IObserverModel,
} from "../../../../Models/Observers/ObserverModel";
import ObserverService from "../../../../Services/ObserverService";
import SuiButton from "../../../../components/SuiButton";
import ObserverDetails from "./observer-details";
import { ExportToCsv } from "export-to-csv";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import _ from "lodash";
import { GetStaticProps } from "next";

interface IObserversListProps { }

const ObserversList: React.FC<IObserversListProps> = () => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const router = useRouter();
  const [showObserverDetail, setshowObserverDetail] = React.useState(false);
  const [observer, setObserver] = React.useState<IObserverModel>();
  const setShow = () => {
    setshowObserverDetail(!showObserverDetail);
  };
  const activateEdit = () => {
    setIsEditable(!isEditable);
  };

  const getObserver = (data: any) => {
    let _observer = Observers.find((item, index) => item.id === data ?.id);
    ObserverService.Get(data.id)
      .then((res) => {
        let _observer = res.result as IObserverModel;
        setObserver(_observer);
        console.log(_observer);
        setIsCreate(false);
        setIsEditable(false);
        setshowObserverDetail(true);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const [levels, setLevels] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    ObserverService.GetLevels()
      .then((res) => {
        console.log("Levels", res.result);
        setLevels(res.result as ILevelModel[]);
      })
      .catch((error) => {
        console.error("error", error);
      });

    ObserverService.GetActivities()
      .then((res) => {
        console.log("activities", res.result);
        setActivities(res.result as IActivityModel[]);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  const [isCreate, setIsCreate] = useState<boolean>(true);

  const handleCreate = () => {
    setObserver(null);
    setIsCreate(true);
    setIsEditable(true);
    setshowObserverDetail(true);
  };

  const handleClose = () => {
    //setSearchResult(null);
    setshowObserverDetail(false);
  };

  /********************** Filter && Sort *********/
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel ?.current ?.offsetWidth);
  }, []);

  const inputSortLabel = React.useRef(null);
  const [sortLabelWidth, setSortLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setSortLabelWidth(inputSortLabel ?.current ?.offsetWidth);
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
      label: translate("Activity"),
    },
    {
      value: "4",
      label: translate("Functional Body"),
    },
    /*{
      value: "5",
      label: translate("Excluded"),
    },*/
  ];

  const [isExcluded, setExcluded] = React.useState(false);
  const handleChangeExcluded = (event) => {
    setExcluded(!isExcluded);
    //filterData();
  }
  const [Observers, setObservers] = React.useState<IObserverModel[]>(null);
  const [filteredObservers, setFilteredObservers] =
    React.useState<IObserverModel[]>(null);
  const [filter, setFilter] = React.useState(0);
  const [search, setSearch] = React.useState("");

  const filterData = () => {
    let _filteredObservers = Observers;
    let _value = search;

    if (_filteredObservers != null) {
      if (filter == 0) {
        _filteredObservers = Observers.filter((observer, index) => {
          let level = levels.find(level => level.id == observer ?.level_id).name;
          let activity = activities.find(activity => activity.id == observer ?.activity_id).name;
          return (
            observer ?.first_name.includes(_value) ||
              observer ?.last_name.includes(_value) ||
                observer ?.number ?.toString().includes(_value) ||
                  activity.includes(_value) ||
                  level.includes(_value)
          );
        });
        //setFilteredObservers(_filteredObservers);
      }
      if (filter == 1) {
        _filteredObservers = Observers.filter((observer, index) => {
          return (
            observer ?.first_name.includes(_value) ||
              observer ?.last_name.includes(_value)
          );
        });
        //setFilteredObservers(_filteredObservers);
      }
      if (filter == 2) {
        _filteredObservers = Observers.filter((observer, index) => {
          return observer ?.number.toString().includes(_value);
        });
        //setFilteredObservers(_filteredObservers);
      }
      if (filter == 3) {
        _filteredObservers = Observers.filter((observer, index) => {
          let activity = activities.find(activity => activity.id == observer ?.activity_id).name;
          return activity.includes(_value)
        });
        //setFilteredObservers(_filteredObservers);
      }
      if (filter == 4) {
        _filteredObservers = Observers.filter((observer, index) => {
          let level = levels.find(level => level.id == observer ?.level_id).name;
          return level.includes(_value)
        });
        //setFilteredObservers(_filteredObservers);
      }
      if (isExcluded) {
        _filteredObservers = _filteredObservers.filter((observer, index) => {
          return observer ?.excluded
        });
      }
    }
    setFilteredObservers(_filteredObservers);
  };
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
    //filterData();
  };
  const handleSearch = (event) => {
    let _value = event ?.target ?.value;
    setSearch(_value);
    //filterData();
  };

  useEffect(() => {
    filterData();
  }, [filter, search, isExcluded]);

  const [sortBy, setSortBy] = React.useState(0);
  const handleSortBy = (event) => {
    let _value = event ?.target ?.value;
    setSortBy(_value);
    let _filteredObservers = Observers;
    if (sortBy == 1) {
      _filteredObservers = Observers.sort((a, b) => {
        if (a.last_name > b.last_name) {
          return 1;
        } else if (a.last_name < b.last_name) {
          return -1;
        }
        if (a.first_name > b.first_name) {
          return 1;
        } else if (a.first_name < b.first_name) {
          return -1;
        }
        else {
          return 0;
        }
      });
      setFilteredObservers(_filteredObservers);
    }
    if (sortBy == 2) {
      _filteredObservers = Observers.sort((a, b) => {
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
      setFilteredObservers(_filteredObservers);
    }
    if (sortBy == 3) {
      _filteredObservers = Observers.sort((a, b) => {
        let a_activity = activities.find(activity => activity.id == a.activity_id).name;
        let b_activity = activities.find(activity => activity.id == b.activity_id).name;
        if (a_activity > b_activity)
          return 1;
        if (a_activity < b_activity)
          return -1;
        return 0;
      });
      setFilteredObservers(_filteredObservers);
    }
    if (sortBy == 4) {
      _filteredObservers = Observers.sort((a, b) => {
        let a_level = levels.find(level => level.id == a.level_id).name;
        let b_level = levels.find(level => level.id == b.level_id).name;
        if (a_level > b_level)
          return 1;
        if (a_level < b_level)
          return -1;
        return 0;
      });
      setFilteredObservers(_filteredObservers);
    }
  };
  /************************** Data ****************************/

  //const [observersRefs, setObserversRefs] = React.useState([]);

  useEffect(() => {
    ObserverService.GetAll()
      .then((res) => {
        console.log("Observers", res.result);
        setFilteredObservers(res.result as IObserverModel[]);
        setObservers(res.result as IObserverModel[]);
        //setObserversRefs(Observers.map(observer => {return {id: observer.id, ref: useRef()};}));
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  useEffect(() => {
    if (!showObserverDetail) {
      ObserverService.GetAll()
        .then((res) => {
          console.log("Observers", res.result);
          setFilteredObservers(res.result as IObserverModel[]);
          setObservers(res.result as IObserverModel[]);
          //setObserversRefs(Observers.map(observer => {return {id: observer.id, ref: useRef()};}));
        })
        .catch((error) => {
          console.error("error", error);
        });
    }
  }, [showObserverDetail]);
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
      title: translate("Name"),
      field: "printing_name",
    },
    {
      title: translate("Functional Body"),
      field: "authority",
    },
    {
      title: translate("Activity"),
      field: "activity",
    },
    {
      title: translate("Office Phone"),
      field: "office_number",
    },
    {
      title: translate("Excluded"),
      field: "is_excluded",
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
    useKeysAsHeaders: false,
    headers: selectedColumns.map((c) => c.title),
  };
  const csvExporter = new ExportToCsv(csvOptions);
  const handleExportData = () => {
    setShowExportColumns(!showExportColumns);
  };
  const generateExcel = () => {
    csvExporter.generateCsv(
      filteredObservers.map((observer, idx) => {
        let object = {};
        selectedColumns.forEach((item, index) => {
          if (item.field === 'full_name')
            _.set(object, 'full_name', `${observer.nick_name} ${observer.first_name} ${observer.last_name}`);
          //else if (item.field === 'office_phone')
          //_.set(object, 'office_phone', observer.person.phones.find(phone => phone.type === "office")?.phone ?? "");
          else if (item.field === 'is_excluded')
            _.set(object, 'is_excluded', observer.excluded == 0 ? translate("No") : translate("Yes"));
          else if (item.field === 'authority')
            _.set(object, 'authority', levels.find(level => level.id == observer.level_id).name);
          else if (item.field === 'activity')
            _.set(object, 'activity', activities.find(activity => activity.id == observer.activity_id).name);
          else
            _.set(object, `col ${index}`, _.get(observer, item.field) ?? "");
        });
        console.log(object);
        return object;
      })
    );
  };
  /************************** Finish Handle Export Data ****************************/
  const [confirm, setConfirm] = React.useState(false);
  const [deleteObserver, setDeleteObserver] = React.useState(false);
  const handleConfirmOpen = () => {
    setConfirm(true);
  };

  const handleConfirmClose = () => {
    setConfirm(false);
  };
  const handleDeleteObserver = () => { };

  const ConfirmDialog = () => (
    <div>
      <Dialog
        open={confirm}
        onClose={handleConfirmClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {translate("Delete a observer")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {translate("Are you sure you want to delete this observer")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteObserver}>{translate("Yes")}</Button>
          <Button onClick={handleConfirmClose} autoFocus>
            {translate("No")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

  /************************** Handle Delete Observer ****************************/
  const tableRef = useRef();
  const generatePDF = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: translate("Observers"),
  });

  const renderObservers = () => {
    if (filteredObservers != null && filteredObservers.length > 0) {
      let data = filteredObservers;
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
            <SuiButton style={{ minWidth: 140, width: 140 }} color={"primary"}>
              {translate("Observer Details")}
            </SuiButton>
          ),
          onClick: (evt, data) => getObserver(data),
        },
        {
          icon: () => (
            <SuiButton style={{ minWidth: 140, width: 140 }} color={"primary"}>
              {translate("Observing Assignments")}
            </SuiButton>
          ),
          onClick: (evt, data) => { },
        },
      ];
      return (
        <div ref={tableRef}>
          <ActionTable
            Title={translate("Observers List")}
            Columns={columns}
            Data={data.map(item => {
              return {
                ...item,
                //full_name: `${item.nick_name} ${item.first_name} ${item.last_name}`,
                is_excluded: item.excluded == 0 ? translate("No") : translate("Yes"),
                authority: levels ?.find(level => level.id == item.level_id) ?.name,
                activity: activities ?.find(activity => activity.id == item.activity_id) ?.name,
              }
            })}
            Options={options}
            Actions={actions}
          />
        </div>
      );
    } else return <Placeholder loading={false} />;
  };
  return (
    <GridContainer>
      {!showObserverDetail && (
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
                    {translate("Add New Observer")}
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
                    {translate("Add New Observer")}
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
                                  checked={checked.includes(item.field)}
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
              <FormControl
                size="small"
                variant="outlined"
                style={{ minWidth: 150, margin: "0 1em 0 1em" }}
              >
                <Checkbox
                  disabled={!isEditable}
                  onChange={handleChangeExcluded}
                  id="excluded"
                  name="excluded"
                  checked={isExcluded}
                  //onBlur={handleBlur}
                  placeholder={translate("Excluded")}
                />
                <InputLabel
                  style={{ display: "flex" }}
                  shrink
                  //ref={inputExcludedLabel}
                  htmlFor="outlined-sort"
                >
                  <span>{translate("Excluded")}</span>
                </InputLabel>
              </FormControl>
            </GridItem>
          </GridItem>
          <GridItem md={12}>{renderObservers()}</GridItem>
        </>
      )}
      {showObserverDetail && (
        //<div ref={observerDetailsRef}>
        <ObserverDetails
          isCreate={isCreate}
          details={observer}
          activateEdit={activateEdit}
          setShow={setShow}
          show={showObserverDetail}
          //isEditable={isEditable}
          isEditable={true}
          //ref={observerDetailsRef}
          levels={levels}
          activities={activities}
        />
        //</div>
      )}
      <ConfirmDialog />
    </GridContainer>
  );
};
(ObserversList as any).auth = true;
(ObserversList as any).layout = Admin;
export default ObserversList;
