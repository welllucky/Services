// export * from "./Errors";
// export * from "./Event";
// export * from "./Session";
// export * from "./Ticket";

import { SessionModel } from "./Session";
import { UserModel } from "./User";

const userModel = new UserModel();
const sessionModel = new SessionModel({ userModel });

export { sessionModel, SessionModel, userModel, UserModel };
