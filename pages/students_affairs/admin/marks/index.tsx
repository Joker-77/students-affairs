import * as React from "react";
import Admin from "../../../../layouts/Admin";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Typography,
  makeStyles,
  DialogContentText,
} from "@material-ui/core";
import { ISpecialityModel } from "../../../../Models/Specialities/SpecialityModel";
import { IStudentYear } from "../../../../.history/Models/StudentsYear/IStudentYear_20230527030144";
import { Card } from "@material-ui/core";
import AddMark from "./add-mark";
import EditMark from "./edit-mark";
interface IMarksProps {}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface InitPlanTabsProps {
  message: string;
  specialties: ISpecialityModel[];
  initYears: IStudentYear[];
  handleChangeEduYear: (value) => void;
  handleChangeSpec: (value) => void;
  latestYear: any;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function tabProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Marks: React.FC<IMarksProps> = ({}) => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const router = useRouter();

  // Confirm Lock
  const [confirm, setConfirm] = React.useState(false);
  const [lockMarks, setLockMarks] = React.useState(false);
  const handleShowConfirmLock = () => {
    setConfirm(true);
  };
  const handleCloseConfirmLock = () => {
    setConfirm(false);
  };
  const handleLock = () => {};
  // Lock Dialog
  const ConfirmDialog = () => (
    <div>
      <Dialog
        open={confirm}
        onClose={handleCloseConfirmLock}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {translate("Delete a course")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {translate("Are you sure you want to delete this course")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLock}>{translate("Yes")}</Button>
          <Button onClick={handleCloseConfirmLock} autoFocus>
            {translate("No")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

  const [value, setValue] = React.useState(0);
  const [title, setTitle] = React.useState("إدخال العلامات");
  React.useEffect(() => {
    value == 0 ? setTitle("إدخال العلامات") : setTitle("تعديل علامة");
  }, [value]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <GridContainer>
      <Card style={{ padding: "1em 4em", width: "100%", margin: "5px 0px" }}>
        <Grid container>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </Grid>
        <Grid item md={12} style={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="إدخال العلامات" {...tabProps(0)} />
            <Tab label="تعديل العلامات" {...tabProps(1)} />
          </Tabs>
        </Grid>
        <TabPanel value={value} index={0}>
          <AddMark />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EditMark />
        </TabPanel>
      </Card>
    </GridContainer>
  );
};
(Marks as any).auth = true;
(Marks as any).layout = Admin;
export default Marks;
