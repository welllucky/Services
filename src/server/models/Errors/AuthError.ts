/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
import { CredentialsSignin } from "next-auth";

export enum AuthError {
  Configuration = "Configuration",
  AccessDenied = "AccessDenied",
  Verification = "Verification",
  Default = "Default",
}

export class InvalidLoginError extends CredentialsSignin {
  code = "Invalid identifier or password";
}

export class UserNotExist extends CredentialsSignin {
  code = "User not exist, please create a account";
}
