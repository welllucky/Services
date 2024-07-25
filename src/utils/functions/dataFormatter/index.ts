export const dataFormatter = (data: string) => {
  const date = typeof data === "string" ? new Date(data) : data;
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  //  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}`;
  return formattedDate;
};
