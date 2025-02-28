/* eslint-disable no-unused-vars */
export interface IJWT {
  sign: (
    payload: string | object | Buffer,
    expiresIn: string,
  ) => Promise<string>;
  verify: <T>(token: string) => Promise<T>;
  decode: <T>(token: string) => Promise<T>;
}
