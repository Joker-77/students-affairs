import React, { FC, useEffect, useMemo, useState } from "react";
import {
  IUserModel,
  IRoleModel
} from "../../../../Models/Users/UserModel";
import Admin from "../../../../layouts/Admin";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import * as yup from "yup";
import { Field, FieldArray, Form, Formik, getIn, ErrorMessage } from "formik";
import SuiButton from "../../../../components/SuiButton";
import { toast } from "react-toastify";
import UserService from "../../../../Services/UserService";
import { useRouter } from "next/router";
import { MenuProps, useStyles } from "./utils";
import {
  Add,
  ArrowBack,
  AttachFile,
  CloudDownload,
  FontDownload,
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
  isEditable
}) => {
  const [roles, setRoles] = React.useState<any>([]);
  const [permissions, setPermissions] = React.useState<any>([]);
  const [role, setRole] = React.useState<number>(0);
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    console.log(User);
  }, [])
  const { translate } = useTranslation();
  const [User, setDetails] = useState<IUserModel>(details);
  let UserSchema = yup.object({
    email: yup
      .string(translate("الإيميل"))
      .required(translate("Field is required")),
    password: yup
      .string(translate("كلمة السر"))
      .required(translate("Field is required")),
  })

  let initialValues = isCreate
    ? {
      email: User ?.email,
    }
    : {
      id: User.id,
      email: User.email
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
    }
    else {
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

  useEffect(() => {
    UserService.GetRoles()
      .then(response => {
        setRoles(response.result);
      }).catch(e => {
        throw new Error(e)
      })
    UserService.GetPermissions().then(response => {
      setPermissions(response.result);
    }).catch(e => {
      throw new Error(e)
    })
  }, [])
  const submitRole = () => {
    if (!!role) {
      let payload = {
        user_id: User.id,
        role_id: role
      }
      UserService.AssignUserToRole(payload)
        .then((response) => {
          if (response.success) {
            toast.success("تم إسناد الدور بنجاح");
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
    else {
      toast.error("الرجاء اختيار دور");
    }

  }
  const changeRole = (value) => {
    setRole(value);
    UserService.GetPermissions(value)
      .then(response => {
        setPermissions(response.result);
      }).catch(e => {
        throw new Error(e)
      })
  }
  const submitPermission = () => {
    let trues: boolean[] = []
    if (selected.length > 0) {
      selected.forEach(e => {
        let payload = {
          user_id: User.id,
          permission_id: e
        }
        UserService.AssignUserToPermission(payload)
          .then((response) => {
            if (response.success) {
              trues.push(true);
            } else {
              console.log(response.error);
              trues.push(false);
              // toast.error(response.error.message);
            }
          })
          .catch((error) => {
            console.log(error.message);
            toast.error(error.message);
            throw new Error(error);
          });
      })
      if (selected.length > 0 && trues.map(e => true).length == selected.length) {
        toast.success("تم إسناد الصلاحيات بنجاح");
      }
    }
    else {
      toast.error("الرجاء اختيار صلاحية واحدة على الأقل");
    }
  }
  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === permissions.length ? [] : permissions.map(e => e.id));
      return;
    }
    setSelected(value);
  };

  return (
    <Grid container md={12} sm={12}>
      <Grid md={12} sm={12} xs={12}>
        <Card style={{ padding: "1em 4em", margin: "5px 0px" }}>
          <Grid container>
            <GridItem item md={9} xs={12} sm={12}>
              <Typography variant="h5" component="div">
              </Typography>
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
                    >
                    </Grid>
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
                    {
                      isSubmitting ? (
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
                        )
                    }
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Card>
        {
          isEditable && <Card style={{ padding: "3em 3em", margin: "5px 0px" }}>
            <Grid container md={12}>
              <GridItem item md={6} xs={12} sm={6}>
                <Typography variant="h5" component="div">
                  الأدوار
              </Typography>
              </GridItem>
              <GridItem item md={6} xs={12} sm={6}>
                <Typography variant="h5" component="div">
                  الصلاحيات
              </Typography>
              </GridItem>
              <GridItem item md={6} xs={12} sm={12}>
                <TextField
                  id="outlined-select-currency-native"
                  select
                  label=""
                  defaultValue=""
                  onChange={e => changeRole(e.target.value)}
                  helperText="الرجاء اختيار دور لهذا المستخدم"
                >
                  {roles.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </TextField>
                <SuiButton
                  style={{
                    color: "rgb(255, 255, 255)",
                    background: "rgb(23, 193, 232)",
                    margin: "0 10px 0 10px"
                  }}
                  onClick={submitRole}
                >
                  {translate("Save")}
                </SuiButton>
              </GridItem>
              <GridItem item md={6} xs={12} sm={12}>
                <Select
                  labelId="mutiple-select-label"
                  multiple
                  value={selected}
                  onChange={handleChange}
                  renderValue={(selected) => {
                    return `${selected.map(e => e.name).length} صلاحية مختارة`
                  }}
                  MenuProps={MenuProps}
                >
                  {/* <MenuItem
                    value="all"
                    classes={{
                      root: isAllSelected ? classes.selectedAll : ""
                    }}
                  >
                    <ListItemIcon>
                      <Checkbox
                        classes={{ indeterminate: classes.indeterminateColor }}
                        checked={isAllSelected}
                        indeterminate={
                          selected.length > 0 && selected.length < permissions.length
                        }
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.selectAllText }}
                      primary="Select All"
                    />
                  </MenuItem> */}
                  {permissions.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      <ListItemIcon>
                        <Checkbox checked={selected.indexOf(option.id) > -1} />
                      </ListItemIcon>
                      <ListItemText primary={option.name} />
                    </MenuItem>
                  ))}
                </Select>
                {/* <TextField
                  id="outlined-select-currency-native"
                  select
                  label=""
                  defaultValue=""
                  onChange={e => setPermission(e.target.value)}
                  helperText="الرجاء اختيار صلاحية لهذا المستخدم"
                >
                  {permissions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </TextField>
                <SuiButton
                  style={{
                    color: "rgb(255, 255, 255)",
                    background: "rgb(23, 193, 232)",
                    margin: "0 10px 0 10px"
                  }}
                  onClick={submitPermission}
                >
                  {translate("Save")}
                </SuiButton> */}
                <SuiButton
                  style={{
                    color: "rgb(255, 255, 255)",
                    background: "rgb(23, 193, 232)",
                    margin: "0 10px 0 10px"
                  }}
                  onClick={submitPermission}
                >
                  {translate("Save")}
                </SuiButton>
              </GridItem>
            </Grid>
          </Card>
        }
        <CardActions></CardActions>
      </Grid>
    </Grid>
  );
};

(UserDetails as any).layout = Admin;
(UserDetails as any).auth = false;

export default UserDetails;
