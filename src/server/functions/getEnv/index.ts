"use server";

import getConfigs from "../getConfigs";

const getEnv = async (key: string) => {
  try {
    const config = await getConfigs();

    const allowedEnvKeys = config?.application.allowedEnvs;

    if (!allowedEnvKeys?.includes(key)) {
      throw new Error("Key is not allowed to pass to client side");
    }

    // eslint-disable-next-line security/detect-object-injection
    return process.env[key] ?? "";
  } catch {
    return "";
  }
};

export default getEnv;
