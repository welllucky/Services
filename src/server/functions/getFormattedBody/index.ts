import { NextRequest } from "next/server";
// eslint-disable-next-line import/no-extraneous-dependencies

export const getFormattedBody = async <T>(req: NextRequest): Promise<T> => {
  "use server";

  const body = (await req.json()) as unknown as T;

  return body;
};
