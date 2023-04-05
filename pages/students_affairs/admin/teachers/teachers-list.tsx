import React, { FC } from "react";
import Admin from "../../../../layouts/Admin";

interface ITeachersListProps {}
const TeachersList: FC<ITeachersListProps> = () => {
  return <></>;
};

(TeachersList as any).auth = true;
(TeachersList as any).layout = Admin;
export default TeachersList;
