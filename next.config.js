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
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack(config, options) {

    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    });

    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  env: {
    SECRET: "LlKq6ZtYbr+hTC021nAnOj2/h2HwMfsFo4hrfCx6gts=",
    // BASE_URL: "http://172.25.1.71/student_affairs_backend/student_affairs/public/api",
    BASE_URL: "http://student.hiast.edu.sy/backend/public/api",
    LIST_ROLES_URL: "/roles",
    ADD_ROLE_URL:
      "/roles/add",
    DELETE_ROLE_URL:
      "/roles/delete",
    ASSIGN_USER_TO_ROLE_URL:
      "/user/assign-role",
    ADD_PERMISSION_URLS:
      "/permissions/add",
    LIST_PERMISSIONS_URL:
      "/permissions",
    ASSIGN_PERMISSION_TO_ROLE_URLS:
      "/role/assign-permission",
    LIST_PERSON_URL:
      "/people",
    ADD_PERSON_URL:
      "/person/add",
    EDIT_PERSON:
      "/person/edit",
    DETAILS_PERSON_URL:
      "/person/details",
    ADD_PHONE_URL:
      "/person/add-phone",
    EDIT_PHONE_URL:
      "/person/edit-phone",
    DELETE_PHONE_URL:
      "/person/delete-phone",
    ADD_CANDIDATE_URL:
      "/candidate/add",
    EDIT_CANDIDATE_URL:
      "/candidate/edit",
    DETAILS_CANDIDATE_URL:
      "/candidate/details",
    LIST_CANDIDATE_URL:
      "/candidate",
    ADD_CERTIFICATE_URL:
      "/certificate/add",
    // EDIT: "/candidate/edit",
    DETAILS_CERTIFICATE_URL:
      "/certificate/details",
    LIST_CERTIFICATE_URL:
      "/certificate/list",
    ADD_SPECIALITY_URL:
      "/speciality/add",
    EDIT_SPECIALITY_URL:
      "/speciality/edit",
    DETAILS_SPECIALITY_URL:
      "/speciality/details",
    LIST_SPECIALITY_URL:
      "/speciality/list",
    ADD_REGISTERATION_URL:
      "/registeration/add",
    EDIT_REGISTERATION_URL:
      "/registeration/edit",
    DETAILS_REGISTERATION_URL:
      "/registeration/details",
    REG_DESIRES_LIST_URL:
      "/registeration/desire/list",
    ADD_REG_DESIRE_URL:
      "/registeration/desire/add",
    EDIT_REG_DESIRE_URL:
      "/registeration/desire/edit",
    ADD_DESIRES_URL:
      "/desire/add",
    EDIT_DESIRES_URL:
      "/desire/edit",
    LIST_DESIRES_URL:
      "/desire/list",
  },
});
