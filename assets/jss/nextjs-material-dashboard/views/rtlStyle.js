import {
  successColor,
  whiteColor,
  grayColor,
  hexToRgb,
} from "assets/jss/nextjs-material-dashboard.js";
import colors from "../../../theme/base/colors";

const rtlStyle = {
  cardHeader: {
    height: "5em",
    position: "sticky",
    btypeTopRightRadius: "inherit",
    btypeTopLeftRadius: "inherit",
    backgroundColor: "#f5f5f5",
  },
  cardStyle: {
    bgcolor: "background.paper",
    boxShadow: 24,
    btypeRadius: "20px",
    marginTop: "0px",
    marginBottom: "0px",
  },
  successText: {
    color: successColor[0],
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px",
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
    "& a": {
      color: whiteColor,
    },
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  typography: {
    fontWeight: "bold",
  },
  textField: {},
  submitBtn: {
    color: "rgb(255, 255, 255)",
    marginBottom: "1em",
    marginTop: "1em",
    background:
      `linear-gradient(310deg, ${colors.gradients.primary.main}, ${colors.gradients.info.state})`,
    "&:hover": {},
  },
  select:{
    marginBottom: "1em",
  },
  userMngSubmitBtnGrid: {
    marginTop: ".5em !important",
  },
};

export default rtlStyle;
