import React from "react";
import {
  TextField,
  Box,
  Typography,
  Select,
  MenuItem,
  IconButton,
  Grid,
} from "@material-ui/core";
import {FieldArray} from "formik";
import SuiButton from "../SuiButton";
import {useTranslation} from "../../Utility/Translations/useTranslation";

interface IPersonInfoPartialProps {
  title: string;
  formik: any;
  disabled: boolean;
  isGray: boolean;
  prefix: string;
}
const PersonInfoPartialForm: React.FC<IPersonInfoPartialProps> = ({
  title,
  formik,
  disabled,
  isGray,
  prefix,
}) => {
  const {translate} = useTranslation();
  const style = {
    bgcolor: isGray ? "#d3d3d326" : "background.paper",
    padding: "15px",
    boxShadow: 24,
    borderRadius: "20px",
    marginVertically: "15px"
  };
  const sexs = [
    {
      id: "male",
      value: translate("Male"),
    },
    {
      id: "female",
      value: translate("Female"),
    },
  ];

  const phoneTypes = [
    {
      id: "private",
      value: translate("Private"),
    },
    {
      id: "family",
      value: translate("Family"),
    },
  ];

  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
  } = formik;
  return (
    <Box sx={style} mb={2}>
      {!!title && <Box mb={2}>
        <Typography component="label" variant="caption">
          <b>{title}</b>
        </Typography>
      </Box>}

      <Grid container spacing={2}>
        <Grid item md={3}>
          <Box mb={2}>
            <Box mb={1} ml={0.5}>
              <Typography component="label" variant="caption">
                {translate("First name")}
              </Typography>
            </Box>
            <TextField
                disabled={disabled}
                onChange={handleChange}
                variant="outlined"
                size="small"
                type="text"
                id={`${prefix}.first_name`}
                name={`${prefix}.first_name`}
                value={values[prefix]?.first_name}
                onBlur={handleBlur}
                error={Boolean(touched[prefix]?.first_name && errors[prefix]?.first_name)}
                helperText={touched[prefix]?.first_name && errors[prefix]?.first_name}
                placeholder={translate("First name")}
                fullWidth
            />
          </Box>
        </Grid>

        <Grid item md={3}>
          <Box mb={2}>
            <Box mb={1} ml={0.5}>
              <Typography component="label" variant="caption">
                {translate("Last name")}
              </Typography>
            </Box>
            <TextField
                disabled={disabled}
                onChange={handleChange}
                variant="outlined"
                size="small"
                type="text"
                id={`${prefix}.last_name`}
                name={`${prefix}.last_name`}
                value={values[prefix]?.last_name}
                onBlur={handleBlur}
                error={Boolean(touched[prefix]?.last_name && errors[prefix]?.last_name)}
                helperText={touched[prefix]?.last_name && errors[prefix]?.last_name}
                placeholder={translate("Last name")}
                fullWidth
            />
          </Box>
        </Grid>

        <Grid item md={3}>
          <Box mb={2}>
            <Box mb={1} ml={0.5}>
              <Typography component="label" variant="caption">
                {translate("Gender")}
              </Typography>
            </Box>

            <TextField
                disabled={disabled}
                variant="outlined"
                size="small"
                type="select"
                id={`${prefix}.sex`}
                name={`${prefix}.sex`}
                select={true}
                value={values[prefix]?.sex}
                onChange={handleChange(`${prefix}.sex`)}
                onBlur={handleBlur}
                placeholder={translate("Gender")}
                fullWidth
            >
              {sexs.map((sex) => (
                  <MenuItem key={sex.id} value={sex.id}>
                    {sex.value}
                  </MenuItem>
              ))}
            </TextField>
          </Box>
        </Grid>

        <Grid item md={3}>
          <Box mb={2}>
            <Box mb={1} ml={0.5}>
              <Typography component="label" variant="caption">
                {translate("Nationality")}
              </Typography>
            </Box>
            <TextField
                disabled={disabled}
                onChange={handleChange}
                variant="outlined"
                size="small"
                type="text"
                id={`${prefix}.nationality`}
                name={`${prefix}.nationality`}
                value={values[prefix]?.nationality}
                onBlur={handleBlur}
                error={Boolean(
                    touched[prefix]?.nationality && errors[prefix]?.nationality
                )}
                helperText={touched[prefix]?.nationality && errors[prefix]?.nationality}
                placeholder={translate("Nationality")}
                fullWidth
            />
          </Box>
        </Grid>

        <Grid item md={3}>
          <Box mb={2}>
            <Box mb={1} ml={0.5}>
              <Typography component="label" variant="caption">
                {translate("National number")}
              </Typography>
            </Box>
            <TextField
                disabled={disabled}
                onChange={handleChange}
                variant="outlined"
                size="small"
                type="text"
                id={`${prefix}.national_number`}
                name={`${prefix}.national_number`}
                value={values[prefix]?.national_number}
                onBlur={handleBlur}
                error={Boolean(touched[prefix]?.national_number && errors[prefix]?.national_number)}
                helperText={touched[prefix]?.national_number && errors[prefix]?.national_number}
                placeholder={translate("National number")}
                fullWidth
            />
          </Box>
        </Grid>

        <Grid item md={3}>
          <Box mb={2}>
            <Box mb={1} ml={0.5}>
              <Typography component="label" variant="caption">
                {translate("Passport First Name")}
              </Typography>
            </Box>
            <TextField
                disabled={disabled}
                onChange={handleChange}
                variant="outlined"
                size="small"
                type="text"
                id={`${prefix}.passport_first_name`}
                name={`${prefix}.passport_first_name`}
                value={values[prefix]?.passport_first_name}
                onBlur={handleBlur}
                error={Boolean(
                    touched[prefix]?.passport_first_name && errors[prefix]?.passport_first_name
                )}
                helperText={
                  touched[prefix]?.passport_first_name && errors[prefix]?.passport_first_name
                }
                placeholder={translate("Passport First Name")}
                fullWidth
            />
          </Box>
        </Grid>

        <Grid item md={3}>
          <Box mb={2}>
            <Box mb={1} ml={0.5}>
              <Typography component="label" variant="caption">
                {translate("Passport Last Name")}
              </Typography>
            </Box>
            <TextField
                disabled={disabled}
                onChange={handleChange}
                variant="outlined"
                size="small"
                type="text"
                id={`${prefix}.passport_last_name`}
                name={`${prefix}.passport_last_name`}
                value={values[prefix]?.passport_last_name}
                onBlur={handleBlur}
                error={Boolean(
                    touched[prefix]?.passport_last_name && errors[prefix]?.passport_last_name
                )}
                helperText={
                  touched[prefix]?.passport_last_name && errors[prefix]?.passport_last_name
                }
                placeholder={translate("Passport Last Name")}
                fullWidth
            />
          </Box>
        </Grid>

        <Grid item md={3}>
          <Box mb={2}>
            <Box mb={1} ml={0.5}>
              <Typography component="label" variant="caption">
                {translate("Passport Number")}
              </Typography>
            </Box>
            <TextField
                disabled={disabled}
                onChange={handleChange}
                variant="outlined"
                size="small"
                type="text"
                id={`${prefix}.passport_number`}
                name={`${prefix}.passport_number`}
                value={values[prefix]?.passport_number}
                onBlur={handleBlur}
                error={Boolean(
                    touched[prefix]?.passport_number && errors[prefix]?.passport_number
                )}
                helperText={
                  touched[prefix]?.passport_number && errors[prefix]?.passport_number
                }
                placeholder={translate("Passport Number")}
                fullWidth
            />
          </Box>
        </Grid>

      </Grid>

      <Box mb={2}>
        <Box mb={1} ml={0.5}>
          <Typography component="label" variant="caption">
            {translate("Phones")}
          </Typography>
        </Box>
        <FieldArray
            name={`${prefix}.phones`}
            render={arrayHelpers => (
                <div>
                  {values[prefix]?.phones && values[prefix]?.phones.length > 0 ? (
                      values[prefix]?.phones.map((phone, index) => (
                          <div key={index}>

                            <Grid container spacing={2}>
                              <Grid item xs={4}>
                                <TextField
                                    disabled={disabled}
                                    onChange={handleChange(`${prefix}.phones.${index}.phone`)}
                                    variant="outlined"
                                    size="small"
                                    type="text"
                                    id={`${prefix}.phones.${index}.phone`}
                                    name={`${prefix}.phones.${index}.phone`}
                                    value={phone.phone}
                                    onBlur={handleBlur}
                                    error={Boolean(touched[prefix]?.phones && errors[prefix]?.phones)}
                                    helperText={touched[prefix]?.phones && errors[prefix]?.phones}
                                    placeholder={translate("Phone")}
                                    //fullWidth
                                />
                              </Grid>

                              <Grid item xs={4}>
                                <TextField
                                    disabled={disabled}
                                    variant="outlined"
                                    size="small"
                                    type="select"
                                    id={`${prefix}.phones.${index}.type`}
                                    name={`${prefix}.phones.${index}.type`}
                                    select={true}
                                    // value={values[prefix]?.sex}
                                    onChange={handleChange(`${prefix}.phones.${index}.type`)}
                                    onBlur={handleBlur}
                                    placeholder="Phone type"
                                    fullWidth
                                >
                                  {phoneTypes.map((type) => (
                                      <MenuItem key={type.id} value={type.id}>
                                        {type.value}
                                      </MenuItem>
                                  ))}
                                </TextField>
                              </Grid>

                              {!disabled && <Grid item xs={4}>
                                <SuiButton
                                    style={{ margin: 5 }}
                                    color="error"
                                    onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                >
                                  -
                                </SuiButton>

                                <SuiButton
                                    style={{ margin: 5 }}
                                    color="success"
                                    onClick={() => arrayHelpers.insert(index+1, {phone: '', type: ''})} // insert an empty string at a position
                                >
                                  +
                                </SuiButton>
                              </Grid>}
                            </Grid>

                          </div>
                      ))
                  ) : (
                      <React.Fragment>
                      {!disabled && <SuiButton
                          variant="gradient"
                          color="success"
                          onClick={() => arrayHelpers.push('')}>
                        {/* show this when user has removed all phones from the list */}
                        {translate("Add a phone")}
                      </SuiButton>
                        }
                      </React.Fragment>
                  )}
                </div>
            )}
        />
      </Box>

    </Box>
  );
};

export default PersonInfoPartialForm;
