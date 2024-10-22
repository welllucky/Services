/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IJWT {
  sign: <T>(payload: T, expiresIn: string) => string;
  verify: (token: string) => any;
  decode: <T>(token: string) => T;
}
