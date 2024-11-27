/* eslint-disable no-unused-vars */
export interface ICrypto {
  encrypt: <T>(text: string | T) => void;

  decrypt: <T>(text: string) => Promise<T | string>;
}
