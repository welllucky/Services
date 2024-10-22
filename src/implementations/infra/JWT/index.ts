// export class JWTAbstraction {
//   client: typeof import("jsonwebtoken");

//   constructor(private readonly secret: string) {
//     this.secret = secret;
//     // eslint-disable-next-line global-require, @typescript-eslint/no-require-imports
//     this.client = require("jsonwebtoken");
//   }

//   public async sign(
//     payload: T,
//     payload: string | object | Buffer,
//     p0: { expiresIn: string },
//   ) {
//     return this.client.sign(payload, this.secret, {
//       algorithm: "ES256",
//     });
//   }

//   public async verify(token: string, secret: string) {
//     return this.client.verify(token, this.secret);
//   }

//   public async decode(token: string) {
//     return this.client.decode(token);
//   }
// }
