import { Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";

interface IAssignTeacherProps {
  title: string;
  show: boolean;
  teachers: any;
}
const AssignTeacher: React.FC<IAssignTeacherProps> = ({ show, teachers }) => {
  const [teacher, setTeacher] = useState(null);
  return <></>;
};
