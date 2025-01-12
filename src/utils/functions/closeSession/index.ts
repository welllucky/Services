import { sessionApi } from "@/utils/apis";

// eslint-disable-next-line consistent-return
export const closeSession = async (accessToken: string) => {
  try {
    const { error } = await sessionApi.closeSession(accessToken);

    if (error) throw new Error("Access token not closed");
  } catch (error) {
    return { error };
  }
};
