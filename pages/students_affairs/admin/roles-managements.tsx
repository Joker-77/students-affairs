import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Modal,
  Tab,
  Tabs,
  AppBar,
  Button,
  TextField,
  Box,
  Typography,
} from "@material-ui/core";
import Admin from "../../../layouts/Admin";
import SwipeableViews from "react-swipeable-views";
import TabPanel from "../../../components/TabPanel/TabPanel";
import styles from "../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Placeholder from "../../../Utility/Placeholders";
import { confirmAlert } from "react-confirm-alert";
import {
  selectSessionKey,
  useAppDispatch,
  useAppSelector,
  setSessionKey,
  selectDirection,
} from "../../../redux";
import {
  IAddRole,
  IRoleModel,
  IUpdateRole,
} from "../../../Models/ApiResponse/RoleModel";
import RoleServices from "../../../Services/RoleService";
import { ITableAction } from "../../../Models/Action";
import ActionTable from "../../../components/MaterialTable/ActionTable";
import AddRoleModal from "../../../components/Modals/AddRoleModal";
import DeleteDialog from "../../../components/Modals/DeleteDialog";
import PermissionServices from "../../../Services/PermissionService";
import { IPermissionModel } from "../../../Models/ApiResponse/PermissionModel";

interface IRolesMngProps {
  value: number;
}

