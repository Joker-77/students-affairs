import { IAbpResponse } from "../Models/IAbpResponse";
import axios from "axios";
const fetch = require("node-fetch");

class Connector {
  constructor() {}
  // generic function to send post message to workganizer API
  static async SendMessage(Url, data, method = "GET") {
    const response = await fetch(window["runConfig"].BaseAPIUrl + Url, {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
        if (error.response) {
          console.log(error.response);
          let result: any = error.response.data;
          return result;
        } else if (error.request) {
          console.log(error.request);
          //do something else
        } else if (error.message) {
          console.log(error);
          //do something other than the other two
          return {
            success: false,
            error: {
              code: 404,
              message: error.message,
            },
          } as IAbpResponse;
        } else {
          return {
            success: false,
            error: {
              message: "UnExpectedError",
            },
          } as IAbpResponse;
        }
      });
    return response;
  }
  static async SendMessageUsingToken(Url, data, Token, method = "GET") {
    let customHeader = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + Token,
    };
    const response = await fetch(window["runConfig"].BaseAPIUrl + Url, {
      method: method,
      body: JSON.stringify(data),
      headers: customHeader,
    })
      .then((response) => {
        return response.json() as IAbpResponse;
      })
      .catch((error) => {
        if (error.name) console.error("Error Name", error.name);
        if (error.code) console.error("Error Code:", error.code);
        else if (error.message) {
          console.log(error);
          //do something other than the other two
          return {
            success: false,
            error: {
              code: 404,
              message: error.message,
            },
          } as IAbpResponse;
        } else {
          return {
            success: false,
            error: {
              message: "UnExpectedError",
            },
          } as IAbpResponse;
        }
      });
    console.log(response);
    return response;
  }
  // log in to server
  static async LogIn(_username, _password) {
    return await this.SendMessage(
      window["runConfig"].LogInUrl,
      {
        Username: _username,
        Password: _password,
      },
      "POST"
    );
  }
  static async GetPackagesReport(Token) {
    return await this.SendMessageUsingToken(
      window["runConfig"].PackagesReportUrl,
      {},
      Token
    );
  }

  static async GetBiggestCompanies(Token) {
    return await this.SendMessageUsingToken(
      window["runConfig"].GetBiggestCompaniesUrl,
      {},
      Token
    );
  }
  static async GetCompanyWorkReport(Token) {
    return await this.SendMessageUsingToken(
      window["runConfig"].CompanyWorkReport,
      {},
      Token
    );
  }
  static async GetCompanies(Token, filter) {
    return await this.SendMessageUsingToken(
      window["runConfig"].GetCompaniesUrl,
      filter,
      Token,
      "POST"
    );
  }

  static async GetGdprRequests(Token, filter) {
    return await this.SendMessageUsingToken(
      window["runConfig"].GetGdprRequestsUrl,
      filter,
      Token,
      "POST"
    );
  }

  static async RetryGdprRequest(Token, Id) {
    return await this.SendMessageUsingToken(
      window["runConfig"].RetryGdprRequestUrl + "?companyId=" + Id,
      {},
      Token,
      "GET"
    );
  }

  static async GetPackagesInfo(Token) {
    return await this.SendMessageUsingToken(
      window["runConfig"].PackagesInfoUrl,
      {},
      Token
    );
  }
  static async GetPackageFeatures(Token) {
    return await this.SendMessageUsingToken(
      window["runConfig"].PackageFeatureUrl,
      {},
      Token
    );
  }
  static async EditPackageInfo(Token, data) {
    return await this.SendMessageUsingToken(
      window["runConfig"].PlanUpdateUrl,
      data,
      Token,
      "POST"
    );
  }
  static async UpdateAppAlias(Token, data) {
    return await this.SendMessageUsingToken(
      window["runConfig"].UpdateAppAliasUrl,
      data,
      Token,
      "POST"
    );
  }
  static async EditCompany(Token, data) {
    const EditParams = {
      // Token: Token,
      ContractId: data.ContractId,
      FreeEmployeesCount: data.FreeEmployeesCount,
      IsActive: data.IsActive,
    };
    //console.log("HERE", EditParams);
    return await this.SendMessageUsingToken(
      window["runConfig"].EditCompanyUrl,
      EditParams,
      Token,
      "POST"
    );
  }
  static async GetTickets(Token, filter) {
    return await this.SendMessageUsingToken(
      window["runConfig"].GetTicketsUrl,
      filter,
      Token,
      "POST"
    );
  }
  static async GetTicket(Token, Id) {
    return await this.SendMessageUsingToken(
      window["runConfig"].GetTicketUrl + "?id=" + Id,
      {},
      Token,
      "GET"
    );
  }
  static async GetCompanyDetails(Token, Id) {
    return await this.SendMessageUsingToken(
      window["runConfig"].GetCompanyUrl + "?id=" + Id,
      {},
      Token,
      "GET"
    );
  }
  static async AssignTicket(Token, data) {
    return await this.SendMessageUsingToken(
      window["runConfig"].AssignTicketUrl,
      data,
      Token,
      "POST"
    );
  }
  static async SendTicketReply(Token, _data): Promise<IAbpResponse> {
    let _url =
      window["runConfig"].BaseAPIUrl + window["runConfig"].SendTicketReplyUrl;
    console.log(_url);
    return await axios({
      method: "post",
      url: _url,
      data: _data,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Token,
      },
    })
      .then((response) => {
        let result: IAbpResponse = response.data;
        return result;
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error.response) {
          console.log(error.response);
          let result: any = error.response.data;
          return result;
        } else if (error.request) {
          console.log(error.request);
          //do something else
        } else if (error.message) {
          console.log(error.message);
          return {
            success: false,
            error: {
              message: error.message,
            },
          } as IAbpResponse;
        } else {
          return {
            success: false,
            error: {
              message: "UnExpected Error",
            },
          } as IAbpResponse;
        }
      });
  }
  static async GetFinancialReport(Token) {
    return await this.SendMessageUsingToken(
      window["runConfig"].GetFinancialReport,
      {},
      Token
    );
  }
  static async GetErrors(Token, filter) {
    console.log(filter);
    return await this.SendMessageUsingToken(
      window["runConfig"].GetErrorsUrl,
      filter,
      Token,
      "POST"
    );
  }
  static async GetRefreshToken(_refreshToken) {
    return await this.SendMessage(
      window["runConfig"].GetRefreshToken,
      {
        refreshToken: _refreshToken,
      },
      "POST"
    );
  }
  static async EditErrors(Token, data) {
    return await this.SendMessageUsingToken(
      window["runConfig"].EditErrorsUrl,
      data,
      Token,
      "POST"
    );
  }
  static async GetUsers(Token, selectedFilter) {
    console.log("Connector", selectedFilter);
    return await this.SendMessageUsingToken(
      window["runConfig"].GetUsersUrl,
      selectedFilter,
      Token,
      "POST"
    );
  }
  static async GetUserProfile(Token) {
    return await this.SendMessageUsingToken(
      window["runConfig"].GetUserProfileUrl,
      {},
      Token
    );
  }
  static async GetCurrentUserInfo(Token) {
    console.log(window["runConfig"].GetCurrentUserInfoUrl);
    return await this.SendMessageUsingToken(
      window["runConfig"].GetCurrentUserInfoUrl,
      {},
      Token
    );
  }
  static async SaveUserProfile(Token, data) {
    return await this.SendMessageUsingToken(
      window["runConfig"].SaveUserProfile,
      data,
      Token,
      "POST"
    );
  }
  static async ChangePassword(Token, data) {
    return await this.SendMessageUsingToken(
      window["runConfig"].ChangePassword,
      data,
      Token,
      "POST"
    );
  }
  static async EditRoles(Token, data) {
    return await this.SendMessageUsingToken(
      window["runConfig"].EditUsersUrl,
      data,
      Token,
      "POST"
    );
  }
  static async GetWebsites(Token, filter) {
    return await this.SendMessageUsingToken(
      window["runConfig"].GetWebsitesUrl,
      filter,
      Token,
      "POST"
    );
  }
  static async EditWebSites(Token, data) {
    //console.log(data);
    return await this.SendMessageUsingToken(
      window["runConfig"].EditWebsitesUrl,
      data,
      Token,
      "POST"
    );
  }
  static async GetApps(Token, filter) {
    return await this.SendMessageUsingToken(
      window["runConfig"].GetAppsUrl,
      filter,
      Token,
      "POST"
    );
  }
  static async EditApps(Token, data) {
    return await this.SendMessageUsingToken(
      window["runConfig"].EditAppsUrl,
      data,
      Token,
      "POST"
    );
  }
  static async GetGlobalSettings(Token) {
    return await this.SendMessageUsingToken(
      window["runConfig"].GetGlobalSettingsUrl,
      {},
      Token
    );
  }
  static async EditGlobalSettings(Token, data) {
    return await this.SendMessageUsingToken(
      window["runConfig"].EditGlobalSettingsUrl,
      data,
      Token,
      "POST"
    );
  }
  static async RequestInvoice(Token, Id) {
    return await this.SendMessageUsingToken(
      window["runConfig"].GetInvoice + "/" + Id,
      {},
      Token,
      "GET"
    );
  }
  static async GetAllCompanyInvoices(Token, data) {
    return await this.SendMessageUsingToken(
      window["runConfig"].GetAllCompanyInvoices,
      data,
      Token,
      "POST"
    );
  }
  static async GetPayments(Token) {
    return await this.SendMessageUsingToken(
      window["runConfig"].GetPaymentsUrl,
      {},
      Token
    );
  }
  static async AddAdmin(Token, data) {
    return await this.SendMessageUsingToken(
      window["runConfig"].AddWebbinerAdminUrl,
      data,
      Token,
      "POST"
    );
  }
  static async ChangeProfilePicture(Token, _data) {
    let _url =
      window["runConfig"].BaseAPIUrl +
      window["runConfig"].ChangeProfilePictureUrl;
    console.log(_url);
    return await axios({
      method: "post",
      url: _url,
      data: _data,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Token,
      },
    })
      .then((response) => {
        let result: IAbpResponse = response.data;
        return result;
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error.response) {
          console.log(error.response);
          let result: any = error.response.data;
          return result;
        } else if (error.request) {
          console.log(error.request);
          //do something else
        } else if (error.message) {
          console.log(error.message);
          return {
            success: false,
            error: {
              message: error.message,
            },
          } as IAbpResponse;
        } else {
          return {
            success: false,
            error: {
              message: "UnExpected Error",
            },
          } as IAbpResponse;
        }
      });
  }
  static async GetQuickHelps(Token, filter) {
    return await this.SendMessageUsingToken(
      window["runConfig"].GetQuickHelpsUrl,
      filter,
      Token,
      "POST"
    );
  }
  static async AddQuickHelp(Token, data) {
    return await this.SendMessageUsingToken(
      window["runConfig"].AddQuickHelpUrl,
      data,
      Token,
      "POST"
    );
  }
  async LogOut() {}
}

export default Connector;
