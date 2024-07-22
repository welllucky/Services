export const dataFormatter = (data: string) => {
  const date = new Date(data);
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}`;
  return formattedDate;
};
