import { Cookies } from "react-cookie";
import { HTTPClientImplementation } from "./abstractions";

export const httpClient = new HTTPClientImplementation();
export const cookie = new Cookies();