const RolesMng: React.FC<IRolesMngProps> = ({ value }) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [openUpdate, setOpenUpdate] = React.useState(false);
  const handleOpenUpdate = () => {
    setOpenUpdate(true);
  };
  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const [openDelete, setOpenDelete] = React.useState(false);

  const handleAlertDeleteOpen = () => {
    setOpenDelete(true);
  };

  const handleAlertDeleteClose = () => {
    setOpenDelete(false);
  };
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [privatevalue, setValue] = React.useState(value);
  const [selectedYear, setYear] = React.useState("");
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const a11yProps = (index: number) => {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  };

  /*********************************** Role name change ********************************/
  const initialAddRoleValues: IAddRole = {
    name: "",
  };
  const [initUpdateRole, setInitUpdateRole] = React.useState<IUpdateRole>({
    id: 0,
    name: "",
  });
  const AddRoleSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
  });
  const UpdateRoleSchema = Yup.object().shape({
    id: Yup.number().required("id is required"),
    name: Yup.string().required("name is required"),
  });
  const submitAddRoleForm = async (values: any, setSubmitting) => {
    console.log("values", values);
    setSubmitting(false);
  };
  const submitUpdateRole = async (values: any, setSubmitting) => {
    console.log("values", values);
    setSubmitting(false);
  };
  /*********************************** Data ********************************/
  const [roles, setRoles] = React.useState<IRoleModel[]>(null);
  const [permissions, setPermissions] =
    React.useState<IPermissionModel[]>(null);
  const metData = ["Id", "Name", "Status"];

  useEffect(() => {
    let roles = null;
    RoleServices.GetAll()
      .then((res) => {
        console.log("roles", res);
        setRoles(res.result);
      })
      .catch((error) => {
        console.error("roles", error);
      });
    PermissionServices.GetAll()
      .then((res) => {
        console.log("permissions", res);
        setPermissions(res.result);
      })
      .catch((error) => {
        console.error("permissions", error);
      });
  }, []);

  const handleUpdateRole = (_id, _val) => {
    setInitUpdateRole({
      id: _id,
      name: _val,
    });
    setOpenUpdate(true);
  };

  const [confirmDeleteMsg, setConfirmDeleteMsg] = React.useState<string>("");
  const [confirmDeleteId, setConfirmDeleteId] = React.useState<number>(null);
  const handleDeleteRole = (id, name) => {
    setConfirmDeleteMsg(`Are you sure you want to delete role: ${name}?`);
    setConfirmDeleteId(id);
    setOpenDelete(true);
  };
  const handleSubmitDelete = () => {
    setOpenDelete(false);
    alert(confirmDeleteId);
  };
  const renderRoles = () => {
    if (roles != null && roles.length > 0) {
      let columns = [
        {
          title: "Id",
          field: "id",
        },
        {
          title: "Name",
          field: "name",
        },
        // {
        //   title: "Name",
        //   field: "name",
        //   render: (rowData) => (
        //     <TextField
        //       value={rowData.name}
        //       onChange={(value) => handleUpdateRole(rowData.id, value)}
        //       disabled={updating}
        //     />
        //   ),
        // },
      ];
      let data = roles;
      let options = {
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF",
          fontWeight: "bold",
        },
        filtering: false,
        paging: true,
        maxBodyHeight: "500px",
      };
      return (
        <ActionTable
          Title="Roles"
          Columns={columns}
          Data={data}
          Options={options}
          Actions={[
            {
              tooltip: "Update Role",
              icon: "edit",
              onClick: (evt, data) => handleUpdateRole(data.id, data.name),
            },
            {
              tooltip: "Delete Role",
              icon: "delete",
              onClick: (evt, data) => handleDeleteRole(data.id, data.name),
            },
          ]}
        />
      );
    } else return <Placeholder />;
  };

  const renderPermissions = () => {
    if (permissions != null && permissions.length > 0) {
      let columns = [
        {
          title: "Id",
          field: "id",
        },
        {
          title: "Name",
          field: "name",
        },
      ];
      let data = permissions;
      let options = {
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF",
          fontWeight: "bold",
        },
        filtering: false,
        paging: true,
        maxBodyHeight: "500px",
      };
      return (
        <ActionTable
          Title="Permissions"
          Columns={columns}
          Data={data}
          Options={options}
        />
      );
    } else return <Placeholder />;
  };

  // Return
  return (
    <GridContainer>
      <GridItem md={12}>
        <AppBar position="static">
          <Tabs
            value={privatevalue}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Roles" {...a11yProps(0)} />
            <Tab label="Permissions" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews index={privatevalue} onChangeIndex={handleChangeIndex}>
          <TabPanel value={privatevalue} index={0} /* dir={theme.direction} */>
            <Button
              disabled={false}
              variant="contained"
              className={classes.submitBtn}
              onClick={handleOpen}
            >
              {"Add New Role"}
            </Button>
            {/* <MTable
              key={rowsLenght.toString()}
              dataEachPropsCount={dataEachProps}
              data={roles}
              metaData={metData}
              metDataCount={metDataCount}
            ></MTable> */}
            {renderRoles()}
          </TabPanel>
          <TabPanel value={privatevalue} index={1} /* dir={theme.direction} */>
            <Button
              disabled={false}
              variant="contained"
              className={classes.submitBtn}
              onClick={handleOpen}
            >
              {"Add New Permission"}
            </Button>
            {/* <MTable
              key={rowsLenght.toString()}
              dataEachPropsCount={dataEachProps}
              data={roles}
              metaData={metData}
              metDataCount={metDataCount}
            ></MTable> */}
            {renderPermissions()}
          </TabPanel>
        </SwipeableViews>
      </GridItem>
      <AddRoleModal
        key={"addRole"}
        title={"Add Role"}
        open={open}
        formScheme={AddRoleSchema}
        handleClose={handleClose}
        initValues={initialAddRoleValues}
        submitForm={submitAddRoleForm}
      ></AddRoleModal>
      <AddRoleModal
        key={"editRole"}
        title={"Update Role"}
        open={openUpdate}
        formScheme={UpdateRoleSchema}
        handleClose={handleCloseUpdate}
        initValues={initUpdateRole}
        submitForm={submitUpdateRole}
      ></AddRoleModal>
      <DeleteDialog
        key={"deleteRole"}
        open={openDelete}
        confirmMsg={confirmDeleteMsg}
        text={""}
        discard={"Discard"}
        submitDelete={"Delete"}
        handleSubmitDelete={handleSubmitDelete}
        handleClose={handleAlertDeleteClose}
      ></DeleteDialog>
    </GridContainer>
  );
};

(RolesMng as any).auth = true;
(RolesMng as any).layout = Admin;

export default RolesMng;
