export default class Utils {
  static validateField(
    fieldName: string,
    value: any,
    otherValue?: any
  ): string {
    let error = "";
    //let fieldValidationErrors = this.state.formErrors;
    switch (fieldName) {
      case "addAdmin_email":
        if (value === null || value.match(/^ *$/) !== null) {
          error = "Email is required";
        }
        if (value.length > 150) {
          error = "Email must be less than 150 characters";
        }
        if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          error = "Please enter valid Email";
        }
        break;
      case "addAdmin_firstName":
        if (value === null || value.match(/^ *$/) !== null) {
          error = "First Name is required";
        }
        if (value.length > 50) {
          error = "First name must be less than 50 characters";
        }
        break;
      case "addAdmin_lastName":
        if (value === null || value.match(/^ *$/) !== null) {
          error = "Last Name is required";
        }
        if (value.length > 50) {
          error = "Last name must be less than 50 characters";
        }
        break;
      case "addAdmin_phone":
        if (value.length > 50) {
          error = "Phone must be less than 50 characters";
        }
        break;
      case "addAdmin_job":
        if (value.length > 50) {
          error = "Job must be less than 50 characters";
        }
        break;
      case "addAdmin_password":
        if (value === null || value.match(/^ *$/) !== null) {
          error = "Password is required";
        }
        break;
      case "addAdmin_confirmpassword":
        if (value === null || value.match(/^ *$/) !== null) {
          error = "Confirm Password is required";
        }
        if (value != otherValue) {
          error = "Password and confirm password don't match";
        }
        break;
      case "changepassword_newPassword":
        if (value === null || value.match(/^ *$/) !== null) {
          error = "Password is required";
        }
        if (!value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/i)) {
          error =
            "Use at least 6 characters Include upper letter, small letter and number";
        }
        break;

      case "changepassword_confirmPassword":
        if (value === null || value.match(/^ *$/) !== null) {
          error = "Confirm Password is required";
        }
        if (value != otherValue) {
          error = "Password and confirm password don't match";
        }
        break;
      case "title":
        if (value === null || value.match(/^ *$/) !== null) {
          error = "Title is required";
        }
        if (value.length > 50) {
          error = "Title must be less than 50 characters";
        }
        break;
      case "body":
        if (value === null || value.match(/^ *$/) !== null) {
          error = "Body is required";
        }
        break;
      case "displayOrder":
        if (value % 1 != 0) {
          error = "Display order must be a positive integer";
        }
        break;
      default:
        error = "";
        break;
    }
    return error;
  }
}
