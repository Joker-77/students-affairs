import React, { useEffect } from "react";
import { IAttachmentModel } from "../../Models/ApiResponse/AttachmentModel";
import { useTranslation } from "../../Utility/Translations/useTranslation";
import { Button, Card, Grid, IconButton, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import styles from "../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import colors from "../../assets/theme/base/colors";

import * as yup from "yup";
import { AttachFile, Delete } from "@material-ui/icons";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import AddAttachmentModal from "../Modals/AddAttachmentModal";
import Placeholder from "../../Utility/Placeholders";
interface IAddAttachmentProps {
  courseId?: number;
  attachments?: IAttachmentModel;
}

const AddAttachment: React.FC<IAddAttachmentProps> = ({
  courseId,
  attachments,
  ...props
}) => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const [body, setBody] = React.useState(false);

  const handleOpen = (body) => {
    setOpen(true);
    setBody(body);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const AddAttachmentScheme = yup.object().shape({
    type: yup.string().required(translate("{0} is required", "Name")),
  });

  const [initAddAttachment, setInitAddAttachment] = React.useState({
    type: 3,
  });

  const fileItem = {
    padding: "5px 20px",
    border: "1px solid #cdcdcd",
    borderRadius: 30,
    marginBottom: 5,
    marginTop: 5,
  };

  const fileContainer = {
    display: "flex",
    justifyContent: "space-between",
  };

  const fileLink = {
    fontSize: 15,
    color: "#000",
  };
  const icon = {
    width: 20,
    height: 20,
    color: colors.error.main,
  };

  const spacer = {
    marginBottom: "25px",
  };

  const [submitting, setSubmitting] = React.useState(null);

  const submitAddOtherAttachment = (values: any, setLoading) => {
    submitAddAttachment({ ...body, name: values.name }, setLoading);
  };

  const submitAddAttachment = async (
    values: any,
    setLoading = setSubmitting
  ) => {
    // setLoading(values.type);
    // AttachmentService.Add(values)
    //   .then((res) => {
    //     console.log("Attachment", res);
    //     const AttachmentCopy = [res.result, ...Attachments];
    //     setAttachments(AttachmentCopy);
    //     handleClose();
    //   })
    //   .catch((error) => {
    //     console.error("error", error);
    //   })
    //   .finally(() => {
    //     values.type !== 3 && setLoading(null);
    //   });
  };

  /************************** Handle delete data ****************************/

  const submitDeleteAttachment = async (values: any) => {
    // console.log("values", values);
    // AttachmentService.Delete(values)
    //   .then((res) => {
    //     console.log("Attachment", res);
    //     const AttachmentCopy = [...Attachments].filter(
    //       (item) => item.id != values.id
    //     );
    //     setAttachments(AttachmentCopy);
    //   })
    //   .catch((error) => {
    //     console.error("roles", error);
    //   });
  };

  const getParamsByName = (name) =>
    name === "id_image"
      ? { type: 1, name: translate("ID image") }
      : name === "personal_image"
      ? { type: 2, name: translate("Personal image") }
      : { type: 3, name: "" };
  const handleUpload = ({ target }) => {
    const fileReader = new FileReader();
    const body = getParamsByName(target.name);

    fileReader.readAsDataURL(target.files[0]);
    fileReader.onload = (e) => {
      if (body.type === 3) {
        handleOpen({
          ...body,
          file: e.target.result,
          candidate_id: courseId,
        });
      } else {
        submitAddAttachment({
          ...body,
          file: e.target.result,
          candidate_id: courseId,
        });
      }
    };
  };

  const renderUploadButton = (type, label, name) => (
    <Button
      disabled={submitting === type}
      variant="contained"
      className={classes.submitBtn}
      component="label"
      style={{ minWidth: 200, color: "white" }}
    >
      <AttachFile />
      {submitting === type ? translate("Processing ...") : label}
      <input
        accept="image/*"
        type="file"
        name={name}
        hidden
        onChange={handleUpload}
      />
    </Button>
  );

  const [attachment, setAttachments] = React.useState<IAttachmentModel>(null);

  useEffect(() => {
    console.log("attachments", attachments);
    setAttachments(attachments);
  }, [attachments]);

  const renderAttachment = () => {
    if (attachment != null) {
      return (
        <React.Fragment>
          <GridContainer>
            <GridItem sm={8}>
              <Card style={fileItem}>
                <div style={fileContainer}>
                  <a
                    style={fileLink}
                    href={`${process.env.BASE_URL}/${attachment.url}`}
                    target={"_blank"}
                  >
                    {attachment.name}
                  </a>
                  <IconButton
                    style={icon}
                    onClick={() =>
                      submitDeleteAttachment({ id: attachment.id })
                    }
                  >
                    <Delete style={icon} />
                  </IconButton>
                </div>
              </Card>
            </GridItem>
          </GridContainer>
        </React.Fragment>
      );
    } else return <Placeholder loading={false} />;
  };
  return (
    <React.Fragment>
      <CardHeader>
        <h4 style={{ fontWeight: "bold", color: "#01579b" }}>
          {translate("Attachments")}
        </h4>
      </CardHeader>
      <CardBody>
        <GridContainer>
          <GridItem md={12}>
            <Grid container></Grid>
            <div id={"certificate"} style={spacer} />
            {renderUploadButton(
              3,
              translate("Upload Other Attachment"),
              "other_attachment"
            )}
            <div id={"certificate"} style={spacer} />
            {renderAttachment()}
          </GridItem>
        </GridContainer>
      </CardBody>

      <AddAttachmentModal
        key={"addAttachment"}
        title={translate("Add Attachment")}
        open={open}
        handleClose={handleClose}
        formScheme={AddAttachmentScheme}
        initValues={initAddAttachment}
        submitForm={submitAddOtherAttachment}
      ></AddAttachmentModal>
    </React.Fragment>
  );
};

export default AddAttachment;
