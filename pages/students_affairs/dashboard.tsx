import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import RTL from "layouts/RTL.js";
import {
  selectSessionKey,
  useAppDispatch,
  useAppSelector,
  setSessionKey,
  selectDirection,
} from "../../redux";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";
import { useTranslation } from "../../Utility/Translations/useTranslation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import SignIn from "../authentication/sign-in";

function Dashboard(props) {
  const useStyles = makeStyles(styles);
  const sessionKey = useAppSelector(selectSessionKey);
  const { translate } = useTranslation();
  const router = useRouter();
  if (typeof window !== "undefined") {
    // Perform localStorage action
    let _key = localStorage.getItem("sa_access_token");
    if (_key == "" || _key === undefined)
      router.push("/authentication/sign-in");
  }
  React.useEffect(() => {
    console.log(props);
  }, [sessionKey]);
  return <h3>{translate("Hello Admin!")}</h3>;
}

Dashboard.layout = Admin; // RTL// Admin;
Dashboard.auth = true;
export default Dashboard;
