import * as React from "react";
import CandidatePersonalInfo from "../../pages/students_affairs/affairs_officer/candidates/CandidatePersonalInfo";
import {
  Modal, Box, Grid, IconButton,
} from "@material-ui/core";
import {useRouter} from "next/router";
import colors from "../../assets/theme/base/colors";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import {Close} from "@material-ui/icons";
import CardBody from "../Card/CardBody";
import {useTranslation} from "../../Utility/Translations/useTranslation";

interface IAddCandidateOutSideMinistryModalProps {
  open: boolean;
  handleClose(): void;
  title: string;
}
const AddCandidateOutSideMinistryModal: React.FC<IAddCandidateOutSideMinistryModalProps> = ({
  open,
  handleClose,
    title
}) => {
  const initValues = {
    id: 0,
    registeration_number: "",
    birth_date: "",
    birth_place: "",
    qaid_place: "",
    qaid_number: "",
    military_office: "",
    person: {
      id: 0,
      first_name: "",
      last_name: "",
      passport_first_name: "",
      passport_last_name: "",
      passport_number: "",
      national_number: "",
      sex: "",
      nationality: "",
      phones:[]
    },
    father: {
      id: 0,
      first_name: "",
      last_name: "",
      passport_first_name: "",
      passport_last_name: "",
      passport_number: "",
      national_number: "",
      sex: "male",
      nationality: "",
      phones:[]
    },
    mother: {
      id: 0,
      first_name: "",
      last_name: "",
      passport_first_name: "",
      passport_last_name: "",
      passport_number: "",
      national_number: "",
      sex: "female",
      nationality: "",
      phones:[]
    },
  };

  const {locale} = useRouter();
  const {translate} = useTranslation();

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    bgcolor: "background.paper",
    // border: "2px solid brown",
    boxShadow: 24,
    borderRadius: "20px",
  };
  const cardStyle = {
    position: "absolute" as "absolute",
    //top: "50%",
    //left: "50%",
    //transform: "translate(-50%, -50%)",
    // width: 400,
    bgcolor: "background.paper",
    // border: "2px solid brown",
    boxShadow: 24,
    borderRadius: "20px",
    marginTop: "0px",
    marginBottom: "0px",
  };
  const styles = {
    modal: {
      overflowY: "scroll",
      overflowX: "hidden",
      height: "95%",
      direction: locale === 'ar' ? "rtl" : "ltr",
    },
    header: {
      height: "5em",
      position: "sticky",
      borderTopRightRadius: "inherit",
      borderTopLeftRadius: "inherit",
      backgroundColor: colors.gradients.primary.main,
      color: "#fff",
    },
  };

  return (

      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={styles.modal}>
          <Card style={cardStyle}>
            <CardHeader style={styles.header}>
              <Grid container>
                <Grid md={8}>
                  <h4 style={{ fontWeight: "bold" }}>{translate('Add Candidate')} {translate('out-side of ministry data')}</h4>
                </Grid>
                <Grid md={4}>
                  <IconButton
                      style={{
                        color: '#fff',
                        position: "absolute",
                        top: "1em",
                        [locale === 'ar' ? 'left' : 'right']: "2em",
                      }}
                      onClick={handleClose}
                  >
                    <Close />
                  </IconButton>
                </Grid>
              </Grid>
            </CardHeader>
            <CardBody>
              <CandidatePersonalInfo external={1} handleClose={handleClose} forAdd initValues={initValues}/>
            </CardBody>
          </Card>
        </Box>
      </Modal>
  );
};

export default AddCandidateOutSideMinistryModal;
