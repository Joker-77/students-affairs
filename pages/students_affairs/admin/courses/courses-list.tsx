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
import { FilterList, Sort, Search } from "@material-ui/icons";
import Admin from "../../../../layouts/Admin";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";
import { ICandidateModel } from "../../../../Models/ApiResponse/CandidateModel";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import Placeholder from "../../../../Utility/Placeholders";
import CandidateService from "../../../../Services/CandidateService";
import SearchAddCandidateModal from "../../../../components/Modals/SearchAddCandidateModal";
import AddCandidateModal from "../../../../components/Modals/AddCandidateModal";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";

interface ICandidatesListProps {}

const CandidatesList: React.FC<ICandidatesListProps> = ({}) => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const [searchResult, setSearchResult] = React.useState(null);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setSearchResult(null);
    setOpen(false);
  };
  const [selectedCandidate, setSelectedCandidate] = React.useState<number>(0);
  const [initAddCandidate, setInitAddCandidate] = React.useState<object>({
    subscription_number: "",
    year: "",
    governorate: "",
    round: "",
  });

  /********************** Filter && Sort *********/
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const inputSortLabel = React.useRef(null);
  const [sortLabelWidth, setSortLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setSortLabelWidth(inputSortLabel.current.offsetWidth);
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

  /*************************************/
  // const PersonScheme = Yup.object().shape({
  //   first_name: Yup.string().required(translate("{0} is required", "First name")),
  //   last_name: Yup.string().required(translate("{0} is required", "Last name")),
  //   passport_first_name: Yup.string().required(translate("{0} is required", "Passport First Name")),
  //   passport_last_name: Yup.string().required(translate("{0} is required", "Passport Last Name")),
  //   passport_number: Yup.string().required(translate("{0} is required", "Passport Number")),
  //   national_number: Yup.string().required(translate("{0} is required", "National number")),
  //   sex: Yup.string().required(translate("{0} is required", "Gender")),
  //   nationality: Yup.string().required(translate("{0} is required", "Nationality")),
  // });

  const AddCandidateScheme = Yup.object().shape({
    subscription_number: Yup.string().required(
      translate("{0} is required", "Subscription number")
    ),
    year: Yup.string().required(translate("{0} is required", "Year")),
    governorate: Yup.string().required(translate("{0} is required", "City")),
    round: Yup.string().required(translate("{0} is required", "Round")),
  });
  const UpdateCandidateScheme = Yup.object().shape({
    first_name: Yup.string().required(
      translate("{0} is required", "First name")
    ),
    last_name: Yup.string().required(translate("{0} is required", "Last name")),
    passport_first_name: Yup.string().required(
      translate("{0} is required", "Passport First Name")
    ),
    passport_last_name: Yup.string().required(
      translate("{0} is required", "Passport Last Name")
    ),
    passport_number: Yup.string().required(
      translate("{0} is required", "Passport Number")
    ),
    national_number: Yup.string().required(
      translate("{0} is required", "National number")
    ),
    sex: Yup.string().required(translate("{0} is required", "Gender")),
    nationality: Yup.string().required(
      translate("{0} is required", "Nationality")
    ),
  });
  const submitSearchCandidate = async (values: any, setSubmitting) => {
    setSubmitting(true);
    CandidateService.Search(values)
      .then((res) => {
        setSearchResult({ found: Boolean(res.result), result: res.result });
        // setOpen(false);
      })
      .catch((error) => {
        console.error("error", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const submitAddCandidate = async (values: any, setSubmitting) => {
    setSubmitting(true);
    CandidateService.AddAfterSearch(values)
      .then((res) => {
        const candidatesCopy = [res.result, ...Candidates];
        setCandidates(candidatesCopy);
        handleClose();
      })
      .catch((error) => {
        console.error("error", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  /************************** Data ****************************/
  useEffect(() => {
    CandidateService.GetAll()
      .then((res) => {
        console.log("Candidates", res);
        setCandidates(res.result);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);
  /************************** Finish Data ****************************/
  /************************** Handle edit data ****************************/

  const [openUpdateCandidate, setOpenUpdateCandidate] = React.useState(false);
  const [openModalForDetails, setOpenModalForDetails] = React.useState(false);
  const handleOpenUpdateCandidate = (data: ICandidateModel) => {
    console.log("data", data);
    setInitUpdateCandidate({
      id: data.id,
      registeration_number: data.registeration_number,
      birth_date: data.birth_date,
      birth_place: data.birth_place,
      qaid_place: data.qaid_place,
      qaid_number: data.qaid_number,
      military_office: data.military_office,
      person: data.person,
      //father: data.father,
      //mother: data.mother,
    } as ICandidateModel);
    setOpenUpdateCandidate(true);
  };
  const handleCloseUpdateCandidate = () => {
    setOpenModalForDetails(false);
    setDisabled(false);
    setOpenUpdateCandidate(false);
  };

  const [initUpdateCandidate, setInitUpdateCandidate] =
    React.useState<ICandidateModel>({
      id: 0,
      registeration_number: "",
      birth_date: "",
      birth_place: "",
      qaid_place: "",
      qaid_number: "",
      military_office: "",
      person: {
        id: 0,
        first_name: "",
        last_name: "",
        passport_first_name: "",
        passport_last_name: "",
        passport_number: "",
        national_number: "",
        sex: "",
        nationality: "",
        phones: [],
      },
      father: {
        id: 0,
        first_name: "",
        last_name: "",
        passport_first_name: "",
        passport_last_name: "",
        passport_number: "",
        national_number: "",
        sex: "",
        nationality: "",
        phones: [],
      },
      mother: {
        id: 0,
        first_name: "",
        last_name: "",
        passport_first_name: "",
        passport_last_name: "",
        passport_number: "",
        national_number: "",
        sex: "",
        nationality: "",
        phones: [],
      },
    });

  const submitUpdateCandidate = async (values: any, setSubmitting) => {
    console.log("values", values);
    setSubmitting(false);
  };

  /************************** Finish Handle edit data ****************************/
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const handleDetails = (data: any) => {
    setOpenModalForDetails(true);
    setDisabled(true);
    handleOpenUpdateCandidate(data);
  };
  const handleEdit = (data: any) => {
    throw new Error("Function not implemented.");
  };
  const handleAddPhone = (id: any) => {
    throw new Error("Function not implemented.");
  };
  const [Candidates, setCandidates] = React.useState<ICandidateModel[]>(null);
  const renderCandidates = () => {
    if (Candidates != null && Candidates.length > 0) {
      let columns = [
        {
          title: translate("Id"),
          field: "id",
          hidden: true,
        },
        {
          title: translate("First name"),
          field: "person.first_name",
        },
        {
          title: translate("Last name"),
          field: "person.last_name",
        },
        {
          title: translate("Registeration number"),
          field: "registeration_number",
        },
        {
          title: translate("Birth place"),
          field: "birth_place",
        },
      ];
      let data = Candidates;
      let options = {
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF",
          fontWeight: "bold",
        },
        filtering: false,
        paging: true,
        pageSize: 10,
        maxBodyHeight: "500px",
      };
      return (
        <ActionTable
          Title={translate("Candidates List")}
          Columns={columns}
          Data={data}
          Options={options}
          Actions={[
            {
              tooltip: translate("Certificates"),
              icon: "collectionsBookmark",
              onClick: (evt, data) =>
                router.push(
                  `/${router.locale}/students_affairs/affairs_officer/candidates/certificates-list?id=${data.id}`
                ),
            },
            {
              tooltip: translate("Desires"),
              icon: "stars",
              onClick: (evt, data) =>
                router.push(
                  `/${router.locale}/students_affairs/affairs_officer/candidates/desires-list?id=${data.id}`
                ),
            },
            {
              tooltip: translate("Registration Desires"),
              icon: "star",
              onClick: (evt, data) =>
                router.push(
                  `/${router.locale}/students_affairs/affairs_officer/candidates/registration-desires-list?id=${data.id}`
                ),
            },
            {
              tooltip: translate("Candidate Details"),
              icon: "details",
              onClick: (evt, data) => handleDetails(data),
            },
            // {
            //   tooltip: "Edit Candidate",
            //   icon: "edit",
            //   onClick: (evt, data) => handleOpenUpdateCandidate(data),
            // },
            // {
            //   tooltip: "Add Certificate",
            //   icon: "add_phone",
            //   onClick: (evt, data) => handleOpenPhone(),
            // },
            // {
            //   tooltip: "Certificate Details",
            //   icon: "phone",
            //   onClick: (evt, data) => handleAddPhone(data.id),
            // },
            // {
            //   tooltip: "Delete Certificate",
            //   icon: "phone_disabled",
            //   onClick: (evt, data) => handleAddPhone(data.id),
            // },
          ]}
        />
      );
    } else return <Placeholder />;
  };
  return (
    <GridContainer>
      <GridItem md={12}>
        <GridItem md={6}>
          <Button
            disabled={false}
            variant="contained"
            className={classes.submitBtn}
            onClick={handleOpen}
          >
            {translate("Add New Course")}
          </Button>
        </GridItem>
        <GridItem style={{ marginBottom: "1em" }}>
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
        {renderCandidates()}
      </GridItem>
      <SearchAddCandidateModal
        searchResult={searchResult}
        onAddClick={submitAddCandidate}
        disabled={disabled}
        key={"addCandidate"}
        title={translate("Add Candidate")}
        open={open}
        formScheme={AddCandidateScheme}
        handleClose={handleClose}
        initValues={initAddCandidate}
        submitForm={submitSearchCandidate}
      ></SearchAddCandidateModal>
      <AddCandidateModal
        disabled={disabled}
        key={"updateCandidate"}
        title={
          !openModalForDetails
            ? translate("Update Candidate")
            : translate("Candidate Details")
        }
        open={openUpdateCandidate}
        formScheme={UpdateCandidateScheme}
        handleClose={handleCloseUpdateCandidate}
        initValues={initUpdateCandidate}
        submitForm={submitUpdateCandidate}
      ></AddCandidateModal>
    </GridContainer>
  );
};
(CandidatesList as any).auth = true;
(CandidatesList as any).layout = Admin;
export default CandidatesList;
