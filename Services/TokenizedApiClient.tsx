import apiConnector from "./ApiClient";

apiConnector.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem("sa_access_token");
    console.log("token", token);
    // alert(token);
    config.headers = {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default apiConnector;
