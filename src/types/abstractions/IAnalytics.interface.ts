import { Analytics } from "firebase/analytics";

export interface IAnalytics {
  initialize(): Promise<void>;
}

export interface IAnalyticsAbstract {
  initialize(): Promise<Analytics | null | undefined>;
  getAnalytics(): Analytics | null;
}
