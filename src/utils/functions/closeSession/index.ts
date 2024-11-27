// eslint-disable-next-line consistent-return
export const closeSession = async () => {
  try {
    const { BASE_URL } = process.env;

    const res = await fetch(
      BASE_URL ? `${BASE_URL}/api/session` : "/api/session",
      {
        method: "DELETE",
      },
    );

    if (!res) throw new Error("Access token not closed");
  } catch (error) {
    return { error };
  }
};
