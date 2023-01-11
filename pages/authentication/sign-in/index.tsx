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
import { signIn, useSession } from "next-auth/react";
import {
  selectSessionKey,
  useAppDispatch,
  useAppSelector,
  setSessionKey,
  selectDirection,
} from "../../../redux";
import LoginService from "../../../Services/LoginService";
import { ApiResponse } from "../../../Models/ApiResponse/ApiResponse";
import { YearsModel } from "../../../Models/ApiResponse/YearsModel";
// Images
const bg7 = require("./../../../assets/img/curved-images/HIAST.jpg");

function SignIn() {
  const dispatch = useAppDispatch();
  const sessionKey = useAppSelector(selectSessionKey);
  const [rememberMe, setRememberMe] = useState(true);
  const [_currentSessionKey, setCurrentSessionKey] = useState<string>("");
  const { data: session } = useSession();
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
    console.log("years", data);
    return data;
  }
  const handleChangeYear = (event) => {
    setSelectedYear(event.target.value as string);
  };
  useEffect(() => {
    setLoading(true);
    // const applyFetchApi = async () => {
    //   const data = (await fetchApi()) as ApiResponse;
    //   if (data.success) {
    //     setYears(data.result);

    //     if (data.result != null && Array.isArray(data.result)) {
    //       data.result.length > 0
    //         ? setSelectedYear(data.result[0].id.toString())
    //         : setSelectedYear("");
    //     }
    //   } else {
    //     console.error("Api Error:", data.error);
    //   }
    //   setLoading(false);
    // };
    // applyFetchApi().catch((ex) => {
    //   console.error(ex);
    // });
  }, []);

  const SignInSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    // .required("Email is required"),
    // email: Yup.string()
    //   .email("Must be a valid email")
    //   .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars minimum"),
  });
  const submitForm = async (values: any, setSubmitting) => {
    console.log("values", values);
    const resp = await signIn("Hiast", {
      redirect: false,
      callbackUrl: `${window.location.origin}`,
      username: values.username,
      password: values.password,
    });
    console.log(resp);
    // dispatch(setSessionKey(resp.token));
    router.push(process.env.SITE_URL + "/student_affairs/dashboard");
    setSubmitting(false);
  };
  return (
    <CoverLayout
      title="Welcome"
      description="Enter your credentials to sign in"
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
                        return <MenuItem value={item.id}>{item.year}</MenuItem>;
                      })}
                    </Select>
                  </Box>
                )}
                <Box mb={2}>
                  <Box mb={1} ml={0.5}>
                    <Typography component="label" variant="caption">
                      Username
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
                    placeholder="Username"
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
                      Password
                    </Typography>
                  </Box>
                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    variant="outlined"
                    size="small"
                    placeholder="password"
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
                    &nbsp;&nbsp;Remember me
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
                      signing in...
                    </SuiButton>
                  ) : (
                    <SuiButton
                      disabled={!(dirty && isValid)}
                      type="submit"
                      variant="gradient"
                      color="info"
                      fullWidth
                    >
                      sign in
                    </SuiButton>
                  )}
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </CoverLayout>
  );
}

export default SignIn;
