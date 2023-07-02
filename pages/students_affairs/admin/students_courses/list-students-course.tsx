import React, { useEffect, useRef } from "react";
import GridContainer from "components/Grid/GridContainer.js";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import { useRouter } from "next/router";
import Placeholder from "../../../../Utility/Placeholders";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import {
  Button,
  Select,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
  Input,
  TextField,
  InputAdornment,
  OutlinedInput,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import {
  FilterList,
  Sort,
  Search,
  Print,
  Add,
  FilterListSharp,
  AddComment,
  AddBox,
  Folder,
  PostAdd,
  Description,
  ExpandMore,
} from "@material-ui/icons";
import SuiButton from "../../../../components/SuiButton";
import { Grid } from "@material-ui/core";
import StudentsImportService from "../../../../Services/StudentsImportService";

interface IListCourses {
  courses: any;
}
const StudentListCourses = ({ courses }) => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const router = useRouter();
  const [confirm, setConfirm] = React.useState(false);
  const [deleteCourse, setDeleteCourse] = React.useState(false);
  const [data, setData] = React.useState(courses);
  const tableRef = useRef();
  const handleConfirmDialog = (data) => {
    setDeleteCourse(data.id);
    setConfirm(true);
  };
  // const [data, setData] = useState(courses);
  const handleConfirmClose = () => {
    setConfirm(false);
  };
  const handleDeleteCourse = () => {
    StudentsImportService.DeleteStudentCourss(deleteCourse)
      .then((msg) => {
        console.log(deleteCourse);
        let courses = data.filter((e) => e.id != deleteCourse);
        setData(courses);
        toast.success("تم حذف المقرّر بنجاح");
        setConfirm(false);
      })
      .catch((e) => {});
  };

  const ConfirmDialog = () => (
    <div>
      <Dialog
        open={confirm}
        onClose={handleConfirmClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {translate("حذف مقرر طالب")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {translate("هل أنت متأكد من حذف هذا المقرر للطالب")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={classes.submitBtn} onClick={handleDeleteCourse}>
            {translate("Yes")}
          </Button>
          <Button
            style={{
              minWidth: 80,
              color: "#dc3545",
              backgroundColor: "transparent",
              border: "1px solid #dc3545",
            }}
            color={"danger"}
            onClick={handleConfirmClose}
            autoFocus
          >
            {translate("No")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  useEffect(() => {
    setData(courses);
  }, [courses]);
  const renderCourses = () => {
    let columns = [
      {
        title: translate("Id"),
        field: "id",
        hidden: true,
      },
      {
        title: translate("English Name"),
        field: "en_name",
      },
      {
        title: translate("Arabic Name"),
        field: "ar_name",
      },
      {
        title: translate("Code"),
        field: "code",
      },
    ];
    if (courses != null && courses.length > 0) {
      // let data = courses;
      console.log(data);
      let options = {
        actionsColumnIndex: -1,
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF",
          fontWeight: "bold",
        },
        filtering: false,
        paging: true,
        pageSize: 10,
        maxBodyHeight: "500px",
        search: false,
        tableLayout: "auto",
      };
      let actions = [
        {
          icon: () => (
            <SuiButton
              style={{
                minWidth: 80,
                color: "#dc3545",
                backgroundColor: "transparent",
                border: "1px solid #dc3545",
              }}
              color={"danger"}
            >
              {translate("Delete")}
            </SuiButton>
          ),
          onClick: (evt, data) => handleConfirmDialog(data),
        },
      ];
      return (
        <div ref={tableRef}>
          <ActionTable
            Title={translate("قائمة مقررات الطالب")}
            Columns={columns}
            Data={data.map((item) => {
              return {
                ...item,
                en_name: `${item.edu_course?.course?.en_name}`,
                ar_name: `${item.edu_course?.course?.ar_name}`,
                code: `${item.edu_course?.course?.code}`,
              };
            })}
            Options={options}
            Actions={actions}
          />
        </div>
      );
    } else return <Placeholder loading={false} />;
  };
  return (
    <Grid container md={12} style={{ margin: "2em 0em" }}>
      <GridItem md={12}>{renderCourses()}</GridItem>
      <ConfirmDialog />
    </Grid>
  );
};

export default StudentListCourses;
