import React, { FC, useEffect, useMemo, useState } from "react";
import { IUserModel, IRoleModel } from "../../../../Models/Users/UserModel";
import Admin from "../../../../layouts/Admin";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import * as yup from "yup";
import { Field, FieldArray, Form, Formik, getIn, ErrorMessage } from "formik";
import SuiButton from "../../../../components/SuiButton";
import { toast } from "react-toastify";
import UserService from "../../../../Services/UserService";
import { useRouter } from "next/router";
import { MenuProps, useStyles } from "../../../../Helpers/utils";
import {
  Add,
  ArrowBack,
  AttachFile,
  CloudDownload,
  FontDownload,
  ArrowLeft,
  ArrowRight,
} from "@material-ui/icons";
import Card from "../../../../components/Card/Card";
import {
  Box,
  CardActions,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
  InputLabel,
  Select,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Button,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import GridItem from "../../../../components/Grid/GridItem";

interface IUserDetailsProps {
  isCreate: boolean;
  details: IUserModel;
  isEditable: boolean;
  handleBack(): void;
  activateEdit(): void;
}

const UserDetails: FC<IUserDetailsProps> = ({
  isCreate,
  details,
  handleBack,
  activateEdit,
  isEditable,
}) => {
  // User
  const [User, setDetails] = useState<IUserModel>(details);

  // Roles
  const [assignedRoles, setAssignedRoles] = React.useState<any>([]);
  const [unassignedRoles, setUnAssignedRoles] = React.useState<any>([]);

  // Selected Roles
  const [selectedAssignedRoles, setSelectedAssignedRoles] = React.useState([]);
  const [selectedUnAssignedRoles, setSelectedUnAssignedRoles] = React.useState(
    []
  );

  // Permissions
  const [permissions, setPermissions] = React.useState<any>([]);
  const [unassignedPermissions, setUnAssignedPermissions] = React.useState<any>(
    []
  );

  const [role, setRole] = React.useState<number>(0);
  const [assignedRole, setAssignedRole] = React.useState(0);
  const [selected, setSelected] = React.useState([]);
  const [selectedUnAssigned, setSelectedUnAssigned] = React.useState([]);

  const { translate } = useTranslation();
  let UserSchema = yup.object({
    email: yup
      .string(translate("الإيميل"))
      .required(translate("Field is required")),
    password: yup
      .string(translate("كلمة السر"))
      .required(translate("Field is required")),
  });

  let initialValues = isCreate
    ? {
        email: User?.email,
      }
    : {
        id: User.id,
        email: User.email,
      };

  const addToUnAssigned = (id) => {
    let selectedAssigned = selectedAssignedRoles.slice();
    if (selectedAssigned.includes(id)) {
      let index = selectedAssigned.findIndex((e) => e === id);
      selectedAssigned.splice(index, 1);
    } else {
      selectedAssigned.push(id);
    }
    setSelectedAssignedRoles(selectedAssigned);
  };

  const addToAssigned = (id) => {
    let selectedUnAssigned = selectedUnAssignedRoles.slice();
    if (selectedUnAssigned.includes(id)) {
      let index = selectedUnAssigned.findIndex((e) => e === id);
      selectedUnAssigned.splice(index, 1);
    } else {
      selectedUnAssigned.push(id);
    }
    setSelectedUnAssignedRoles(selectedUnAssigned);
  };

  const AssignRoles = () => {
    let trues = [];
    let errors = [];
    selectedUnAssignedRoles.forEach((element) => {
      console.log(element);
      let payload = {
        user_id: User.id,
        role_id: element,
      };
      UserService.AssignUserToRole(payload)
        .then((response) => {
          if (response.success) {
            getData();
            trues.push(element);
            // toast.success("تم إسناد الدور بنجاح");
          } else {
            // console.log(response.error);
            errors.push(response.error.message);
            // toast.error(response.error.message);
          }
        })
        .catch((error) => {
          // console.log(error.message);
          // toast.error(error.message);
          // throw new Error(error);
          errors.push(error.message);
        });
    });
  };
  const UnAssignRoles = () => {
    let trues = [];
    let errors = [];
    selectedAssignedRoles.forEach((element) => {
      console.log(element);
      let payload = {
        user_id: User.id,
        role_id: element,
      };
      UserService.RevokeRole(payload)
        .then((response) => {
          console.log(response);
          if (response.success) {
            getData();
            trues.push(element);
            // toast.success("تم إسناد الدور بنجاح");
          } else {
            // console.log(response.error);
            errors.push(response.error.message);
            // toast.error(response.error.message);
          }
        })
        .catch((error) => {
          // console.log(error.message);
          // toast.error(error.message);
          // throw new Error(error);
          errors.push(error.message);
        });
    });
  };
  /************************* Handle Edit User ************/
  const handleEditUser = (event) => {
    event.preventDefault();
    activateEdit();
  };
  /************************* Handle Add Description ************/
  const validationSchema = yup.object({
    email: yup
      .string(translate("English Name"))
      .required(translate("Field is required")),
    password: yup
      .string(translate("Arabic Name"))
      .required(translate("Field is required")),
  });
  /*************** Handle End Add Description For User ******/

  const [errorPercentageMsg, setErrorPercentageMsg] = useState("");
  const submitForm = (values, setSubmitting) => {
    if (isCreate) {
      const payload: IUserModel = {
        email: values.email,
        password: values.password,
      };
      console.clear();
      UserService.Add(payload)
        .then((response) => {
          if (response.success) {
            toast.success("تمت إضافة المستخدم بنجاح");
            handleBack();
          } else {
            console.log(response.error);
            toast.error(response.error.message);
          }
        })
        .catch((error) => {
          console.log(error.message);
          toast.error(error.message);
          throw new Error(error);
        });
    } else {
      const payload = {
        user_id: User.id,
        // email: values.email,
        password: values.password,
      };
      UserService.Edit(payload)
        .then((response) => {
          if (response.success) {
            toast.success("تم تعديل معلومات المستخدم بنجاح");
          } else {
            console.log(response.error);
            toast.error(response.error.message);
          }
        })
        .catch((error) => {
          console.log(error.message);
          toast.error(error.message);
          throw new Error(error);
        });
    }
    setSubmitting(false);
  };
  const getData = async () => {
    setAssignedRoles([]);
    setUnAssignedRoles([]);
    setSelectedUnAssignedRoles([]);
    setSelectedAssignedRoles([]);
    // setUnAssignedPermissions([]);
    // setPermissions([]);
    // setSelected([]);
    // setSelectedUnAssigned([]);
    let user = null;
    // let permissions = [];
    // await UserService.GetPermissions()
    //   .then((response) => {
    //     permissions = response.result;
    //   })
    //   .catch((e) => {
    //     throw new Error(e);
    //   });
    await UserService.Get(User.id.toString())
      .then((response) => {
        user = response.result;
        setDetails(user);
        setAssignedRoles(user.roles);
      })
      .catch((e) => {
        throw new Error(e);
      });
    await UserService.GetRoles()
      .then((response) => {
        let roles = response.result.filter(
          (e) => !user.roles.map((c) => c.id).includes(e.id)
        );
        setUnAssignedRoles(roles);
        // let userPerm: object[] =
        //   user?.user_permissions?.map((e) => e.permission) || [];
        // let unAssignedPerms = permissions.filter(
        //   (e) => !userPerm.map((c) => c.id).includes(e.id)
        // );
        // setPermissions(userPerm);
        // setUnAssignedPermissions(unAssignedPerms);
      })
      .catch((e) => {
        throw new Error(e);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const submitPermission = () => {
    if (selectedUnAssigned.length > 0) {
      let trues = selectedUnAssigned.map((e) => {
        let payload = {
          user_id: User.id,
          permission_id: e,
        };
        UserService.AssignUserToPermission(payload)
          .then((response) => {
            console.clear();
            if (response.success) {
              console.log(response);
              return e;
            } else {
              console.log(response.error);
              // toast.error(response.error.message);
            }
          })
          .catch((error) => {
            console.log(error.message);
            toast.error(error.message);
            throw new Error(error);
          });
      });
      if (
        selectedUnAssigned.length > 0 &&
        trues.length == selectedUnAssigned.length
      ) {
        getData();
        toast.success("تم إسناد الصلاحيات بنجاح");
      }
    } else {
      toast.error("الرجاء اختيار صلاحية واحدة على الأقل");
    }
  };

  const revokePermission = () => {
    if (selected.length > 0) {
      let trues = selected.map((e) => {
        let payload = {
          user_id: User.id,
          permission_id: e,
        };
        UserService.RevokePermission(payload)
          .then((response) => {
            if (response.success) {
              console.log(response);
              return e;
            } else {
            }
          })
          .catch((error) => {
            toast.error(error.message);
            throw new Error(error);
          });
      });
      if (selected.length > 0 && trues.length == selected.length) {
        getData();
        toast.success("تم إلغاء إسناد الصلاحيات بنجاح");
      }
    } else {
      toast.error("الرجاء اختيار صلاحية واحدة على الأقل");
    }
  };
  const handleChange = (event) => {
    const value = event.target.value;
    console.clear();
    console.log(value);
    setSelected(value);
  };

  const handleChangeUnAssign = (event) => {
    const value = event.target.value;
    console.clear();
    console.log(value);
    setSelectedUnAssigned(value);
  };

  return (
    <Grid container md={12} sm={12}>
      <Grid md={12} sm={12} xs={12}>
        <Card style={{ padding: "1em 4em", margin: "5px 0px" }}>
          <Grid container>
            <GridItem item md={9} xs={12} sm={12}>
              <Typography variant="h5" component="div"></Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {translate("تفاصيل المستخدم")}
              </Typography>
            </GridItem>
            <GridItem md={3} xs={12} sm={12}>
              <SuiButton onClick={() => handleBack()} color={"warning"}>
                <ArrowBack />
                {translate("Back To Previous Page")}
              </SuiButton>
            </GridItem>
          </Grid>
        </Card>
        <Card style={{ padding: "3em 3em", margin: "5px 0px" }}>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              submitForm(values, setSubmitting);
              // console.clear();
              // console.log(values);
            }}
          >
            {(formik) => {
              const {
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                handleBlur,
                isSubmitting,
                isValid,
                dirty,
                setFieldValue,
              } = formik;
              return (
                <Form onSubmit={handleSubmit}>
                  <Grid container md={12} xs={12} style={{ margin: "1em 0em" }}>
                    <Grid
                      container
                      md={12}
                      style={{
                        margin: "1em 0em",
                        color: "red",
                        display:
                          errors && // 👈 null and undefined check
                          Object.keys(errors).length === 0 &&
                          Object.getPrototypeOf(errors) === Object.prototype
                            ? "none"
                            : "block",
                      }}
                    ></Grid>
                    <Grid item xs={3} md={3}>
                      <GridItem>
                        <TextField
                          disabled={isEditable}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          type="text"
                          id="email"
                          name="email"
                          value={values.email}
                          onBlur={handleBlur}
                          error={Boolean(touched.email && errors.email)}
                          helperText={touched.email && errors.email}
                          placeholder={translate("الإيميل")}
                          label={translate("الإيميل")}
                          fullWidth
                        />
                      </GridItem>
                    </Grid>
                    <Grid item xs={3} md={3}>
                      <GridItem>
                        <TextField
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          type="password"
                          id="password"
                          name="password"
                          value={values.password}
                          onBlur={handleBlur}
                          error={Boolean(touched.password && errors.password)}
                          helperText={touched.password && errors.password}
                          placeholder={translate("كلمة السر")}
                          label={translate("كلمة السر")}
                          fullWidth
                        />
                      </GridItem>
                    </Grid>
                  </Grid>
                  <Box
                    mt={4}
                    mb={1}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {isSubmitting ? (
                      <SuiButton
                        type="button"
                        disabled={true}
                        variant="gradient"
                        color="info"
                      >
                        {translate("Processing ...")}
                      </SuiButton>
                    ) : (
                      <SuiButton
                        style={{
                          color: "rgb(255, 255, 255)",
                          background: "rgb(23, 193, 232)",
                        }}
                        disabled={!isValid && isSubmitting}
                        type="submit"
                      >
                        {translate("Save")}
                      </SuiButton>
                    )}
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Card>
        {isEditable && (
          <>
            <Grid
              container
              md={12}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid md={5}>
                <Typography>الأدوار المسندة</Typography>
                <Card
                  style={{
                    padding: "1em 3em",
                    margin: "5px 0px",
                    height: "15em",
                  }}
                >
                  <FormGroup>
                    {assignedRoles.map((e) => {
                      return (
                        <FormControlLabel
                          control={
                            <Checkbox
                              value={e.id}
                              checked={selectedAssignedRoles.includes(e.id)}
                              onChange={() => addToUnAssigned(e.id)}
                            />
                          }
                          label={e.name}
                        />
                      );
                    })}
                  </FormGroup>
                </Card>
              </Grid>
              <Grid
                md={1}
                mt={2}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <SuiButton
                  style={{
                    color: "rgb(255, 255, 255)",
                    background: "rgb(23, 193, 232)",
                    height: "3em",
                    marginLeft: "1em",
                  }}
                  onClick={AssignRoles}
                >
                  <ArrowRight style={{ fontSize: "50px" }} />
                </SuiButton>
                <SuiButton
                  style={{
                    color: "rgb(255, 255, 255)",
                    background: "rgb(23, 193, 232)",
                    height: "3em",
                  }}
                  onClick={UnAssignRoles}
                >
                  <ArrowLeft style={{ fontSize: "50px" }} />
                </SuiButton>
              </Grid>
              <Grid md={5}>
                <Typography>الأدوار غير المسندة</Typography>
                <Card
                  style={{
                    padding: "1em 3em",
                    margin: "5px 0px",
                    height: "15em",
                  }}
                >
                  <FormGroup>
                    {unassignedRoles.map((e) => {
                      return (
                        <FormControlLabel
                          control={
                            <Checkbox
                              value={e.id}
                              checked={selectedUnAssignedRoles.includes(e.id)}
                              onChange={() => addToAssigned(e.id)}
                            />
                          }
                          label={e.name}
                        />
                      );
                    })}
                  </FormGroup>
                </Card>
              </Grid>
            </Grid>
            {/**************************************** Permissions ***********************************/}
            <Grid
              container
              md={12}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid md={5}>
                <Typography>الأدوار المسندة</Typography>
                <Card style={{ padding: "3em 3em", margin: "5px 0px" }}></Card>
              </Grid>
              <Grid
                md={1}
                mt={2}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <SuiButton
                  style={{
                    color: "rgb(255, 255, 255)",
                    background: "rgb(23, 193, 232)",
                    height: "3em",
                    marginLeft: "1em",
                  }}
                >
                  <ArrowRight style={{ fontSize: "50px" }} />
                </SuiButton>
                <SuiButton
                  style={{
                    color: "rgb(255, 255, 255)",
                    background: "rgb(23, 193, 232)",
                    height: "3em",
                  }}
                >
                  <ArrowLeft style={{ fontSize: "50px" }} />
                </SuiButton>
              </Grid>
              <Grid md={5}>
                <Typography>الأدوار غير المسندة</Typography>
                <Card style={{ padding: "3em 3em", margin: "5px 0px" }}></Card>
              </Grid>
            </Grid>
          </>
        )}
        <CardActions></CardActions>
      </Grid>
    </Grid>
  );
};

(UserDetails as any).layout = Admin;
(UserDetails as any).auth = false;

export default UserDetails;

// <>
//   <GridItem item md={3} xs={12} sm={6}>
//     <Typography variant="h5" component="div">
//       الأدوار غير المسندة
//     </Typography>
//   </GridItem>
//   <GridItem item md={3} xs={12} sm={6}>
//     <Typography variant="h5" component="div">
//       الأدوار المسندة
//     </Typography>
//   </GridItem>
//   <GridItem item md={3} xs={12} sm={6}>
//     <Typography variant="h5" component="div">
//       الصلاحيات غير المسندة
//     </Typography>
//   </GridItem>
//   <GridItem item md={3} xs={12} sm={6}>
//     <Typography variant="h5" component="div">
//       الصلاحيات المسندة
//     </Typography>
//   </GridItem>
//   <GridItem item md={3} xs={12} sm={12}>
//     <TextField
//       id="outlined-select-currency-native"
//       select
//       label=""
//       defaultValue=""
//       onChange={(e) => changeRole(e.target.value)}
//       helperText="الرجاء اختيار دور لهذا المستخدم"
//     >
//       {unassignedRoles.map((option) => (
//         <option key={option.id} value={option.id}>
//           {option.name}
//         </option>
//       ))}
//     </TextField>
//     <SuiButton
//       style={{
//         color: "rgb(255, 255, 255)",
//         background: "rgb(23, 193, 232)",
//         margin: "0 10px 0 10px",
//       }}
//       onClick={assignRole}
//     >
//       {translate("إسناد")}
//     </SuiButton>
//   </GridItem>
//   <GridItem item md={3} xs={12} sm={12}>
//     <TextField
//       id="outlined-select-currency-native"
//       select
//       label=""
//       defaultValue=""
//       onChange={(e) => changeAssignedRole(e.target.value)}
//       helperText="الرجاء اختيار دور لهذا المستخدم"
//     >
//       {assignedRoles.map((option) => (
//         <option key={option.id} value={option.id}>
//           {option.name}
//         </option>
//       ))}
//     </TextField>
//     <SuiButton
//       style={{
//         color: "rgb(255, 255, 255)",
//         background: "rgb(23, 193, 232)",
//         margin: "0 10px 0 10px",
//       }}
//       onClick={unAssignRole}
//     >
//       {translate("إلغاء الإسناد")}
//     </SuiButton>
//   </GridItem>
//   <GridItem item md={3} xs={12} sm={12}>
//     <Select
//       labelId="mutiple-select-label"
//       multiple
//       value={selectedUnAssigned}
//       onChange={handleChangeUnAssign}
//       renderValue={(selected) => {
//         return `${selected.map((e) => e.name).length} صلاحية مختارة`;
//       }}
//       MenuProps={MenuProps}
//     >
//       {unassignedPermissions.map((option) => (
//         <MenuItem key={option.id} value={option.id}>
//           <ListItemIcon>
//             <Checkbox checked={selectedUnAssigned.indexOf(option.id) > -1} />
//           </ListItemIcon>
//           <ListItemText primary={option.name} />
//         </MenuItem>
//       ))}
//     </Select>
//     <SuiButton
//       style={{
//         color: "rgb(255, 255, 255)",
//         background: "rgb(23, 193, 232)",
//         margin: "0 10px 0 10px",
//       }}
//       onClick={submitPermission}
//     >
//       {translate("إسناد")}
//     </SuiButton>
//   </GridItem>
//   <GridItem item md={3} xs={12} sm={12}>
//     <Select
//       labelId="mutiple-select-label"
//       multiple
//       value={selected}
//       onChange={handleChange}
//       renderValue={(selected) => {
//         return `${selected.map((e) => e.name).length} صلاحية مختارة`;
//       }}
//       MenuProps={MenuProps}
//     >
//       {permissions.map((option) => (
//         <MenuItem key={option.id} value={option.id}>
//           <ListItemIcon>
//             <Checkbox checked={selected.indexOf(option.id) > -1} />
//           </ListItemIcon>
//           <ListItemText primary={option.name} />
//         </MenuItem>
//       ))}
//     </Select>
//     <SuiButton
//       style={{
//         color: "rgb(255, 255, 255)",
//         background: "rgb(23, 193, 232)",
//         margin: "0 10px 0 10px",
//       }}
//       onClick={revokePermission}
//     >
//       {translate("إلغاء الإسناد")}
//     </SuiButton>
//   </GridItem>
// </>;
