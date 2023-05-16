export interface IUserSignInResponse {
  success: Boolean;
  isUserExists: Boolean;
  isAuthSuccessful: Boolean;
  result: {
    id: number;
    email: string;
    token: string;
    permissions: [];
  };
  code: number;
  message: string;
  error: any;
}
