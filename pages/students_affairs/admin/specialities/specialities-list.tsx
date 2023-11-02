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
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
interface ISpecialityListProps {}
const SpecialityList: React.FC<ISpecialityListProps> = ({}) => {
  const { translate } = useTranslation();
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
  const [initAddSpeciality, setInitAddSpeciality] =
    React.useState<ISpecialityModel>({
      id: 0,
      en_name: "",
      ar_name: "",
      code: "",
    });
  const AddSpecialityScheme = Yup.object().shape({
    en_name: Yup.string().required(
      translate("{0} is required", "English Name")
    ),
    ar_name: Yup.string().required(translate("{0} is required", "Arabic Name")),
    code: Yup.string().required(translate("{0} is required", "Code")),
  });
  const UpdateSpecialityScheme = Yup.object().shape({
    en_name: Yup.string().required(
      translate("{0} is required", "English Name")
    ),
    ar_name: Yup.string().required(translate("{0} is required", "Arabic Name")),
    code: Yup.string().required(translate("{0} is required", "Code")),
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
    setInitUpdateSpeciality({
      id: data.id,
      ar_name: data.ar_name,
      en_name: data.en_name,
      ar_name: data.ar_short_name,
      en_name: data.en_short_name,
      code: data.code,
    } as ISpecialityModel);
    setOpenUpdateSpeciality(true);
  };
  const handleCloseUpdateSpeciality = () => {
    setOpenModalForDetails(false);
    setDisabled(false);
    setOpenUpdateSpeciality(false);
  };
  const [initUpdateSpeciality, setInitUpdateSpeciality] =
    React.useState<ISpecialityModel>({
      id: 0,
      ar_name: "",
      en_name: "",
      ar_short_name: "",
      en_short_name: "",
      code: "",
    });
  const submitUpdateSpeciality = async (values: any, setSubmitting) => {
    setSubmitting(true);
    console.log("values", values);
    SpecialityService.Edit(values)
      .then((res) => {
        console.log("Speciality", res);
        const SpecialityCopy = [...Speciality].map((item) =>
          item.id == res.result.id ? res.result : item
        );
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
        },
        {
          title: translate("Arabic Short Name"),
          field: "ar_short_name",
        },
        {
          title: translate("English Short Name"),
          field: "en_short_name",
        },
        {
          title: translate("الرمز بالعربية"),
          field: "ar_code",
        },
        {
          title: translate("الرمز بالإنكليزية"),
          field: "en_code",
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
          Title={translate("Speciality List")}
          Columns={columns}
          Data={data}
          Options={options}
          Actions={[
            {
              tooltip: translate("Speciality Details"),
              icon: "details",
              onClick: (evt, data) => handleDetails(data),
            },
            {
              tooltip: translate("Edit Speciality"),
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
          {translate("Add New Speciality")}
        </Button>
        {renderSpeciality()}
      </GridItem>
      <AddSpecialityModal
        disabled={disabled}
        key={"addSpeciality"}
        title={translate("Add Speciality")}
        open={open}
        formScheme={AddSpecialityScheme}
        handleClose={handleClose}
        initValues={initAddSpeciality}
        submitForm={submitAddSpeciality}
      ></AddSpecialityModal>
      <AddSpecialityModal
        disabled={disabled}
        key={"updateSpeciality"}
        title={
          !openModalForDetails
            ? translate("Update Speciality")
            : translate("Speciality Details")
        }
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
