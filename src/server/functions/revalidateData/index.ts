"use server";

import { DataTag } from "@/types";
import { revalidateTag } from "next/cache";

export const revalidateData = async (key: DataTag) => {
  revalidateTag(key);
};
