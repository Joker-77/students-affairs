import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import Admin from "../../../../layouts/Admin";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";
import { IRegistrationDesireModel } from "../../../../Models/ApiResponse/RegistrationDesireModel";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import Placeholder from "../../../../Utility/Placeholders";
import RegistrationDesireService from "../../../../Services/RegistrationDesireService";
import AddRegistrationDesireModal from "../../../../components/Modals/AddRegistrationDesireModal";
import * as Yup from "yup";
import {useRouter} from "next/router";
import DesireService from "../../../../Services/DesireService";

interface IRegistrationDesireListProps {}
const RegistrationDesireList: React.FC<IRegistrationDesireListProps> = ({}) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const router = useRouter();
  const candidateId = router.query?.id;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [selectedRegistrationDesire, setSelectedRegistrationDesire] = React.useState<number>(0);
  const [initAddRegistrationDesire, setInitAddRegistrationDesire] = React.useState<IRegistrationDesireModel>({
    id: 0,
    order: 0,
    desire: "",
    candidate_id: +candidateId
  });
  const AddRegistrationDesireScheme = Yup.object().shape({
    order: Yup.string().required("Order is required"),
    desire: Yup.string().required("Desire is required"),
    candidate_id: Yup.string().required("Candidate is required"),
  });
  const UpdateRegistrationDesireScheme = Yup.object().shape({
    desire: Yup.string().required("Order is required"),
    order: Yup.string().required("Desire is required"),
    candidate_id: Yup.string().required("Candidate is required"),
  });
  const submitAddRegistrationDesire = async (values: any, setSubmitting) => {
    setSubmitting(true);
    RegistrationDesireService.Add(values)
        .then((res) => {
          console.log("RegistrationDesire", res);
          const RegistrationDesireCopy = [res.result, ...RegistrationDesires];
          setRegistrationDesires(RegistrationDesireCopy);
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
    RegistrationDesireService.GetAll(candidateId)
      .then((res) => {
        console.log("RegistrationDesire", res);
        setRegistrationDesires(res.result);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);
  /************************** Finish Data ****************************/
  /************************** Handle edit data ****************************/

  const [openUpdateRegistrationDesire, setOpenUpdateRegistrationDesire] = React.useState(false);
  const [openModalForDetails, setOpenModalForDetails] = React.useState(false);
  const handleOpenUpdateRegistrationDesire = (data: IRegistrationDesireModel) => {
    console.log("data", data);
    setInitUpdateRegistrationDesire({
      id: data.id,
      desire: data.desire,
      order: data.order,
      candidate_id: data.candidate_id,
    } as IRegistrationDesireModel);
    setOpenUpdateRegistrationDesire(true);
  };
  const handleCloseUpdateRegistrationDesire = () => {
    setOpenModalForDetails(false);
    setDisabled(false);
    setOpenUpdateRegistrationDesire(false);
  };
  const [initUpdateRegistrationDesire, setInitUpdateRegistrationDesire] = React.useState<IRegistrationDesireModel>({
    id: 0,
    desire: "",
    order: 0,
    candidate_id: +candidateId,
  });

  const submitUpdateRegistrationDesire = async (values: any, setSubmitting) => {
    setSubmitting(true);
    console.log("values", values);
    RegistrationDesireService.Edit(values)
        .then((res) => {
          console.log("RegistrationDesire", res);
          const RegistrationDesireCopy = [...RegistrationDesires].map(item => item.id == res.result.id ? res.result : item);
          setRegistrationDesires(RegistrationDesireCopy);
          setOpenUpdateRegistrationDesire(false);
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
    handleOpenUpdateRegistrationDesire(data);
  };

  const [RegistrationDesires, setRegistrationDesires] = React.useState<IRegistrationDesireModel[]>(null);
  const renderRegistrationDesire = () => {
    if (RegistrationDesires != null && RegistrationDesires.length > 0) {
      let columns = [
        {
          title: "Id",
          field: "id",
          hidden: true,
        },
        {
          title: "Desire",
          field: "desire",
        },
        {
          title: "Order",
          field: "order",
        },
        // {
        //   title: "candidate_id",
        //   field: "candidate_id",
        // },
      ];
      let data = RegistrationDesires;
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
          Title="RegistrationDesire List"
          Columns={columns}
          Data={data}
          Options={options}
          Actions={[
            {
              tooltip: "RegistrationDesire Details",
              icon: "details",
              onClick: (evt, data) => handleDetails(data),
            },
            {
              tooltip: "Edit RegistrationDesire",
              icon: "edit",
              onClick: (evt, data) => handleOpenUpdateRegistrationDesire(data),
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
          {"Add New Registration Desire"}
        </Button>
        {renderRegistrationDesire()}
      </GridItem>
      <AddRegistrationDesireModal
        disabled={disabled}
        key={"addRegistrationDesire"}
        title={"Add RegistrationDesire"}
        open={open}
        formScheme={AddRegistrationDesireScheme}
        handleClose={handleClose}
        initValues={initAddRegistrationDesire}
        submitForm={submitAddRegistrationDesire}
      ></AddRegistrationDesireModal>
      <AddRegistrationDesireModal
        disabled={disabled}
        key={"updateRegistrationDesire"}
        title={!openModalForDetails ? "Update RegistrationDesire" : "RegistrationDesire Details"}
        open={openUpdateRegistrationDesire}
        formScheme={UpdateRegistrationDesireScheme}
        handleClose={handleCloseUpdateRegistrationDesire}
        initValues={initUpdateRegistrationDesire}
        submitForm={submitUpdateRegistrationDesire}
      ></AddRegistrationDesireModal>
    </GridContainer>
  );
};
(RegistrationDesireList as any).auth = true;
(RegistrationDesireList as any).layout = Admin;
export default RegistrationDesireList;
