export const dataFormatter = (data: string) => {
  return data?.split("-").reverse().join("/");
};
