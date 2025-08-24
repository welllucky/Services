import {
  getMessaging,
  getToken,
  Messaging as FirebaseMessaging,
  onMessage,
} from "firebase/messaging";

import { IMessagingAbstract, MessagePayload } from "@/types";

import { FirebaseAbstract } from "../Firebase";

class Messaging implements IMessagingAbstract {
  private readonly messagingInstance: FirebaseMessaging | null = null;

  private readonly messagingKey: string;

  private notification: Notification | null = null;

  constructor(firebaseInstance: FirebaseAbstract, messagingKey?: string) {
    if (!messagingKey) {
      throw new Error("Messaging key was not provided.");
    }

    this.messagingKey = messagingKey;

    const firebaseApp = firebaseInstance.getFirebaseApp();

    if (!firebaseApp) {
      throw new Error("Firebase app is not initialized or is not provided");
    }

    this.messagingInstance = getMessaging(firebaseApp);
  }

  async getToken() {
    if (!this.messagingInstance) {
      throw new Error("Messaging instance was not initialized.");
    }

    if (!this.messagingKey) {
      throw new Error("Messaging key was not provided.");
    }

    const token = await getToken(this.messagingInstance, {
      vapidKey: this.messagingKey,
    });

    if (!token) {
      throw new Error("Token was not provided.");
    }

    return token;
  }

  onMessage(payload: MessagePayload) {
    if (this.notification) {
      this.notification = null;
    }

    if (!this.messagingInstance) {
      throw new Error("Messaging instance was not initialized.");
    }

    const messagingFn = () => {
      // eslint-disable-next-line no-console
      console.log("Mensagem recebida em primeiro plano:", payload);

      // eslint-disable-next-line no-new
      this.notification = new Notification(payload.notification?.title ?? "", {
        body: payload.notification?.body,
        icon: payload.notification?.icon,
        data: payload.data,
        dir: "auto",
        lang: payload.data?.lang,
        tag: payload.data?.tag,
        requireInteraction: payload.data?.requireInteraction === "true",
        silent: payload.data?.silent === "true",
        badge: payload.data?.badge,
      });
    };

    onMessage(this.messagingInstance, messagingFn);
  }

  getActualNotification() {
    return this.notification;
  }
}

export default Messaging;
