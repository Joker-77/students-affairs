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
import { useRouter } from 'next/router';
import {useTranslation} from "../../../../Utility/Translations/useTranslation";

interface ICandidatesListProps {}
const CandidatesList: React.FC<ICandidatesListProps> = ({}) => {
  const {translate} = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const router = useRouter();

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
    first_name: Yup.string().required(translate("{0} is required", "First name")),
    last_name: Yup.string().required(translate("{0} is required", "Last name")),
    passport_first_name: Yup.string().required(translate("{0} is required", "Passport First Name")),
    passport_last_name: Yup.string().required(translate("{0} is required", "Passport Last Name")),
    passport_number: Yup.string().required(translate("{0} is required", "Passport Number")),
    national_number: Yup.string().required(translate("{0} is required", "National number")),
    sex: Yup.string().required(translate("{0} is required", "Gender")),
    nationality: Yup.string().required(translate("{0} is required", "Nationality")),
  });

  const AddCandidateScheme = Yup.object().shape({
    registeration_number: Yup.string().required(translate("{0} is required", "Registeration number")),
    birth_date: Yup.string().required(translate("{0} is required", "Birth date")),
    birth_place: Yup.string().required(translate("{0} is required", "Birth place")),
    qaid_place: Yup.string().required(translate("{0} is required", "QAID place")),
    qaid_number: Yup.string().required(translate("{0} is required", "QAID number")),
    military_office: Yup.string().required(translate("{0} is required", "Military office")),
    father: PersonScheme,
    mother: PersonScheme,
    person: PersonScheme,
  });
  const UpdateCandidateScheme = Yup.object().shape({
    first_name: Yup.string().required(translate("{0} is required", "First name")),
    last_name: Yup.string().required(translate("{0} is required", "Last name")),
    passport_first_name: Yup.string().required(translate("{0} is required", "Passport First Name")),
    passport_last_name: Yup.string().required(translate("{0} is required", "Passport Last Name")),
    passport_number: Yup.string().required(translate("{0} is required", "Passport Number")),
    national_number: Yup.string().required(translate("{0} is required", "National number")),
    sex: Yup.string().required(translate("{0} is required", "Gender")),
    nationality: Yup.string().required(translate("{0} is required", "Nationality")),
  });
  const submitAddCandidate = async (values: any, setSubmitting) => {
    setSubmitting(true);
    CandidateService.Add(values)
      .then((res) => {
        const candidatesCopy = [res.result, ...Candidates];
        setCandidates(candidatesCopy);
        setOpen(false);
      })
      .catch((error) => {
        console.error("error", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
    ;
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
  const [initUpdateCandidate, setInitUpdateCandidate] = React.useState<ICandidateModel>({
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
              onClick: (evt, data) => router.push(`/${router.locale}/students_affairs/affairs_officer/candidates/certificates-list?id=${data.id}`),
            },
            {
              tooltip: translate("Desires"),
              icon: "stars",
              onClick: (evt, data) => router.push(`/${router.locale}/students_affairs/affairs_officer/candidates/desires-list?id=${data.id}`),
            },
            {
              tooltip: translate("Registration Desires"),
              icon: "star",
              onClick: (evt, data) => router.push(`/${router.locale}/students_affairs/affairs_officer/candidates/registration-desires-list?id=${data.id}`),
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
        <Button
          disabled={false}
          variant="contained"
          className={classes.submitBtn}
          onClick={handleOpen}
        >
          {translate("Add New Candidate")}
        </Button>
        {renderCandidates()}
      </GridItem>
      <AddCandidateModal
        disabled={disabled}
        key={"addCandidate"}
        title={translate("Add Candidate")}
        open={open}
        formScheme={AddCandidateScheme}
        handleClose={handleClose}
        initValues={initAddCandidate}
        submitForm={submitAddCandidate}
      ></AddCandidateModal>
      <AddCandidateModal
        disabled={disabled}
        key={"updateCandidate"}
        title={!openModalForDetails ? translate("Update Candidate") : translate("Candidate Details")}
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
