import { Cookies } from "react-cookie";
import { HTTPClient } from "./abstractions";

export const httpClient = new HTTPClient();
export const cookie = new Cookies();
