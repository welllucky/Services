/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
export enum AuthError {
  Configuration = "Configuration",
  AccessDenied = "AccessDenied",
  Verification = "Verification",
  Default = "Default",
}

export class InvalidLoginError {
  code = "Invalid identifier or password";
}

export class UserNotExist {
  code = "User not exist, please create a account";
}
