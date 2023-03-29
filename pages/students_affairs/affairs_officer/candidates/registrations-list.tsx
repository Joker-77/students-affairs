import React from "react";
import Admin from "../../../../layouts/Admin";
import CandidatesList from "./candidates-list";
import {useTranslation} from "../../../../Utility/Translations/useTranslation";
import colors from "../../../../assets/theme/base/colors";

interface IRegistrationListProps {}
const RegistrationList: React.FC<IRegistrationListProps> = ({}) => {
  const {translate} = useTranslation();

  let columns = [
    {
      title: translate("Id"),
      field: "id",
      hidden: true,
    },
    {
      title: translate("Name"),
      field: "full_name",
      cellStyle: {minWidth: 100},
    },
    {
      title: translate("Registeration number"),
      field: "registeration_number",
    },
    {
      title: translate("Math"),
      field: "registerations[0].math",
    },
    {
      title: translate("Physics"),
      field: "registerations[0].physics",
    },
    {
      title: translate("Mark from 3400"),
      field: "registerations[0].mark_3400",
    },
    {
      title: translate("Acceptance Status"),
      field: "registerations[0].status",
      cellStyle: (data) => data === 'مقبول' ? {color: colors.success.main, fontWeight: 'bold'} : {},
      emptyValue: "-"
    },
  ];

  return <CandidatesList customColumns={columns} title={translate('Attendees List')} forRegistrations/>;
};
(RegistrationList as any).auth = true;
(RegistrationList as any).layout = Admin;
export default RegistrationList;
