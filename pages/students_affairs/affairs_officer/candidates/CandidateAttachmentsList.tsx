import React, { useEffect } from "react";
import {Button, Grid, IconButton} from "@material-ui/core";
import Admin from "../../../../layouts/Admin";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";
import { IAttachmentModel } from "../../../../Models/ApiResponse/AttachmentModel";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import Placeholder from "../../../../Utility/Placeholders";
import AttachmentService from "../../../../Services/AttachmentService";
import {useRouter} from "next/router";
import {useTranslation} from "../../../../Utility/Translations/useTranslation";
import {AttachFile, Close, Delete} from "@material-ui/icons";
import CardHeader from "../../../../components/Card/CardHeader";
import CardBody from "../../../../components/Card/CardBody";
import Card from "../../../../components/Card/Card";
import colors from "../../../../assets/theme/base/colors";
import AddCertificateModal from "../../../../components/Modals/AddCertificateModal";
import * as Yup from "yup";
import AddAttachmentModal from "../../../../components/Modals/AddAttachmentModal";
import {ICertificateModel} from "../../../../Models/ApiResponse/CertificateModel";

interface ICandidateAttachmentsListProps {candidateId: number, attachments: IAttachmentModel[]}
const CandidateCandidateAttachmentsList: React.FC<ICandidateAttachmentsListProps> = ({attachments, candidateId}) => {
    const {translate} = useTranslation();
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

    const AddAttachmentScheme = Yup.object().shape({
        type: Yup.string().required(translate("{0} is required", "Name")),
    });

    const [initAddAttachment, setInitAddAttachment] = React.useState({
        type: 3,
    });

    const fileItem = {
        padding: '5px 20px',
        border: '1px solid #cdcdcd',
        borderRadius: 30,
        marginBottom: 5,
        marginTop: 5,
    };

    const fileContainer = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    const fileLink = {
        fontSize: 15,
        color: '#000'
    };
    const icon = {
        width: 20,
        height: 20,
        color: colors.error.main
    };

    const spacer = {
        marginBottom: "25px",
    };

    const [submitting, setSubmitting] = React.useState(null);

    const submitAddOtherAttachment = (values: any, setLoading) => {
        submitAddAttachment({...body, name: values.name}, setLoading);
    }

    const submitAddAttachment = async (values: any, setLoading = setSubmitting) => {
        setLoading(values.type);
        AttachmentService.Add(values)
            .then((res) => {
                console.log("Attachment", res);
                const AttachmentCopy = [res.result, ...Attachments];
                setAttachments(AttachmentCopy);
                handleClose();
            })
            .catch((error) => {
                console.error("error", error);
            })
            .finally(() => {
                values.type !== 3 && setLoading(null);
            });
    };

    /************************** Handle felete data ****************************/

    const submitDeleteAttachment = async (values: any) => {
        console.log("values", values);
        AttachmentService.Delete(values)
            .then((res) => {
                console.log("Attachment", res);
                const AttachmentCopy = [...Attachments].filter(item => item.id != values.id);
                setAttachments(AttachmentCopy);
            })
            .catch((error) => {
                console.error("roles", error);
            });
    };

    const getParamsByName = (name) =>
        name === 'id_image' ? {type: 1, name: translate('ID image')} :
            (name === 'personal_image' ? {type: 2, name: translate('Personal image')} :
                {type: 3, name: ''});
    const handleUpload = ({ target }) => {
        const fileReader = new FileReader();
        const body = getParamsByName(target.name);

        fileReader.readAsDataURL(target.files[0]);
        fileReader.onload = (e) => {
            if(body.type === 3) {
                handleOpen({...body, file: e.target.result, candidate_id: candidateId});
            }
            else {
                submitAddAttachment({...body, file: e.target.result, candidate_id: candidateId});
            }
        };
    };

    const renderUploadButton = (type, label, name) => (
        <Button
            disabled={submitting === type}
            variant="contained"
            className={classes.submitBtn}
            component="label"
            style={{minWidth: 200, color: 'white'}}
        >
            <AttachFile />
            {submitting === type ? translate('Processing ...') : label}
            <input
                accept="image/*"
                type="file"
                name={name}
                hidden
                onChange={handleUpload}
            />
        </Button>
    );

    const [Attachments, setAttachments] = React.useState<IAttachmentModel[]>([]);

    useEffect(() => {
        console.log('attachments', attachments);
        setAttachments(attachments);
    }, [attachments]);

    const renderAttachment = () => {
        if (Attachments != null && Attachments.length > 0) {

            return (
                <React.Fragment>
                    {Attachments.map((item) => (
                        <GridContainer>
                            <GridItem sm={8}>
                                <Card style={fileItem}>
                                    <div style={fileContainer}>
                                        <a style={fileLink} href={`${process.env.BASE_URL}/${item.url}`} target={'_blank'}>{item.name}</a>
                                        <IconButton style={icon} onClick={() => submitDeleteAttachment({id: item.id})}>
                                            <Delete style={icon}/>
                                        </IconButton>
                                    </div>

                                </Card>
                            </GridItem>
                        </GridContainer>
                    ))}
                </React.Fragment>
            );
        } else return <Placeholder />;
    };
    return (
        <React.Fragment>


            <Card>
                <CardHeader>
                    <h4 style={{ fontWeight: "bold", color: "#01579b" }}>{translate('Attachments')}</h4>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                        <GridItem md={12}>
                            <Grid container>
                                <Grid md={6}>
                                    {renderUploadButton(2, translate("Upload personal image"), 'personal_image')}
                                </Grid>
                                <Grid md={6}>
                                    {renderUploadButton(1, translate("Upload ID image"), 'id_image')}
                                </Grid>
                            </Grid>
                            <div id={'certificate'} style={spacer}/>
                            {renderUploadButton(3, translate("Upload Other Attachment"), 'other_attachment')}
                            <div id={'certificate'} style={spacer}/>
                            {renderAttachment()}
                        </GridItem>
                    </GridContainer>
                </CardBody>
            </Card>

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
(CandidateCandidateAttachmentsList as any).auth = true;
(CandidateCandidateAttachmentsList as any).layout = Admin;
export default CandidateCandidateAttachmentsList;
