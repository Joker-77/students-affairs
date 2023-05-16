const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const webpack = require("webpack");
const path = require("path");
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");
const withNextEnv = nextEnv();
module.exports = withPlugins([[withSass], [withImages], [withCSS]], {
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "ar",
    localeDetection: false,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  env: {
    SITE_URL: "http://teststudent.hiast.edu.sy:3000",
    // SITE_URL: "http://localhost:3000",
    SECRET: "LlKq6ZtYbr+hTC021nAnOj2/h2HwMfsFo4hrfCx6gts=",
    // BASE_URL: "http://172.25.1.71/student_affairs_backend/student_affairs/public",
    // BASE_URL: "http://student.hiast.edu.sy/backend/public",
    BASE_URL: "http://teststudent.hiast.edu.sy/backend/public",
    LIST_ROLES_URL: "/roles",
    ADD_ROLE_URL: "/roles/add",
    DELETE_ROLE_URL: "/roles/delete",
    ASSIGN_USER_TO_ROLE_URL: "/user/assign-role",
    ADD_PERMISSION_URLS: "/permissions/add",
    LIST_PERMISSIONS_URL: "/permissions",
    ASSIGN_PERMISSION_TO_ROLE_URLS: "/role/assign-permission",
    LIST_PERSON_URL: "/people",
    ADD_PERSON_URL: "/person/add",
    EDIT_PERSON: "/person/edit",
    DETAILS_PERSON_URL: "/person/details",
    ADD_PHONE_URL: "/person/add-phone",
    EDIT_PHONE_URL: "/person/edit-phone",
    DELETE_PHONE_URL: "/person/delete-phone",
    SEARCH_CANDIDATE_URL: "/ministry/candidate/get",
    SEARCH_ADD_CANDIDATE_URL: "/ministry/candidate/add",
    ADD_CANDIDATE_URL: "/candidate/add",
    EDIT_CANDIDATE_URL: "/candidate/edit",
    DETAILS_CANDIDATE_URL: "/candidate/details",
    LIST_CANDIDATE_URL: "/candidate",
    ADD_CERTIFICATE_URL: "/certificate/add",
    EDIT_CERTIFICATE_URL: "/certificate/edit",
    DETAILS_CERTIFICATE_URL: "/certificate/details",
    LIST_CERTIFICATE_URL: "/certificate/list",
    ADD_SPECIALITY_URL: "/speciality/add",
    EDIT_SPECIALITY_URL: "/speciality/edit",
    DETAILS_SPECIALITY_URL: "/speciality/details",
    LIST_SPECIALITY_URL: "/speciality",
    ADD_REGISTERATION_URL: "/registeration/add",
    LIST_REGISTERATION_URL: "/registeration/add",
    EDIT_REGISTERATION_URL: "/registeration/edit",
    DETAILS_REGISTERATION_URL: "/registeration/details",
    REG_DESIRES_LIST_URL: "/registeration/desire/list",
    ADD_REG_DESIRE_URL: "/registeration/desire/add",
    EDIT_REG_DESIRE_URL: "/registeration/desire/edit",
    ADD_DESIRES_URL: "/desire/add",
    EDIT_DESIRES_URL: "/desire/edit",
    LIST_DESIRES_URL: "/desire/list",
    ADD_ATTACHMENT_URL: "/attachement/add",
    DELETE_ATTACHMENT_URL: "/attachement/delete",

    // Courses
    LIST_COURSE_URL: "/course",
    EDIT_COURSE_URL: "/course/edit",
    CREATE_COURSE_URL: "/course/add",
    ADD_DESC_TO_COURSE: "/course/add/description",
    // Teachers
    LIST_TEACHER_URL: "/teacher",

    // Login

    LOGIN_URL: "/login",
  },
});
