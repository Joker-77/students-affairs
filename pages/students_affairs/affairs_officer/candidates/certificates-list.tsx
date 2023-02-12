import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import Admin from "../../../../layouts/Admin";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";
import { ICertificateModel } from "../../../../Models/ApiResponse/CertificateModel";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import Placeholder from "../../../../Utility/Placeholders";
import CertificateService from "../../../../Services/CertificateService";
import AddCertificateModal from "../../../../components/Modals/AddCertificateModal";
import * as Yup from "yup";
import {useRouter} from "next/router";
import {useTranslation} from "../../../../Utility/Translations/useTranslation";

interface ICertificateListProps {}
const CertificateList: React.FC<ICertificateListProps> = ({}) => {
  const {translate} = useTranslation();
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
  const [selectedCertificate, setSelectedCertificate] = React.useState<number>(0);
  const [initAddCertificate, setInitAddCertificate] = React.useState<ICertificateModel>({
    id: 0,
    type: "",
    year: "",
    result: "",
    city: "",
    details: [],
    round: "",
    subscription_number: "",
    candidate_id: +candidateId
  });
  const AddCertificateScheme = Yup.object().shape({
    type: Yup.string().required(translate("{0} is required", "Type")),
    year: Yup.string().required(translate("{0} is required", "Year")),
    result: Yup.string().required(translate("{0} is required", "Result")),
    city: Yup.string().required(translate("{0} is required", "City")),
    round: Yup.string().required(translate("{0} is required", "Round")),
    subscription_number: Yup.string().required(translate("{0} is required", "Subscription number")),
    candidate_id: Yup.string().required(translate("{0} is required", "Candidate")),
  });
  const UpdateCertificateScheme = Yup.object().shape({
    type: Yup.string().required(translate("{0} is required", "Type")),
    year: Yup.string().required(translate("{0} is required", "Year")),
    result: Yup.string().required(translate("{0} is required", "Result")),
    city: Yup.string().required(translate("{0} is required", "City")),
    round: Yup.string().required(translate("{0} is required", "Round")),
    subscription_number: Yup.string().required(translate("{0} is required", "Subscription number")),
    candidate_id: Yup.string().required(translate("{0} is required", "Candidate")),
  });
  const submitAddCertificate = async (values: any, setSubmitting) => {
    setSubmitting(true);
    CertificateService.Add(values)
        .then((res) => {
          console.log("Certificate", res);
          const CertificateCopy = [res.result, ...Certificates];
          setCertificates(CertificateCopy);
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
    CertificateService.GetAll(candidateId)
      .then((res) => {
        console.log("Certificate", res);
        setCertificates(res.result);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);
  /************************** Finish Data ****************************/
  /************************** Handle edit data ****************************/

  const [openUpdateCertificate, setOpenUpdateCertificate] = React.useState(false);
  const [openModalForDetails, setOpenModalForDetails] = React.useState(false);
  const handleOpenUpdateCertificate = (data: ICertificateModel) => {
    console.log("data", data);
    setInitUpdateCertificate({
      id: data.id,
      type: data.type,
      year: data.year,
      result: data.result,
      city: data.city,
      details: data.details,
      round: data.round,
      subscription_number: data.subscription_number,
      candidate_id: data.candidate_id
    } as ICertificateModel);
    setOpenUpdateCertificate(true);
  };
  const handleCloseUpdateCertificate = () => {
    setOpenModalForDetails(false);
    setDisabled(false);
    setOpenUpdateCertificate(false);
  };
  const [initUpdateCertificate, setInitUpdateCertificate] = React.useState<ICertificateModel>({
    id: 0,
    type: "",
    year: "",
    result: "",
    city: "",
    details: [],
    round: "",
    subscription_number: "",
    candidate_id: +candidateId
  });

  const submitUpdateCertificate = async (values: any, setSubmitting) => {
    setSubmitting(true);
    console.log("values", values);
    CertificateService.Edit(values)
        .then((res) => {
          console.log("Certificate", res);
          const CertificateCopy = [...Certificates].map(item => item.id == res.result.id ? res.result : item);
          setCertificates(CertificateCopy);
          setOpenUpdateCertificate(false);
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
    handleOpenUpdateCertificate(data);
  };

  const [Certificates, setCertificates] = React.useState<ICertificateModel[]>(null);
  const renderCertificate = () => {
    if (Certificates != null && Certificates.length > 0) {
      let columns = [
        {
          title: translate("Id"),
          field: "id",
          hidden: true,
        },
        {
          title: translate("Type"),
          field: "type",
        },
        {
          title: translate("Year"),
          field: "year",
        },
        {
          title: translate("Result"),
          field: "result",
        },
        {
          title: translate("City"),
          field: "city",
        },
        {
          title: translate("Round"),
          field: "round",
        },
        {
          title: translate("Subscription number"),
          field: "subscription_number",
        },
      ];
      let data = Certificates;
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
          Title={translate("Certificate List")}
          Columns={columns}
          Data={data}
          Options={options}
          Actions={[
            {
              tooltip: translate("Certificate Details"),
              icon: "details",
              onClick: (evt, data) => handleDetails(data),
            },
            // {
            //   tooltip: translate("Edit Certificate"),
            //   icon: "edit",
            //   onClick: (evt, data) => handleOpenUpdateCertificate(data),
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
          {translate("Add New Certificate")}
        </Button>
        {renderCertificate()}
      </GridItem>
      <AddCertificateModal
        disabled={disabled}
        key={"addCertificate"}
        title={translate("Add Certificate")}
        open={open}
        formScheme={AddCertificateScheme}
        handleClose={handleClose}
        initValues={initAddCertificate}
        submitForm={submitAddCertificate}
      ></AddCertificateModal>
      <AddCertificateModal
        disabled={disabled}
        key={"updateCertificate"}
        title={!openModalForDetails ? translate("Update Certificate") : translate("Certificate Details")}
        open={openUpdateCertificate}
        formScheme={UpdateCertificateScheme}
        handleClose={handleCloseUpdateCertificate}
        initValues={initUpdateCertificate}
        submitForm={submitUpdateCertificate}
      ></AddCertificateModal>
    </GridContainer>
  );
};
(CertificateList as any).auth = true;
(CertificateList as any).layout = Admin;
export default CertificateList;
