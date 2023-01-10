import React, { useEffect, useState } from "react";
import { Grid, Tab, Tabs, AppBar, Button, Paper, Box } from "@material-ui/core";
import Admin from "../../../layouts/Admin";
import SwipeableViews from "react-swipeable-views";
import TabPanel from "../../../components/TabPanel/TabPanel";
import MTable from "../../../components/MaterialTable/MTable";
import CopyMaterials from "../../../components/CopyMaterials/CopyMaterials";
import styles from "../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import {
  IPersonModel,
  IPhoneModel,
} from "../../../Models/ApiResponse/PersonModel";
import ActionTable from "../../../components/MaterialTable/ActionTable";
import Placeholder from "../../../Utility/Placeholders";
import PersonService from "../../../Services/PersonService";
import AddPersonModal from "../../../components/Modals/AddPersonModal";
import * as Yup from "yup";
import AddPhoneModal from "../../../components/Modals/AddPhoneModal";
interface IPeopleListProps {}
const PeopleList: React.FC<IPeopleListProps> = ({}) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [selectedPerson, setSelectedPerson] = React.useState<number>(0);
  const [initAddPerson, setInitAddPerson] = React.useState<IPersonModel>({
    id: 0,
    firstName: "",
    lastName: "",
    gender: "male",
    nationalId: "",
    nationality: "",
    passportFirstName: "",
    passportLastName: "",
    passportNumber: "",
  });
  const AddPersonScheme = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    gender: Yup.string().required("Gender is required"),
    passportFirstName: Yup.string().required("Passport First Name is required"),
    passportLastName: Yup.string().required("Passport Last Name is required"),
    nationality: Yup.string().required("Nationality is required"),
    nationalId: Yup.string().required("NationalId is required"),
    passportNumber: Yup.string().required("Passport Number is required"),
  });
  const UpdatePersonScheme = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    gender: Yup.string().required("Gender is required"),
    passportFirstName: Yup.string().required("Passport First Name is required"),
    passportLastName: Yup.string().required("Passport Last Name is required"),
    nationality: Yup.string().required("Nationality is required"),
    nationalId: Yup.string().required("NationalId is required"),
    passportNumber: Yup.string().required("Passport Number is required"),
  });
  const submitAddPerson = async (values: any, setSubmitting) => {
    console.log("values", values);
    setSubmitting(false);
  };
  /************************** Phone ****************************/
  const [openPhone, setOpenPhone] = React.useState(false);
  const handleOpenPhone = () => {
    setOpenPhone(true);
  };
  const handleClosePhone = () => {
    setOpenPhone(false);
  };
  const [initAddPhone, setInitAddPhone] = React.useState<IPhoneModel>({
    id: 0,
    name: "",
    type: "",
  });
  const AddPhoneScheme = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    type: Yup.string().required("Type is required"),
  });
  const submitAddPhone = async (values: any, setSubmitting) => {
    console.log("values", values);
    setSubmitting(false);
  };
  /************************** Phone Update ****************************/
  const [openPhoneUpdate, setOpenPhoneUpdate] = React.useState(false);
  const handleOpenPhoneUpdate = () => {
    setOpenPhoneUpdate(true);
  };
  const handleClosePhoneUpdate = () => {
    setOpenPhoneUpdate(false);
  };
  const [initUpdatePhone, setInitUpdatePhone] = React.useState<IPhoneModel>({
    id: 0,
    name: "",
    type: "",
  });
  const UpdatePhoneScheme = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    type: Yup.string().required("Type is required"),
  });
  const submitUpdatePhone = async (values: any, setSubmitting) => {
    console.log("values", values);
    setSubmitting(false);
  };

  /************************** Data ****************************/
  useEffect(() => {
    PersonService.GetAll()
      .then((res) => {
        console.log("people", res);
        setPeople(res.result);
      })
      .catch((error) => {
        console.error("roles", error);
      });
  }, []);
  /************************** Finish Data ****************************/
  /************************** Handle edit data ****************************/

  const [openUpdatePerson, setOpenUpdatePerson] = React.useState(false);
  const handleOpenUpdatePerson = (data: IPersonModel) => {
    console.log("data", data);
    setInitUpdatePerson({
      id: data.id,
      firstName: data.firstName,
      gender: data.gender,
      lastName: data.lastName,
      nationalId: data.nationalId,
      nationality: data.nationality,
      passportFirstName: data.passportFirstName,
      passportLastName: data.passportLastName,
      passportNumber: data.passportNumber,
    } as IPersonModel);
    setOpenUpdatePerson(true);
  };
  const handleCloseUpdatePerson = () => {
    setDisabled(false);
    setOpenUpdatePerson(false);
  };
  const [initUpdatePerson, setInitUpdatePerson] = React.useState<IPersonModel>({
    id: 0,
    firstName: "",
    lastName: "",
    gender: "male",
    nationalId: "",
    nationality: "",
    passportFirstName: "",
    passportLastName: "",
    passportNumber: "",
  });

  const submitUpdatePerson = async (values: any, setSubmitting) => {
    console.log("values", values);
    setSubmitting(false);
  };

  /************************** Finish Handle edit data ****************************/
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const handleDetails = (data: any) => {
    setDisabled(true);
    setOpenUpdatePerson(true);
  };
  const handleEdit = (data: any) => {
    throw new Error("Function not implemented.");
  };
  const handleAddPhone = (id: any) => {
    throw new Error("Function not implemented.");
  };
  const [people, setPeople] = React.useState<IPersonModel[]>(null);
  const renderPeople = () => {
    if (people != null && people.length > 0) {
      let columns = [
        {
          title: "Id",
          field: "id",
          hidden: true,
        },
        {
          title: "First Name",
          field: "firstName",
        },
        {
          title: "Last Name",
          field: "lastName",
        },
        {
          title: "Gender",
          field: "gender",
        },
        {
          title: "Nationality",
          field: "nationality",
        },
        {
          title: "National Id",
          field: "nationalId",
        },
        {
          title: "Passport First Name",
          field: "passportFirstName",
          hidden: true,
        },
        {
          title: "Passport Last Name",
          field: "passportLastName",
          hidden: true,
        },
        {
          title: "Passport Number",
          field: "passportNumber",
          hidden: true,
        },
      ];
      let data = people;
      let options = {
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF",
          fontWeight: "bold",
        },
        filtering: false,
        paging: true,
        maxBodyHeight: "500px",
      };
      return (
        <ActionTable
          Title="People List"
          Columns={columns}
          Data={data}
          Options={options}
          Actions={[
            {
              tooltip: "Person Details",
              icon: "details",
              onClick: (evt, data) => handleDetails(data.id),
            },
            {
              tooltip: "Edit Person",
              icon: "edit",
              onClick: (evt, data) => handleOpenUpdatePerson(data),
            },
            {
              tooltip: "Add Phone",
              icon: "add_phone",
              onClick: (evt, data) => handleOpenPhone(),
            },
            {
              tooltip: "Phone Details",
              icon: "phone",
              onClick: (evt, data) => handleAddPhone(data.id),
            },
            {
              tooltip: "Delete Phone",
              icon: "phone_disabled",
              onClick: (evt, data) => handleAddPhone(data.id),
            },
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
          {"Add New Person"}
        </Button>
        {renderPeople()}
      </GridItem>
      <AddPersonModal
        disabled={disabled}
        key={"addPerson"}
        title={"Add Person"}
        open={open}
        formScheme={AddPersonScheme}
        handleClose={handleClose}
        initValues={initAddPerson}
        submitForm={submitAddPerson}
      ></AddPersonModal>
      <AddPersonModal
        disabled={disabled}
        key={"updatePerson"}
        title={"Update Person"}
        open={openUpdatePerson}
        formScheme={UpdatePersonScheme}
        handleClose={handleCloseUpdatePerson}
        initValues={initUpdatePerson}
        submitForm={submitUpdatePerson}
      ></AddPersonModal>
      <AddPhoneModal
        key={"addPhone"}
        title={"Add Phone"}
        open={openPhone}
        formScheme={AddPhoneScheme}
        handleClose={handleClosePhone}
        initValues={initAddPhone}
        submitForm={submitAddPhone}
      ></AddPhoneModal>
      <AddPhoneModal
        key={"editPhone"}
        title={"Edit Phone"}
        open={openPhoneUpdate}
        formScheme={UpdatePhoneScheme}
        handleClose={handleClosePhoneUpdate}
        initValues={initUpdatePhone}
        submitForm={submitUpdatePhone}
      ></AddPhoneModal>
    </GridContainer>
  );
};
(PeopleList as any).auth = true;
(PeopleList as any).layout = Admin;
export default PeopleList;
