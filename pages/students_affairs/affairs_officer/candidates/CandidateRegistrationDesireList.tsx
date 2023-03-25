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
import {useTranslation} from "../../../../Utility/Translations/useTranslation";

interface IRegistrationDesireListProps {candidateId: number}
const CandidateRegistrationDesireList: React.FC<IRegistrationDesireListProps> = ({candidateId}) => {
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
  const [selectedRegistrationDesire, setSelectedRegistrationDesire] = React.useState<number>(0);
  const [initAddRegistrationDesire, setInitAddRegistrationDesire] = React.useState<IRegistrationDesireModel>({
    id: 0,
    order: 0,
    desire: "",
    candidate_id: +candidateId
  });
  const AddRegistrationDesireScheme = Yup.object().shape({
    order: Yup.string().required(translate("{0} is required", "Order")),
    desire: Yup.string().required(translate("{0} is required", "Desire")),
    candidate_id: Yup.string().required(translate("{0} is required", "Candidate")),
  });
  const UpdateRegistrationDesireScheme = Yup.object().shape({
    order: Yup.string().required(translate("{0} is required", "Order")),
    desire: Yup.string().required(translate("{0} is required", "Desire")),
    candidate_id: Yup.string().required(translate("{0} is required", "Candidate")),
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
          title: translate("Id"),
          field: "id",
          hidden: true,
        },
        {
          title: translate("Desire"),
          field: "desire",
          render: rowData => translate(rowData.desire)
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
          Title={translate("Registration Desire List")}
          Columns={columns}
          Data={data}
          Options={options}
          Actions={[
            {
              tooltip: translate("Registration Desire Details"),
              icon: "details",
              onClick: (evt, data) => handleDetails(data),
            },
            {
              tooltip: translate("Edit Registration Desire"),
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
          {translate("Add New Registration Desire")}
        </Button>
        {renderRegistrationDesire()}
      </GridItem>
      <AddRegistrationDesireModal
        disabled={disabled}
        key={"addRegistration Desire"}
        title={translate("Add Registration Desire")}
        open={open}
        formScheme={AddRegistrationDesireScheme}
        handleClose={handleClose}
        initValues={initAddRegistrationDesire}
        submitForm={submitAddRegistrationDesire}
      ></AddRegistrationDesireModal>
      <AddRegistrationDesireModal
        disabled={disabled}
        key={"updateRegistrationDesire"}
        title={!openModalForDetails ? translate("Update Registration Desire") : translate("Registration Desire Details")}
        open={openUpdateRegistrationDesire}
        formScheme={UpdateRegistrationDesireScheme}
        handleClose={handleCloseUpdateRegistrationDesire}
        initValues={initUpdateRegistrationDesire}
        submitForm={submitUpdateRegistrationDesire}
      ></AddRegistrationDesireModal>
    </GridContainer>
  );
};
(CandidateRegistrationDesireList as any).auth = true;
(CandidateRegistrationDesireList as any).layout = Admin;
export default CandidateRegistrationDesireList;
