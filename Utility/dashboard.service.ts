
export class Whatever{
  
}
/*

export class DashBoardConnector {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private httpclient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  //login-logout

  isLoggedIn() {
    return !!localStorage.getItem('currentUser');
  }



  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  //Dashboard Get top 10 companies
  GetBestPackageCompanies(Token): Observable<any> {
    var LoginURL = "http://h2817272.stratoserver.net/wtest/api/webbinerapi/GetBestPackageCompanies";
    const token = { Token: Token };
    var HeaderApi = new HttpHeaders({
      'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${Token}`
    });
    // post these details to API server return user info
    return this.httpclient.post(LoginURL, token, { headers: HeaderApi })
      .pipe(
        map(res => res),
        catchError(this.errorHandler)
      );
  }

  //Dashboard Get top 10 companies Working hours
  GetMostWorkedCompanies(Token): Observable<any> {
    var LoginURL = "http://h2817272.stratoserver.net/wtest/api/Webbinerapi/GetMostWorkedCompanies";
    const token = { Token: Token };
    var HeaderApi = new HttpHeaders({
      'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${Token}`
    });
    // post these details to API server return user info
    return this.httpclient.post(LoginURL, token, { headers: HeaderApi })
      .pipe(
        map(res => res),
        catchError(this.errorHandler)
      );
  }


  // Company
  GetCompanies(Token): Observable<any> {
    var LoginURL = "http://h2817272.stratoserver.net/wtest/api/Webbinerapi/Company_Data";
    const token = { Token: Token };
    var HeaderApi = new HttpHeaders({
      'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${Token}`
    });

    // post these details to API server return user info
    return this.httpclient.post(LoginURL, token, { headers: HeaderApi })
      .pipe(
        map(res => res),
        catchError(this.errorHandler)
      );
  }

  EditCompany_Data(Token, id, userFree, package_id, isactive): Observable<any> {
    var LoginURL = "http://h2817272.stratoserver.net/wtest/api/Webbinerapi/EditCompany_Data";
    var Contractid = id;
    var Freeusers = userFree;
    var Packageid = package_id;
    var isactive = isactive;
    console.log(Contractid + Freeusers + Packageid + isactive);
    const Edit_para = { Token: Token, Contractid: Contractid, Packageid: Packageid, Freeusers: Freeusers, Isactive: isactive };
    var HeaderApi = new HttpHeaders({
      'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${Token}`
    });
    // post these details to API server return user info
    return this.httpclient.post(LoginURL, Edit_para, { headers: HeaderApi })
      .pipe(
        map(res => res),
        catchError(this.errorHandler)
      );
  }

  GetCompanyEmployees(Token): Observable<any> {
    var LoginURL = "http://h2817272.stratoserver.net/wtest/api/webbinerapi/GetCompanyEmployees";
    var Companyid = 2;
    const Edit_para = { Token: Token, Companyid: Companyid };
    var HeaderApi = new HttpHeaders({
      'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${Token}`
    });
    // post these details to API server return user info
    return this.httpclient.post(LoginURL, Edit_para, { headers: HeaderApi })
      .pipe(
        map(res => res),
        catchError(this.errorHandler)
      );
  }



  // Package
  GetAllPackages(Token): Observable<any> {
    var LoginURL = "http://h2817272.stratoserver.net/wtest/api/webbinerapi/GetPackages";
    const Edit_para = { Token: Token };
    var HeaderApi = new HttpHeaders({
      'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${Token}`
    });
    // post these details to API server return user info
    return this.httpclient.post(LoginURL, Edit_para, { headers: HeaderApi })
      .pipe(
        map(res => res),
        catchError(this.errorHandler)
      );
  }



  GetPackagefeatures(Token): Observable<any> {
    var LoginURL = "http://h2817272.stratoserver.net/wtest/api/webbinerapi/GetPackagefeatures";
    const token = { Token: Token };
    var HeaderApi = new HttpHeaders({
      'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${Token}`
    });
    // post these details to API server return user info
    return this.httpclient.post(LoginURL, token, { headers: HeaderApi })
      .pipe(
        map(res => res),
        catchError(this.errorHandler)
      );
  }

  EditPackageInfo(Token, package_name, Monthly_equation, annual_equation, packageUsers): Observable<any> {
    var ticketURL = "http://h2817272.stratoserver.net/wtest/api/Webbinerapi/Editpackagesinformations";
    const Edit_para = { Token: Token, PackageName: package_name, PackagemonthlyEq: Monthly_equation, PackageannulaEq: annual_equation, PackageUsers: packageUsers };
    var HeaderApi = new HttpHeaders({
      'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${Token}`
    });
    return this.httpclient.post(ticketURL, Edit_para, { headers: HeaderApi })
      .pipe(
        map(res => res),
        catchError(this.errorHandler)
      );
  }
  GetPackages(Token): Observable<any> {
    var packagesurl = "http://h2817272.stratoserver.net/wtest/api/webbinerapi/GetPackageinformation";
    const token = { Token: Token };
    var HeaderApi = new HttpHeaders({
      'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${Token}`
    });
    // post these details to API server return user info
    return this.httpclient.post(packagesurl, token, { headers: HeaderApi })
      .pipe(
        map(res => res),
        catchError(this.errorHandler)
      );
  }

  // Ticket
  AssignTickettoEmployee(Token, id, email): Observable<any> {
    var ticketURL = "http://h2817272.stratoserver.net/wtest/api/webbinerapi/AssignTickettoEmployee";
    const Assign_para = { Token: Token, id: id, email: email };
    var HeaderApi = new HttpHeaders({
      'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${Token}`
    });
    return this.httpclient.post(ticketURL, Assign_para, { headers: HeaderApi })
      .pipe(
        map(res => res),
        catchError(this.errorHandler)
      );
  }



  GetTicket(Token): Observable<any> {
    var ticketURL = "http://h2817272.stratoserver.net/wtest/api/webbinerapi/GetTicketInforamtion";
    const token = { Token: Token };
    var HeaderApi = new HttpHeaders({
      'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${Token}`
    });
    // post these details to API server return user info
    return this.httpclient.post(ticketURL, token, { headers: HeaderApi })
      .pipe(
        map(res => res),
        catchError(this.errorHandler)
      );
  }

  GetOneTicketInforamtion(Token, ticket_id): Observable<any> {
    var ticketDetailsURL = "http://h2817272.stratoserver.net/wtest/api/Webbinerapi/GetOneTicketInforamtion";
    const TicketDetailsPara = { Token: Token, id: ticket_id };
    var HeaderApi = new HttpHeaders({
      'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${Token}`
    });
    // post these details to API server return user info
    return this.httpclient.post(ticketDetailsURL, TicketDetailsPara, { headers: HeaderApi })
      .pipe(
        map(res => res),
        catchError(this.errorHandler)
      );
  }

  AddReply(Token, ticketId, replyContent): Observable<any> {
    var ticketURL = "http://h2817272.stratoserver.net/wtest/api/Webbinerapi/AddReply";
    const Reply_para = { Token: Token, TicketId: ticketId, ReplyContent: replyContent };
    var HeaderApi = new HttpHeaders({
      'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${Token}`
    });
    return this.httpclient.post(ticketURL, Reply_para, { headers: HeaderApi })
      .pipe(
        map(res => res),
        catchError(this.errorHandler)
      );
  }

  //handler
  errorHandler(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);

  }


}
*/