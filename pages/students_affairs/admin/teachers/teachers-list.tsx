import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import Admin from "../../../../layouts/Admin";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";
import { ITeacherModel } from "../../../../Models/ApiResponse/TeacherModel";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import Placeholder from "../../../../Utility/Placeholders";
import TeacherService from "../../../../Services/TeacherService";
import AddTeacherModal from "../../../../components/Modals/AddTeacherModal";
import * as Yup from "yup";
import {useTranslation} from "../../../../Utility/Translations/useTranslation";
interface ITeacherListProps {}
const TeacherList: React.FC<ITeacherListProps> = ({}) => {
  const {translate} = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [selectedTeacher, setSelectedTeacher] = React.useState<number>(0);
  const [initAddTeacher, setInitAddTeacher] = React.useState<ITeacherModel>({
    id: 0,
    en_name: "",
    ar_name: "",
    code: ""
  });
  const AddTeacherScheme = Yup.object().shape({
    en_name: Yup.string().required(translate("{0} is required", "English Name")),
    ar_name: Yup.string().required(translate("{0} is required","Arabic Name")),
    code: Yup.string().required(translate("{0} is required","Code")),
  });
  const UpdateTeacherScheme = Yup.object().shape({
    en_name: Yup.string().required(translate("{0} is required", "English Name")),
    ar_name: Yup.string().required(translate("{0} is required","Arabic Name")),
    code: Yup.string().required(translate("{0} is required","Code")),
  });
  const submitAddTeacher = async (values: any, setSubmitting) => {
    setSubmitting(true);
    TeacherService.Add(values)
        .then((res) => {
          console.log("Teacher", res);
          const TeacherCopy = [res.result, ...Teacher];
          setTeacher(TeacherCopy);
          setOpen(false);
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
    TeacherService.GetAll()
      .then((res) => {
        console.log("Teacher", res);
        setTeacher(res.result);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);
  /************************** Finish Data ****************************/
  /************************** Handle edit data ****************************/

  const [openUpdateTeacher, setOpenUpdateTeacher] = React.useState(false);
  const [openModalForDetails, setOpenModalForDetails] = React.useState(false);
  const handleOpenUpdateTeacher = (data: ITeacherModel) => {
    console.log("data", data);
    setInitUpdateTeacher({
      id: data.id,
      ar_name: data.ar_name,
      en_name: data.en_name,
      code: data.code,
    } as ITeacherModel);
    setOpenUpdateTeacher(true);
  };
  const handleCloseUpdateTeacher = () => {
    setOpenModalForDetails(false);
    setDisabled(false);
    setOpenUpdateTeacher(false);
  };
  const [initUpdateTeacher, setInitUpdateTeacher] = React.useState<ITeacherModel>({
    id: 0,
    ar_name: "",
    en_name: "",
    code: "",
  });

  const submitUpdateTeacher = async (values: any, setSubmitting) => {
    setSubmitting(true);
    console.log("values", values);
    TeacherService.Edit(values)
        .then((res) => {
          console.log("Teacher", res);
          const TeacherCopy = [...Teacher].map(item => item.id == res.result.id ? res.result : item);
          setTeacher(TeacherCopy);
          setOpenUpdateTeacher(false);
        })
        .catch((error) => {
          console.error("roles", error);
        })
        .finally(() => {
          setSubmitting(false);
        });
  };

  /************************** Finish Handle edit data ****************************/
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const handleDetails = (data: any) => {
    setOpenModalForDetails(true);
    setDisabled(true);
    handleOpenUpdateTeacher(data);
  };

  const [Teacher, setTeacher] = React.useState<ITeacherModel[]>(null);
  const renderTeacher = () => {
    if (Teacher != null && Teacher.length > 0) {
      let columns = [
        {
          title: translate("Id"),
          field: "id",
          hidden: true,
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
          title: translate("Number"),
          field: "number",
        },
      ];
      let data = Teacher;
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
          Title={translate("Teacher List")}
          Columns={columns}
          Data={data}
          Options={options}
          Actions={[
            {
              tooltip: translate("Teacher Details"),
              icon: "details",
              onClick: (evt, data) => handleDetails(data),
            },
            {
              tooltip: translate("Edit Teacher"),
              icon: "edit",
              onClick: (evt, data) => handleOpenUpdateTeacher(data),
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
          {translate("Add New Teacher")}
        </Button>
        {renderTeacher()}
      </GridItem>
      <AddTeacherModal
        disabled={disabled}
        key={"addTeacher"}
        title={translate("Add Teacher")}
        open={open}
        formScheme={AddTeacherScheme}
        handleClose={handleClose}
        initValues={initAddTeacher}
        submitForm={submitAddTeacher}
      ></AddTeacherModal>
      <AddTeacherModal
        disabled={disabled}
        key={"updateTeacher"}
        title={!openModalForDetails ? translate("Update Teacher") : translate("Teacher Details")}
        open={openUpdateTeacher}
        formScheme={UpdateTeacherScheme}
        handleClose={handleCloseUpdateTeacher}
        initValues={initUpdateTeacher}
        submitForm={submitUpdateTeacher}
      ></AddTeacherModal>
    </GridContainer>
  );
};
(TeacherList as any).auth = true;
(TeacherList as any).layout = Admin;
export default TeacherList;
