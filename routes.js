import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import {
  People,
  School,
  SupervisorAccount,
  Edit,
  EditAttributesSharp,
} from "@material-ui/icons";

const dashboardRoutes = [{
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
    path: "/affairs_officer/initialize-year",
    name: "Specialities",
    rtlName: "تهيئة عام دراسي",
    icon: LibraryBooks,
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
    path: "/admin/courses/courses-list",
    name: "Courses",
    rtlName: "المقرّرات",
    icon: School,
    layout: "/students_affairs",
  },
  {
    path: "/admin/exams/exams-list",
    name: "Exams",
    rtlName: "الواقعات الامتحانية",
    icon: Edit,
    layout: "/students_affairs",
  },
  {
    path: "/admin/observers/observers-list",
    name: "Observers",
    rtlName: "المراقبون",
    icon: SupervisorAccount,
    layout: "/students_affairs",
  },
  {
    path: "/admin/students_courses",
    name: "Observers",
    rtlName: "مقررات الطالب",
    icon: EditAttributesSharp,
    layout: "/students_affairs",
  },
  {
    path: "/admin/marks",
    name: "Observers",
    rtlName: "علامات الطالب",
    icon: EditAttributesSharp,
    layout: "/students_affairs",
  },
  {
    path: '/admin/course_result',
    name: "CourseResult",
    rtlName: "حساب معدّل مقرر",
    icon: EditAttributesSharp,
    layout: "/students_affairs"
  }
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