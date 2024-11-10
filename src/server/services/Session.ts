import { SessionModel, UserModel } from "../models";
import { sessionRepository } from "../repository";

class SessionService {
  private static readonly session = sessionRepository;

  static async createSession(password: string, userModel: UserModel) {
    try {
      const sessionModel = new SessionModel({
        userModel,
      });

      await sessionModel.closeOldSessions();

      const { accessToken, expiresAt } = await sessionModel.createAccessToken({
        password,
      });

      return this.session.create(
        { expiresAt, token: accessToken, isActive: true },
        userModel.getEntity(),
      );
    } catch (error) {
      throw new Error(`Session not created: ${error}`);
    }
  }

  static getSession(userId: string) {
    return this.session.find(userId);
  }

  static getSessions(userId: string) {
    return this.session.findAll(userId);
  }

  static async closeSession(userId: string) {
    const session = await this.session.find(userId);

    if (!session) return false;

    return this.session.update(
      {
        isActive: false,
      },
      session.user,
    );
  }
}

export { SessionService };
