// import { JWTAbstraction } from "@/implementations/infra/JWT";
// import { IJWT } from "@/implementations/interfaces";

// export class JWTClient implements IJWT {
//   private secret: string;

//   private client: JWTAbstraction;

//   constructor(secret: string, client: JWTAbstraction) {
//     this.secret = secret;
//     this.client = client;
//   }
//   decode: <T>(token: string) => T;

//   public sign<T>(payload: T, expiresIn: string): string {
//     return this.client.sign(payload, this.secret, {
//       expiresIn,
//     });
//   }

//   public async verify(token: string) {
//     return this.client.verify(token, this.secret);
//   }
// }
