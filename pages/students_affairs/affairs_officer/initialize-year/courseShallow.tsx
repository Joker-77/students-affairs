import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";

interface ICourseShallowProps {
  show: boolean;
  course: any;
  close: () => void;
}
const CourseShallow: React.FC<ICourseShallowProps> = ({
  show,
  course,
  close,
}) => {
  const title = "";
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps["maxWidth"]>("sm");
  const { translate } = useTranslation();
  const [details?, setCourse] = React.useState(course);
  React.useEffect(() => {
    console.log(course);
    console.log(details?.semester == 1);
    setCourse(course);
  }, [course]);
  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={show}
      onClose={close}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Grid
          container
          md={12}
          style={{
            display: "flex",
            justifyContent: "space-between",
            direction: "rtl",
          }}
        >
          <Grid
            item
            md={3}
            style={{
              border: "1px solid lightblue",
              borderRadius: "10px",
              margin: "0 5px",
            }}
          >
            <Typography style={{ textAlign: "center" }}>
              عدد ساعات النظري
            </Typography>
            <Typography style={{ textAlign: "center", fontWeight: "bold" }}>
              {
                details?.edu_course?.course_description?.hours?.filter(
                  (item) => item.type == "theoretic"
                )[0]?.hours
              }
            </Typography>
          </Grid>
          <Grid
            item
            md={3}
            style={{
              border: "1px solid lightblue",
              borderRadius: "10px",
              margin: "0 5px",
            }}
          >
            <Typography style={{ textAlign: "center" }}>
              عدد ساعات العملي
            </Typography>
            <Typography style={{ textAlign: "center", fontWeight: "bold" }}>
              {
                details?.edu_course?.course_description?.hours?.filter(
                  (item) => item.type == "practical"
                )[0]?.hours
              }
            </Typography>
          </Grid>
          <Grid
            item
            md={3}
            style={{
              border: "1px solid lightblue",
              borderRadius: "10px",
              margin: "0 5px",
            }}
          >
            <Typography style={{ textAlign: "center" }}>
              عدد الساعات المشتركة
            </Typography>
            <Typography style={{ textAlign: "center", fontWeight: "bold" }}>
              {
                details?.edu_course?.course_description?.hours?.filter(
                  (item) => item.type == "mixed"
                )[0]?.hours
              }
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          md={12}
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "5px 0",
            direction: "rtl",
          }}
        >
          <Grid
            item
            md={2}
            style={{
              border: "1px solid lightblue",
              borderRadius: "10px",
              margin: "0 5px",
            }}
          >
            <Typography style={{ textAlign: "center" }}>رمز المقرّر</Typography>
            <Typography style={{ textAlign: "center", fontWeight: "bold" }}>
              {details?.edu_course?.course?.code}
            </Typography>
          </Grid>
          <Grid
            item
            md={2}
            style={{
              border: "1px solid lightblue",
              borderRadius: "10px",
              margin: "0 5px",
            }}
          >
            <Typography style={{ textAlign: "center" }}>الاسم</Typography>
            <Typography style={{ textAlign: "center", fontWeight: "bold" }}>
              {details?.edu_course?.course?.ar_name}
            </Typography>
          </Grid>
          <Grid
            item
            md={2}
            style={{
              border: "1px solid lightblue",
              borderRadius: "10px",
              margin: "0 5px",
            }}
          >
            <Typography style={{ textAlign: "center" }}>السنة</Typography>
            <Typography style={{ textAlign: "center", fontWeight: "bold" }}>
              {details?.year?.ar_name}
            </Typography>
          </Grid>
          <Grid
            item
            md={2}
            style={{
              border: "1px solid lightblue",
              borderRadius: "10px",
              margin: "0 5px",
            }}
          >
            <Typography style={{ textAlign: "center" }}>الاختصاص</Typography>
            <Typography style={{ textAlign: "center", fontWeight: "bold" }}>
              {details?.year?.speciality?.ar_name}
            </Typography>
          </Grid>
          <Grid
            item
            md={2}
            style={{
              border: "1px solid lightblue",
              borderRadius: "10px",
              margin: "0 5px",
            }}
          >
            <Typography style={{ textAlign: "center" }}>الفصل</Typography>
            <Typography style={{ textAlign: "center", fontWeight: "bold" }}>
              {details?.semester == 1 ? "الأول" : "الثاني"}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" style={{ border: "1px solid rgba(211, 47, 47, 0.5)", color: "#d32f2f" }} onClick={close}>{translate("Close")}</Button>
      </DialogActions>
    </Dialog>
  );
};
export default CourseShallow;
