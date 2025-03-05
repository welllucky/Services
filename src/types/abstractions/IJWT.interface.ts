/* eslint-disable no-unused-vars */
export interface IJWT {
  sign: (
    payload: string | object | Buffer,
    expiresIn: string,
  ) => string;
  verify: <T>(token: string) => T;
  decode: <T>(token: string) => T;
}
