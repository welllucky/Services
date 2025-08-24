"use server";

import { revalidateTag } from "next/cache";

import { DataTag } from "@/types";

export const revalidateData = async (key: DataTag) => {
  revalidateTag(key);
};
