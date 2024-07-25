import { Cookies } from "react-cookie";
import { HTTPClientImplementation } from "./httpClient";

export const cookie = new Cookies();
export const httpClient = new HTTPClientImplementation();
