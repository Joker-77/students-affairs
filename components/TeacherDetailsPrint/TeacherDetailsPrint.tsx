import React, { FC, useEffect, useRef } from "react";
import { ITeacherModel } from "../../Models/Teachers/TeacherModel";
import Admin from "../../layouts/Admin";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  //Button
} from "@material-ui/core";
import { useTranslation } from "../../Utility/Translations/useTranslation";
import { sexes } from "../../Static/resources";

interface ITeacherDetailsPrintProps {
  teacher: ITeacherModel;
}
const TeacherDetailsPrint: FC<ITeacherDetailsPrintProps> = ({ teacher }) => {
  //const tableRef = useRef();
  const { translate } = useTranslation();
  /*const generatePDF = useReactToPrint({
        content: () => tableRef.current,
        documentTitle: `${translate("Teacher Details")}: ${teacher?.person?.first_name} ${teacher?.person?.last_name}`,
    });*/

  useEffect(() => {
    console.log("Teacher to print: ");
    console.log(teacher);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              {translate("First name")}
            </TableCell>
            <TableCell>{teacher?.person?.first_name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              {translate("Last name")}
            </TableCell>
            <TableCell>{teacher?.person?.last_name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              {translate("Father name")}
            </TableCell>
            <TableCell>{teacher?.father_name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              {translate("National number")}
            </TableCell>
            <TableCell>{teacher?.person?.national_number}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              {translate("ID Number")}
            </TableCell>
            <TableCell>{teacher?.number}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              {translate("Gender")}
            </TableCell>
            <TableCell>
              {teacher?.person?.sex &&
                (teacher?.person?.sex == "male"
                  ? translate("Male")
                  : translate("Female"))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              {translate("Work Field")}
            </TableCell>
            <TableCell>{`${teacher?.work_field} - ${teacher?.activity}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              {translate("Primary number")}
            </TableCell>
            <TableCell>
              {
                teacher?.person?.phones?.find(
                  (phone) => phone?.type === "primary"
                )?.phone
              }
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              {translate("Secondary number")}
            </TableCell>
            <TableCell>
              {
                teacher?.person?.phones?.find(
                  (phone) => phone?.type === "secondary"
                )?.phone
              }
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              {translate("Office number")}
            </TableCell>
            <TableCell>
              {
                teacher?.person?.phones?.find(
                  (phone) => phone?.type === "office"
                )?.phone
              }
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              {translate("Mobile 1")}
            </TableCell>
            <TableCell>
              {
                teacher?.person?.phones?.find(
                  (phone) => phone?.type === "personal"
                )?.phone
              }
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              {translate("Mobile 2")}
            </TableCell>
            <TableCell>
              {teacher?.person?.phones.length > 0 &&
                teacher?.person?.phones?.find(
                  (phone) => phone?.type === "personal"
                )[1]?.phone}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

(TeacherDetailsPrint as any).auth = true;
(TeacherDetailsPrint as any).layout = Admin;
export default TeacherDetailsPrint;
