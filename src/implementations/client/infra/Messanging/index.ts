import {
  IAppMonitoring,
  IMessagingAbstract,
  IMessagingAgent,
  MessagePayload,
} from "@/types";

class MessagingAgent implements IMessagingAgent {
  private readonly messagingInstance: IMessagingAbstract | null = null;

  private readonly appMonitoring: IAppMonitoring;

  constructor(
    messagingInstance: IMessagingAbstract,
    appMonitoring: IAppMonitoring,
  ) {
    this.appMonitoring = appMonitoring;
    try {
      if (!messagingInstance) {
        throw new Error("Messaging instance was not initialized.");
      }

      this.messagingInstance = messagingInstance;
    } catch (error) {
      this.appMonitoring.captureException(error);
    }
  }

  async requestPermission() {
    try {
      if (!this.messagingInstance) {
        throw new Error("Messaging instance was not initialized.");
      }

      if (!("Notification" in window)) {
        throw new Error("This browser does not support notifications.");
      }

      const permission = await Notification.requestPermission();

      if (permission === "denied") {
        return;
      }

      const token = await this.messagingInstance.getToken();

      if (token) {
        localStorage.setItem("messaging_token", token);
      }
    } catch (error) {
      this.appMonitoring.captureException(error);
    }
  }

  onMessage(payload: MessagePayload) {
    try {
      if (!this.messagingInstance) {
        throw new Error("Messaging instance was not initialized.");
      }

      this.messagingInstance.onMessage(payload);
    } catch (error) {
      this.appMonitoring.captureException(error);
    }
  }
}

export default MessagingAgent;
