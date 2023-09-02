import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
// Authentication layout components
import CoverLayout from "../../../components/CoverLayout";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Switch } from "@material-ui/core";
import SuiButton from "../../../components/SuiButton";
import SuiInput from "../../../components/SuiInput";
import "../../../assets/css/main.css";
import { ISignInForm } from "../../../Models/SignInForm";
import { getProviders, getSession, signIn, useSession } from "next-auth/react";
import {
  selectSessionKey,
  useAppDispatch,
  useAppSelector,
  setSessionKey,
  updateProfile,
  selectUserProfile,
} from "../../../redux";
import LoginService from "../../../Services/LoginService";
import { ApiResponse } from "../../../Models/ApiResponse/ApiResponse";
import { YearsModel } from "../../../Models/ApiResponse/YearsModel";
import { useTranslation } from "../../../Utility/Translations/useTranslation";
import { toast } from "react-toastify";
// Images
const bg7 = require("./../../../assets/img/curved-images/HIAST.jpg");

function SignIn(props) {
  const { translate } = useTranslation();
  const { locale } = useRouter();

  const dispatch = useAppDispatch();

  const [rememberMe, setRememberMe] = useState(true);
  const [_currentSessionKey, setCurrentSessionKey] = useState<string>("");

  const sessionKey = useAppSelector(selectSessionKey);
  const userProfile = useAppSelector(selectUserProfile);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      let profile = JSON.parse(localStorage.getItem("logged_in_profile"));
      let key = localStorage.getItem("sa_access_token");
      if (!!key && key !== "undefined") {
        // dispatch(setSessionKey(key));
        router.push("/students_affairs/dashboard");
      }
    }
  }, []);

  const [isLoading, setLoading] = useState(false);
  const [years, setYears] = useState<YearsModel[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>("");
  const initialValues: ISignInForm = {
    username: "",
    // email: "",
    password: "",
    rememberMe: false,
  };
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const router = useRouter();

  async function fetchApi() {
    let data = (await LoginService.GetYears()) as ApiResponse;
    return data;
  }

  const handleChangeYear = (event) => {
    setSelectedYear(event.target.value as string);
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  const SignInSchema = Yup.object().shape({
    username: Yup.string().required(translate("{0} is required", "Username")),
    // .required("Email is required"),
    // email: Yup.string()
    //   .email("Must be a valid email")
    //   .required("Email is required"),
    password: Yup.string()
      .required(translate("{0} is required", "Password"))
      .min(
        4,
        translate(
          "Password is too short - should be {0} chars minimum",
          "4",
          false
        )
      ),
  });
  const submitForm = async (values: any, setSubmitting) => {
    LoginService.Login({
      email: values.username,
      password: values.password,
    })
      .then((response) => {
        if (response.success) {
          localStorage.setItem("sa_access_token", response.result.token);
          localStorage.setItem(
            "logged_in_profile",
            JSON.stringify(response.result)
          );
          dispatch(updateProfile(response.result));
          dispatch(setSessionKey(response.result.token));
          router.push("/students_affairs/dashboard");
        }
        else {
          toast.error(response);
          setSubmitting(false);
        }
      })
      .catch((e) => {
        throw new Error(e)
      });
  };
  return (
    !sessionKey && (
      <CoverLayout
        title={translate("Welcome")}
        description={translate("Enter your credentials to sign in")}
        image={bg7}
      >
        <Box>
          <Formik
            initialValues={initialValues}
            validationSchema={SignInSchema}
            onSubmit={(values, { setSubmitting }) => {
              submitForm(values, setSubmitting);
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
              } = formik;
              return (
                <Form>
                  {!isLoading && (
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                          Year
                        </Typography>
                      </Box>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedYear}
                        label="Year"
                        onChange={handleChangeYear}
                      >
                        {years.map((item, ind) => {
                          return (
                            <MenuItem value={item.id}>{item.year}</MenuItem>
                          );
                        })}
                      </Select>
                    </Box>
                  )}
                  <Box mb={2}>
                    <Box mb={1} ml={0.5}>
                      <Typography component="label" variant="caption">
                        {translate("Username")}
                      </Typography>
                    </Box>
                    <TextField
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                      type="text"
                      id="username"
                      name="username"
                      value={values.username}
                      onBlur={handleBlur}
                      error={Boolean(touched.username && errors.username)}
                      helperText={touched.username && errors.username}
                      placeholder={translate("Username")}
                      fullWidth
                    />
                  </Box>
                  {/* <Box mb={1} ml={0.5}>
                    <Typography component="label" variant="caption">
                      Username
                    </Typography>
                  </Box>
                  <TextField
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                    placeholder="example@hiast.edu.sy"
                    fullWidth
                  />
                </Box> */}
                  <Box mb={2}>
                    <Box mb={1} ml={0.5}>
                      <Typography component="label" variant="caption">
                        {translate("Password")}
                      </Typography>
                    </Box>
                    <TextField
                      id="password"
                      name="password"
                      type="password"
                      variant="outlined"
                      size="small"
                      placeholder={translate("Password")}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.password && touched.password)}
                      helperText={touched.password && errors.password}
                      fullWidth
                    />
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Switch />
                    <Typography
                      variant="button"
                      style={{
                        fontWeight: "regular",
                        cursor: "pointer",
                        userSelect: "none",
                      }}
                    // onClick={handleSetRememberMe}
                    // sx={{ cursor: "pointer", userSelect: "none" }}
                    >
                      &nbsp;&nbsp;{translate("Remember me")}
                    </Typography>
                  </Box>
                  <Box mt={4} mb={1}>
                    {isSubmitting ? (
                      <SuiButton
                        disabled={true}
                        variant="gradient"
                        color="info"
                        fullWidth
                      >
                        {translate("Signing in...")}
                      </SuiButton>
                    ) : (
                        <SuiButton
                          disabled={!(dirty && isValid)}
                          type="submit"
                          variant="gradient"
                          color="info"
                          fullWidth
                        >
                          {translate("Sign in")}
                        </SuiButton>
                      )}
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </CoverLayout>
    )
  );
}
export default SignIn;
