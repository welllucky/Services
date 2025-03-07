"use server";

import { ConfigType } from "@/types";

const getConfigs = async (): Promise<ConfigType | null> => {
  try {
    const res = await fetch(`${process.env.BASE_URL}config.json`);

    const configs = await res.json();

    return configs as ConfigType;
  } catch {
    return null;
  }
};

export default getConfigs;
