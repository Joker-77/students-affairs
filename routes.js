import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Books from "@material-ui/icons/FileCopy";
import School from "@material-ui/icons/School";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
import {People, School, SupervisorAccount} from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة التحكم",
    icon: Dashboard,
    layout: `/students_affairs`,
  },
  {
    path: "/affairs_officer/candidates/candidates-list",
    name: "Candidates",
    rtlName: "المرشحون",
    icon: People,
    layout: "/students_affairs",
  },
  {
    path: "/affairs_officer/candidates/registrations-list",
    name: "Attendees",
    rtlName: "المتقدمون للمفاضلة",
    icon: Person,
    layout: "/students_affairs",
  },
  {
    path: "/admin/specialities/specialities-list",
    name: "Specialities",
    rtlName: "الاختصاصات",
    icon: LibraryBooks,
    layout: "/students_affairs",
  },
  {
    path: "/admin/teachers/teachers-list",
    name: "Teachers",
    rtlName: "المدرسون",
    icon: School,
    layout: "/students_affairs",
  },
  {
    path: "/admin/observers/observers-list",
    name: "Observers",
    rtlName: "المراقبون",
    icon: SupervisorAccount,
    layout: "/students_affairs",
  },
  // {
  //   path: "/table-list",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",
  //   layout: "/students_affairs",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: LibraryBooks,
  //   layout: "/students_affairs",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,
  //   layout: "/students_affairs",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: LocationOn,
  //   layout: "/students_affairs",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   layout: "/students_affairs",
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   layout: "/rtl",
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   layout: "/students_affairs",
  // },
];

export default dashboardRoutes;
