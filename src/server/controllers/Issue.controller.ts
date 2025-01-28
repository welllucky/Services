// import { TicketView } from "@/server";
// import { getAuthToken } from "@/server/functions/getAuthToken";
// import { getFormattedBody } from "@/server/functions/getFormattedBody";
// import { IOpenIssueForm } from "@/types";
// import { captureException } from "@sentry/nextjs";
// import { NextRequest, NextResponse } from "next/server";

// export class IssueController {
//   static async getAllIssues(req: NextRequest) {
//     // try {
//     //   const { isAuthenticated, userId } = await getAuthToken(req);

//     //   if (!isAuthenticated || !userId) {
//     //     return NextResponse.json(
//     //       { error: { message: "User not authenticated" } },
//     //       {
//     //         status: 401,
//     //       },
//     //     );
//     //   }

//     //   // const params = req.nextUrl.searchParams;
//     //   // const statuses = params.getAll("status");

//     //   // @todo call the api
//     //   const tickets = [];

//     //   if (!tickets.length) {
//     //     return NextResponse.json(
//     //       { error: { message: "No tickets found" } },
//     //       {
//     //         status: 200,
//     //       },
//     //     );
//     //   }

//     //   return NextResponse.json(tickets, {
//     //     status: 200,
//     //   });
//     // } catch (error) {
//     //   captureException(error, {
//     //     tags: {
//     //       controller: "IssueController",
//     //       method: "getAllIssues",
//     //     },
//     //   });
//     //   return NextResponse.json({ error });
//     // }
//   }

//   static async getIssueById(req: NextRequest, params: { id: string }) {
//     // try {
//     //   const ticketId = params.id;
//     //   const { userId, isAuthenticated } = await getAuthToken(req);

//     //   if (!isAuthenticated || !userId) {
//     //     return NextResponse.json(
//     //       { error: { message: "User not authenticated" } },
//     //       {
//     //         status: 401,
//     //       },
//     //     );
//     //   }

//     //   // @todo call the api
//     //   const ticket = {};

//     //   if (!ticket) {
//     //     return NextResponse.json(
//     //       { error: { message: "Issue not found" } },
//     //       {
//     //         status: 404,
//     //       },
//     //     );
//     //   }

//     //   return NextResponse.json(TicketView.getTicket(ticket), {
//     //     status: 200,
//     //   });
//     // } catch (error) {
//     //   captureException(error, {
//     //     tags: {
//     //       controller: "IssueController",
//     //       method: "getIssueById",
//     //     },
//     //   });
//     //   return NextResponse.json({ error });
//     // }
//   }

//   static async createIssue(req: NextRequest) {
//     try {
//       const body = await getFormattedBody<IOpenIssueForm>(req);
//       const { userId, isAuthenticated } = await getAuthToken(req);

//       if (!isAuthenticated || !userId) {
//         return NextResponse.json(
//           { error: { message: "User not authenticated" } },
//           {
//             status: 401,
//           },
//         );
//       }

//       // @todo call the api
//       const issue = {};

//       return NextResponse.json(TicketView.getTicketId(issue), {
//         status: 201,
//       });
//     } catch (error) {
//       captureException(error, {
//         tags: {
//           controller: "IssueController",
//           method: "createIssue",
//         },
//       });
//       return NextResponse.json(
//         { error },
//         {
//           status: 400,
//         },
//       );
//     }
//   }

//   static async getInProgressIssues(req: NextRequest) {
//     try {
//       const { userId, isAuthenticated } = await getAuthToken(req);

//       if (!isAuthenticated || !userId) {
//         return NextResponse.json(
//           { error: { message: "User not authenticated" } },
//           {
//             status: 401,
//           },
//         );
//       }

//       // @todo call the api
//       const tickets = [];

//       if (!tickets?.length) {
//         return NextResponse.json(
//           { error: { message: "No tickets found" } },
//           {
//             status: 200,
//           },
//         );
//       }

//       return NextResponse.json(tickets, {
//         status: 200,
//       });
//     } catch (error) {
//       captureException(error, {
//         tags: {
//           controller: "IssueController",
//           method: "getInProgressIssues",
//         },
//       });
//       return NextResponse.json(
//         { error },
//         {
//           status: 500,
//         },
//       );
//     }
//   }

//   static async closeIssue(req: NextRequest, params: { id: string }) {
//     try {
//       const ticketId = params.id;
//       const { userId, isAuthenticated } = await getAuthToken(req);

//       if (!isAuthenticated || !userId) {
//         return NextResponse.json(
//           { error: { message: "User not authenticated" } },
//           {
//             status: 401,
//           },
//         );
//       }

//       if (!ticketId) {
//         return NextResponse.json(
//           { error: { message: "Issue ID not provided" } },
//           {
//             status: 400,
//           },
//         );
//       }

//       // @todo call the api
//       const ticket = {};

//       if (!ticket) {
//         return NextResponse.json(
//           { error: { message: "Issue not found" } },
//           {
//             status: 204,
//           },
//         );
//       }

//       return NextResponse.json("", {
//         status: 200,
//       });
//     } catch (error) {
//       captureException(error, {
//         tags: {
//           controller: "IssueController",
//           method: "closeIssue",
//         },
//       });
//       return NextResponse.json(
//         {
//           error,
//         },
//         {
//           status: 500,
//         },
//       );
//     }
//   }

//   static async startIssue(req: NextRequest, params: { id: string }) {
//     try {
//       const ticketId = params.id;
//       const { userId, isAuthenticated } = await getAuthToken(req);

//       if (!isAuthenticated || !userId) {
//         return NextResponse.json(
//           { error: { message: "User not authenticated" } },
//           {
//             status: 401,
//           },
//         );
//       }

//       if (!ticketId) {
//         return NextResponse.json(
//           { error: { message: "Issue ID not provided" } },
//           {
//             status: 400,
//           },
//         );
//       }

//       // @todo call the api
//       const ticket = {};

//       if (!ticket) {
//         return NextResponse.json(
//           { error: { message: "Issue not found" } },
//           {
//             status: 204,
//           },
//         );
//       }

//       return NextResponse.json("", {
//         status: 200,
//       });
//     } catch (error) {
//       captureException(error, {
//         tags: {
//           controller: "IssueController",
//           method: "startIssue",
//         },
//       });
//       return NextResponse.json(
//         {
//           error,
//         },
//         {
//           status: 500,
//         },
//       );
//     }
//   }

//   static async reopenIssue(req: NextRequest, params: { id: string }) {
//     try {
//       const ticketId = params.id;
//       const { userId, isAuthenticated } = await getAuthToken(req);

//       if (!isAuthenticated || !userId) {
//         return NextResponse.json(
//           { error: { message: "User not authenticated" } },
//           {
//             status: 401,
//           },
//         );
//       }

//       if (!ticketId) {
//         return NextResponse.json(
//           { error: { message: "Issue ID not provided" } },
//           {
//             status: 400,
//           },
//         );
//       }

//       // @todo call the api
//       const ticket = {};

//       if (!ticket) {
//         return NextResponse.json(
//           { error: { message: "Issue not found" } },
//           {
//             status: 204,
//           },
//         );
//       }

//       return NextResponse.json("", {
//         status: 200,
//       });
//     } catch (error) {
//       captureException(error, {
//         tags: {
//           controller: "IssueController",
//           method: "reopenIssue",
//         },
//       });
//       return NextResponse.json(
//         {
//           error,
//         },
//         {
//           status: 500,
//         },
//       );
//     }
//   }
// }
