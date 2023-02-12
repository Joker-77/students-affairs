import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import Admin from "../../../../layouts/Admin";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";
import { IDesireModel } from "../../../../Models/ApiResponse/DesireModel";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import Placeholder from "../../../../Utility/Placeholders";
import DesireService from "../../../../Services/DesireService";
import AddDesireModal from "../../../../components/Modals/AddDesireModal";
import * as Yup from "yup";
import {useRouter} from "next/router";
import SpecialityService from "../../../../Services/SpecialityService";
import {useTranslation} from "../../../../Utility/Translations/useTranslation";

interface IDesireListProps {}
const DesireList: React.FC<IDesireListProps> = ({}) => {
  const {translate} = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const router = useRouter();
  const candidateId = router.query?.id;

  const [open, setOpen] = React.useState(false);
  const [specialities, setSpecialities] = React.useState([]);

  useEffect(() => {
    SpecialityService.GetAll()
        .then((res) => {
          console.log("Speciality", res);
          setSpecialities(res.result);
        })
        .catch((error) => {
          console.error("error", error);
        });
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [selectedDesire, setSelectedDesire] = React.useState<number>(0);
  const [initAddDesire, setInitAddDesire] = React.useState<IDesireModel>({
    id: 0,
    order: 0,
    speciality_id: 0,
    candidate_id: +candidateId
  });
  const AddDesireScheme = Yup.object().shape({
    order: Yup.string().required(translate("{0} is required", "Order")),
    speciality_id: Yup.string().required(translate("{0} is required", "Speciality")),
    candidate_id: Yup.string().required(translate("{0} is required", "Candidate")),
  });
  const UpdateDesireScheme = Yup.object().shape({
    order: Yup.string().required(translate("{0} is required", "Order")),
    speciality_id: Yup.string().required(translate("{0} is required", "Speciality")),
    candidate_id: Yup.string().required(translate("{0} is required", "Candidate")),
  });
  const submitAddDesire = async (values: any, setSubmitting) => {
    setSubmitting(true);
    DesireService.Add(values)
        .then((res) => {
          console.log("Desire", res);
          const DesireCopy = [res.result, ...Desires];
          setDesires(DesireCopy);
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
    DesireService.GetAll(candidateId)
      .then((res) => {
        console.log("Desire", res);
        setDesires(res.result);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);
  /************************** Finish Data ****************************/
  /************************** Handle edit data ****************************/

  const [openUpdateDesire, setOpenUpdateDesire] = React.useState(false);
  const [openModalForDetails, setOpenModalForDetails] = React.useState(false);
  const handleOpenUpdateDesire = (data: IDesireModel) => {
    console.log("data", data);
    setInitUpdateDesire({
      id: data.id,
      speciality_id: data.speciality_id,
      order: data.order,
      candidate_id: data.candidate_id,
    } as IDesireModel);
    setOpenUpdateDesire(true);
  };
  const handleCloseUpdateDesire = () => {
    setOpenModalForDetails(false);
    setDisabled(false);
    setOpenUpdateDesire(false);
  };
  const [initUpdateDesire, setInitUpdateDesire] = React.useState<IDesireModel>({
    id: 0,
    speciality_id: 0,
    order: 0,
    candidate_id: +candidateId,
  });

  const submitUpdateDesire = async (values: any, setSubmitting) => {
    setSubmitting(true);
    console.log("values", values);
    DesireService.Edit(values)
        .then((res) => {
          console.log("Desire", res);
          const DesireCopy = [...Desires].map(item => item.id == res.result.id ? res.result : item);
          setDesires(DesireCopy);
          setOpenUpdateDesire(false);
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
    handleOpenUpdateDesire(data);
  };

  const [Desires, setDesires] = React.useState<IDesireModel[]>(null);
  const renderDesire = () => {
    if (Desires != null && Desires.length > 0) {
      let columns = [
        {
          title: translate("Id"),
          field: "id",
          hidden: true,
        },
        {
          title: translate("Speciality"),
          field: router?.locale === 'ar' ? "speciality.ar_name" : "speciality.en_name",
        },
        {
          title: translate("Order"),
          field: "order",
        },
        // {
        //   title: "candidate_id",
        //   field: "candidate_id",
        // },
      ];
      let data = Desires;
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
          Title={translate("Desire List")}
          Columns={columns}
          Data={data}
          Options={options}
          Actions={[
            {
              tooltip: translate("Desire Details"),
              icon: "details",
              onClick: (evt, data) => handleDetails(data),
            },
            {
              tooltip: translate("Edit Desire"),
              icon: "edit",
              onClick: (evt, data) => handleOpenUpdateDesire(data),
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
          {translate("Add New Desire")}
        </Button>
        {renderDesire()}
      </GridItem>
      <AddDesireModal
        disabled={disabled}
        key={"addDesire"}
        title={translate("Add Desire")}
        open={open}
        formScheme={AddDesireScheme}
        handleClose={handleClose}
        initValues={initAddDesire}
        submitForm={submitAddDesire}
        specialities={specialities}
      ></AddDesireModal>
      <AddDesireModal
        disabled={disabled}
        key={"updateDesire"}
        title={!openModalForDetails ? translate("Update Desire") : translate("Desire Details")}
        open={openUpdateDesire}
        formScheme={UpdateDesireScheme}
        handleClose={handleCloseUpdateDesire}
        initValues={initUpdateDesire}
        submitForm={submitUpdateDesire}
        specialities={specialities}
      ></AddDesireModal>
    </GridContainer>
  );
};
(DesireList as any).auth = true;
(DesireList as any).layout = Admin;
export default DesireList;
