import { NextRequest } from "next/server";

const getFormattedBody = async <T>(req: NextRequest): Promise<T> => {
  "use server";

  const body = (await req.json()) as unknown as T;

  return body;
};

export { getFormattedBody };
