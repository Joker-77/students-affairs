import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import Admin from "../../../../layouts/Admin";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";
import {
  ICandidateModel,
} from "../../../../Models/ApiResponse/CandidateModel";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import Placeholder from "../../../../Utility/Placeholders";
import CandidateService from "../../../../Services/CandidateService";
import AddCandidateModal from "../../../../components/Modals/AddCandidateModal";
import * as Yup from "yup";
import AddPhoneModal from "../../../../components/Modals/AddPhoneModal";

interface ICandidatesListProps {}
const CandidatesList: React.FC<ICandidatesListProps> = ({}) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [selectedCandidate, setSelectedCandidate] = React.useState<number>(0);
  const [initAddCandidate, setInitAddCandidate] = React.useState<ICandidateModel>({
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
      phones:[]
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
      phones:[]
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
      phones:[]
    },
  });

  const PersonScheme = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    passport_first_name: Yup.string().required("Passport first name is required"),
    passport_last_name: Yup.string().required("Passport Last name is required"),
    passport_number: Yup.string().required("Passport number is required"),
    national_number: Yup.string().required("National number is required"),
    sex: Yup.string().required("Gender is required"),
    nationality: Yup.string().required("Nationality is required"),
  });

  const AddCandidateScheme = Yup.object().shape({
    registeration_number: Yup.string().required("Registeration number is required"),
    birth_date: Yup.string().required("Birth date is required"),
    birth_place: Yup.string().required("Birth place is required"),
    qaid_place: Yup.string().required("QAID place is required"),
    qaid_number: Yup.string().required("QAID number is required"),
    military_office: Yup.string().required("Military office is required"),
    father: PersonScheme,
    mother: PersonScheme,
    person: PersonScheme,
  });
  const UpdateCandidateScheme = Yup.object().shape({
    // firstName: Yup.string().required("First name is required"),
    // lastName: Yup.string().required("Last name is required"),
    // gender: Yup.string().required("Gender is required"),
    // passportFirstName: Yup.string().required("Passport First Name is required"),
    // passportLastName: Yup.string().required("Passport Last Name is required"),
    // nationality: Yup.string().required("Nationality is required"),
    // nationalId: Yup.string().required("NationalId is required"),
    // passportNumber: Yup.string().required("Passport Number is required"),
  });
  const submitAddCandidate = async (values: any, setSubmitting) => {

    console.log("to submit: ", values);

    CandidateService.Add(values)
      .then((res) => {
        console.log("New Candidate", res);
        const candidatesCopy = [res.result, ...Candidates];
        setCandidates(candidatesCopy);
        setOpen(false);
      })
      .catch((error) => {
        console.error("error", error);
      })
    ;

    setSubmitting(false);
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
  const handleOpenUpdateCandidate = (data: ICandidateModel) => {
    console.log("data", data);
    setInitUpdateCandidate({
      
    } as ICandidateModel);
    setOpenUpdateCandidate(true);
  };
  const handleCloseUpdateCandidate = () => {
    setDisabled(false);
    setOpenUpdateCandidate(false);
  };
  const [initUpdateCandidate, setInitUpdateCandidate] = React.useState<ICandidateModel>({

  });

  const submitUpdateCandidate = async (values: any, setSubmitting) => {
    console.log("values", values);
    setSubmitting(false);
  };

  /************************** Finish Handle edit data ****************************/
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const handleDetails = (data: any) => {
    setDisabled(true);
    setOpenUpdateCandidate(true);
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
          title: "Id",
          field: "id",
          hidden: true,
        },
        {
          title: "First name",
          field: "person.first_name",
        },
        {
          title: "Last name",
          field: "person.last_name",
        },
        {
          title: "Registeration number",
          field: "registeration_number",
        },
        {
          title: "Birth place",
          field: "birth_place",
        },
        {
          title: "QAID place",
          field: "qaid_place",
        },
        {
          title: "QAID number",
          field: "qaid_number",
        }
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
          Title="Candidates List"
          Columns={columns}
          Data={data}
          Options={options}
          Actions={[
            {
              tooltip: "Candidate Details",
              icon: "details",
              onClick: (evt, data) => handleDetails(data.id),
            },
            {
              tooltip: "Edit Candidate",
              icon: "edit",
              onClick: (evt, data) => handleOpenUpdateCandidate(data),
            },
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
        <Button
          disabled={false}
          variant="contained"
          className={classes.submitBtn}
          onClick={handleOpen}
        >
          {"Add New Candidate"}
        </Button>
        {renderCandidates()}
      </GridItem>
      <AddCandidateModal
        disabled={disabled}
        key={"addCandidate"}
        title={"Add Candidate"}
        open={open}
        formScheme={AddCandidateScheme}
        handleClose={handleClose}
        initValues={initAddCandidate}
        submitForm={submitAddCandidate}
      ></AddCandidateModal>
      <AddCandidateModal
        disabled={disabled}
        key={"updateCandidate"}
        title={"Update Candidate"}
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
