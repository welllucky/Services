"use server";

import { ConfigType } from "@/types";

const getConfigs = async (): Promise<ConfigType | null> => {
  try {
    const configs = await (await fetch("/config.json")).json();

    return configs as ConfigType;
  } catch {
    return null;
  }
};

export default getConfigs;
