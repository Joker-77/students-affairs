import React, { useState, useRef, useEffect } from "react";
import SuiButton from "../../../../../components/SuiButton";
import { useRouter } from "next/router";
import { useTranslation } from "../../../../../Utility/Translations/useTranslation";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import ActionTable from "../../../../../components/MaterialTable/ActionTable";
import { toast } from "react-toastify";
import Placeholder from "../../../../../Utility/Placeholders";
import GridContainer from "../../../../../components/Grid/GridContainer";
import GridItem from "../../../../../components/Grid/GridItem";
import TeacherService from "../../../../../Services/TeacherService";
import { error } from "console";

interface IProps {
  planData: any;
}
export const AssignedTeachers: React.FC<IProps> = ({ planData }) => {
  const router = useRouter();
  const { translate } = useTranslation();
  const [deleteId, setDeleteId] = useState(null);
  const [confirmDelete, setConfirmDelete] = React.useState(false);
  const [assignedTeachers, setAssignedTeachers] = React.useState([]);
  const tableRef = useRef();
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    TeacherService.GetAll()
      .then((res) => {
        setTeachers(res.result);
        if (planData.id && planData.edu_year_id) {
          TeacherService.GetTeachersAssignments(
            planData.id,
            planData.edu_year_id
          )
            .then((resp) => {
              if (resp.result != null && resp.result.length > 0) {
                let assignedTeachers = resp.result.map((entity) => {
                  const teacher = teachers?.find(
                    (e) => e.id == entity?.teacher_id
                  );
                  return {
                    id: entity.id,
                    teacher_id: entity.teacher_id,
                    teacher: `${teacher?.prefix_name} 
                                  ${teacher?.person?.first_name} 
                                  ${teacher?.person?.last_name}`,
                    theo: `${entity.theoretical_hours}/${entity.theoretical_classes}`,
                    pract: `${entity.practical_hours}/${entity.practical_classes}`,
                    mixed: `${entity.mixed_hours}/${entity.mixed_classes}`,
                  };
                });
                console.log(assignedTeachers);
                setAssignedTeachers(assignedTeachers);
              }
            })
            .catch((err) => {});
        }
      })
      .catch((err) => {
        toast.error(err?.error);
      });
  }, [teachers]);
  const columns = [
    {
      title: "المعرّف",
      field: "id",
      hidden: true,
    },
    {
      title: "المدرّس",
      field: "teacher",
    },
    {
      title: "نظري س/ف",
      field: "theo",
    },
    {
      title: "عملي س/ف",
      field: "pract",
    },
    {
      title: "نظري/عملي س/ف",
      field: "mixed",
    },
  ];
  const ConfirmDialog = ({ id, show, handleClose, handleDeleteCourse }) => {
    return (
      <Dialog open={show} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Typography>هل تريد تأكيد حذف المقرر</Typography>
        </DialogTitle>
        <Box position="absolute" top={0} right={0}>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="contained">
            {translate("Cancel")}
          </Button>
          <Button
            onClick={() => handleDeleteCourse(id)}
            color="primary"
            variant="contained"
          >
            {translate("Confirm")}
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  const handleDeleteCourse = () => {
    if (deleteId) {
      //   PlanService.DeleteCourse(deleteId)
      //     .then((resp) => {
      //       if (resp.success) {
      //         toast.success("Course deleted successfully");
      //         let _data = (data as Array<any>).filter((item) => {
      //           return item.id != deleteId;
      //         });
      //         setData(_data);
      //         setFilteredData(_data);
      //         setConfirmDelete(false);
      //       }
      //     })
      //     .catch((err) => {});
    } else toast.error("يجب تحديد معرّف المقرّر ضمن البرنامج");
  };
  const handleConfirmDialog = (id) => {
    setDeleteId(id);
    setConfirmDelete(true);
  };
  const handleCloseConfirmDialog = () => {
    setDeleteId(null);
    setConfirmDelete(false);
  };
  const renderPlanCourses = () => {
    if (assignedTeachers != null && assignedTeachers.length > 0) {
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
          onClick: (evt, data) => handleConfirmDialog(data.id),
        },
      ];
      return (
        <div ref={tableRef}>
          <ActionTable
            Title={`${translate("All")} ${assignedTeachers.length}`}
            Columns={columns}
            Data={assignedTeachers}
            Options={options}
            Actions={actions}
          />
          <ConfirmDialog
            key={"Confirm Delete Course"}
            id={deleteId}
            show={confirmDelete}
            handleClose={handleCloseConfirmDialog}
            handleDeleteCourse={handleDeleteCourse}
          />
        </div>
      );
    } else return <Placeholder loading={false} />;
  };
  return (
    <GridContainer>
      <GridItem md={12} style={{ marginTop: "1em .5em" }}>
        {renderPlanCourses()}
      </GridItem>
    </GridContainer>
  );
};
