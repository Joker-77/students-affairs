import React, { useEffect } from "react";
import Admin from "../../../../layouts/Admin";
import CandidatesList from "./candidates-list";
import {useTranslation} from "../../../../Utility/Translations/useTranslation";
import colors from "../../../../assets/theme/base/colors";
import SpecialityService from "../../../../Services/SpecialityService";
import { acceptStatus, registerationClasses } from "../../../../Static/resources";

interface IRegistrationListProps {}
const RegistrationList: React.FC<IRegistrationListProps> = ({}) => {
  const {translate} = useTranslation();

  const registerationClassesObj = registerationClasses(translate).reduce((sobj, item, index) => {return {...sobj, [item]: item};}, {})
  const acceptStatusObj = acceptStatus(translate).reduce((sobj, item, index) => {return {...sobj, [item]: item};}, {})

  const [specialities, setSpecialities] = React.useState({});

  useEffect(() => {
    SpecialityService.GetAll()
        .then((res) => {
          console.log("Speciality", res);
          setSpecialities(res.result.reduce((sobj, item) => {return {...sobj, [item.id]: item.ar_name};}, {}));
        })
        .catch((error) => {
          console.error("error", error);
        });
  }, []);

  console.log('danial data', registerationClasses(translate).reduce((sobj, item) => {return {...sobj, [item]: item};}, {}));

  let columns = [
    {
      title: translate("Id"),
      field: "id",
      hidden: true,
      filtering: false,
    },
    {
      title: translate("Name"),
      field: "full_name",
      cellStyle: {minWidth: 100},
      filtering: false,
    },
    {
      title: translate("Registeration number"),
      field: "registeration_number",
      filtering: false,
      type: "string",
    },
    {
      title: translate("Acceptance Status"),
      field: "registerations[0].status",
      cellStyle: (data) => data === 'مقبول' ? {color: colors.success.main, fontWeight: 'bold'} : {},
      emptyValue: "-",
      lookup: acceptStatusObj,
    },
    {
      title: translate("Acceptance Class"),
      field: "registerations[0].class",
      lookup: registerationClassesObj,
    },
    {
      title: translate("Speciality"),
      field: "registerations[0].speciality_id",
      lookup: specialities,
    },
    {
      title: translate("Math"),
      field: "registerations[0].math",
      filtering: false,
    },
    {
      title: translate("Physics"),
      field: "registerations[0].physics",
      filtering: false,
    },
    // {
    //   title: translate("Mark from 3400"),
    //   field: "registerations[0].mark_3400",
    //   filtering: false,
    // },
  ];

  return <CandidatesList customColumns={columns} title={translate('Attendees List')} forRegistrations/>;
};
(RegistrationList as any).auth = true;
(RegistrationList as any).layout = Admin;
export default RegistrationList;
