import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import Admin from "../../../../layouts/Admin";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";
import { ISpecialityModel } from "../../../../Models/ApiResponse/SpecialityModel";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import Placeholder from "../../../../Utility/Placeholders";
import SpecialityService from "../../../../Services/SpecialityService";
import AddSpecialityModal from "../../../../components/Modals/AddSpecialityModal";
import * as Yup from "yup";
interface ISpecialityListProps {}
const SpecialityList: React.FC<ISpecialityListProps> = ({}) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [selectedSpeciality, setSelectedSpeciality] = React.useState<number>(0);
  const [initAddSpeciality, setInitAddSpeciality] = React.useState<ISpecialityModel>({
    id: 0,
    en_name: "",
    ar_name: "",
    code: ""
  });
  const AddSpecialityScheme = Yup.object().shape({
    ar_name: Yup.string().required("English name is required"),
    en_name: Yup.string().required("Arabic name is required"),
    code: Yup.string().required("Code is required"),
  });
  const UpdateSpecialityScheme = Yup.object().shape({
    ar_name: Yup.string().required("English name is required"),
    en_name: Yup.string().required("Arabic name is required"),
    code: Yup.string().required("Code is required"),
  });
  const submitAddSpeciality = async (values: any, setSubmitting) => {
    setSubmitting(true);
    SpecialityService.Add(values)
        .then((res) => {
          console.log("Speciality", res);
          const SpecialityCopy = [res.result, ...Speciality];
          setSpeciality(SpecialityCopy);
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
    SpecialityService.GetAll()
      .then((res) => {
        console.log("Speciality", res);
        setSpeciality(res.result);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);
  /************************** Finish Data ****************************/
  /************************** Handle edit data ****************************/

  const [openUpdateSpeciality, setOpenUpdateSpeciality] = React.useState(false);
  const [openModalForDetails, setOpenModalForDetails] = React.useState(false);
  const handleOpenUpdateSpeciality = (data: ISpecialityModel) => {
    console.log("data", data);
    setInitUpdateSpeciality({
      id: data.id,
      ar_name: data.ar_name,
      en_name: data.en_name,
      code: data.code,
    } as ISpecialityModel);
    setOpenUpdateSpeciality(true);
  };
  const handleCloseUpdateSpeciality = () => {
    setOpenModalForDetails(false);
    setDisabled(false);
    setOpenUpdateSpeciality(false);
  };
  const [initUpdateSpeciality, setInitUpdateSpeciality] = React.useState<ISpecialityModel>({
    id: 0,
    ar_name: "",
    en_name: "",
    code: "",
  });

  const submitUpdateSpeciality = async (values: any, setSubmitting) => {
    setSubmitting(true);
    console.log("values", values);
    SpecialityService.Edit(values)
        .then((res) => {
          console.log("Speciality", res);
          const SpecialityCopy = [...Speciality].map(item => item.id == res.result.id ? res.result : item);
          setSpeciality(SpecialityCopy);
          setOpenUpdateSpeciality(false);
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
    handleOpenUpdateSpeciality(data);
  };

  const [Speciality, setSpeciality] = React.useState<ISpecialityModel[]>(null);
  const renderSpeciality = () => {
    if (Speciality != null && Speciality.length > 0) {
      let columns = [
        {
          title: "Id",
          field: "id",
          hidden: true,
        },
        {
          title: "Arabic Name",
          field: "ar_name",
        },
        {
          title: "English Name",
          field: "en_name",
        },
        {
          title: "Code",
          field: "code",
        },
      ];
      let data = Speciality;
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
          Title="Speciality List"
          Columns={columns}
          Data={data}
          Options={options}
          Actions={[
            {
              tooltip: "Speciality Details",
              icon: "details",
              onClick: (evt, data) => handleDetails(data),
            },
            {
              tooltip: "Edit Speciality",
              icon: "edit",
              onClick: (evt, data) => handleOpenUpdateSpeciality(data),
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
          {"Add New Speciality"}
        </Button>
        {renderSpeciality()}
      </GridItem>
      <AddSpecialityModal
        disabled={disabled}
        key={"addSpeciality"}
        title={"Add Speciality"}
        open={open}
        formScheme={AddSpecialityScheme}
        handleClose={handleClose}
        initValues={initAddSpeciality}
        submitForm={submitAddSpeciality}
      ></AddSpecialityModal>
      <AddSpecialityModal
        disabled={disabled}
        key={"updateSpeciality"}
        title={!openModalForDetails ? "Update Speciality" : "Speciality Details"}
        open={openUpdateSpeciality}
        formScheme={UpdateSpecialityScheme}
        handleClose={handleCloseUpdateSpeciality}
        initValues={initUpdateSpeciality}
        submitForm={submitUpdateSpeciality}
      ></AddSpecialityModal>
    </GridContainer>
  );
};
(SpecialityList as any).auth = true;
(SpecialityList as any).layout = Admin;
export default SpecialityList;
