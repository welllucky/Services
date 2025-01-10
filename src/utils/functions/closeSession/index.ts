import { cookie } from "@/implementations/client";
import { CS_KEY_ACCESS_TOKEN } from "@/utils/alias";
import { sessionApi } from "@/utils/apis";

// eslint-disable-next-line consistent-return
export const closeSession = async () => {
  try {
    const accessToken = cookie.get(CS_KEY_ACCESS_TOKEN);
    const { error } = await sessionApi.closeSession(accessToken);

    if (error) throw new Error("Access token not closed");
  } catch (error) {
    return { error };
  }
};
