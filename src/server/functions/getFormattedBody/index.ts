import { NextRequest } from "next/server";

const getFormattedBody = async <T>(req: NextRequest): Promise<T> => {
  "use server";

  try {
    const body = (await req.json()) as unknown as T;

    return body;
  } catch {
    return {} as T;
  }
};

export { getFormattedBody };
