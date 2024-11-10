import { sign } from "jsonwebtoken";
import { Session } from "../entities";
import { sessionRepository } from "../repository";
import { UserModel } from "./User";

interface SessionModelConstructorModel {
  passedSessionRepository?: Session | null;
  userModel: UserModel;
}

class SessionModel {
  private session: Session | null;

  private readonly repository = sessionRepository;

  constructor({
    passedSessionRepository,
    userModel,
  }: SessionModelConstructorModel) {
    this.session = passedSessionRepository ?? null;
    this.user = userModel;
  }

  public async createAccessToken({
    password,
    daysToExpire = 3,
  }: {
    password: string;
    daysToExpire?: number;
  }) {
    try {
      const isPasswordValid = await this.user.authUser(password);

      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }

      const userData = this.user.getData();

      const tokenInfo = {
        register: userData?.register,
        email: userData?.email,
        name: userData?.name,
        lastConnection: userData?.lastConnection,
        isBanned: userData?.isBanned,
        canCreateTicket: userData?.canCreateTicket,
        canResolveTicket: userData?.canResolveTicket,
        role: userData?.role,
        sector: userData?.sector,
      };

      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + daysToExpire);

      const accessToken = sign(
        { ...tokenInfo },
        process.env.AUTH_SECRET ?? "",
        {
          algorithm: "HS256",
          expiresIn: `${daysToExpire}d`,
        },
      );

      return { accessToken, expiresAt };
    } catch (error) {
      throw new Error(`Access Token is not created: ${error}`);
    }
  }

  public async close(sessionId: string) {
    try {
      const session = await this.repository.find(
        this.user.getRegister() ?? "",
        sessionId,
      );

      if (!session) {
        throw new Error("Session not found");
      }

      session.isActive = false;
      session.save();
    } catch (error) {
      throw new Error(`Session not closed: ${error}`);
    }
  }

  public async closeOldSessions() {
    const userId = this.user.getRegister();

    if (!userId) {
      throw new Error("User not found");
    }

    this.repository.findAll(userId, "active").then((sessions) => {
      sessions.forEach(async (session) => {
        if (session.isActive) {
          await this.close(session.id);
        }
      });
    });
  }

  public async find() {
    try {
      const register = this.user.getRegister();
      if (!register) {
        throw new Error("Register not found");
      }

      const session = await this.repository.find(register);

      if (!session) {
        throw new Error();
      }

      this.session = session;
    } catch (error) {
      throw new Error(`Session not found: ${error}`);
    }
  }

  public id!: string;

  public token!: string;

  public user!: UserModel;

  public expiresAt!: Date;

  public createdAt!: Date;
}

export { SessionModel };
