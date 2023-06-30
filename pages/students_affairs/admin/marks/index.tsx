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
} from "@material-ui/core";
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
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <GridContainer>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
    </GridContainer>
  );
};
(Marks as any).auth = true;
(Marks as any).layout = Admin;
export default Marks;
