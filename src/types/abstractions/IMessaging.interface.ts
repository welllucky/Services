import { MessagePayload as FirebaseMessagePayload } from "firebase/messaging";

export type MessagePayload = FirebaseMessagePayload;

export interface IMessagingAbstract {
  getToken: () => Promise<string | null>;
  // eslint-disable-next-line no-unused-vars
  onMessage: (payload: MessagePayload) => void;
  getActualNotification: () => Notification | null;
}

export interface IMessagingAgent {
  requestPermission: () => Promise<void>;
  // eslint-disable-next-line no-unused-vars
  onMessage: (payload: MessagePayload) => void;
}
