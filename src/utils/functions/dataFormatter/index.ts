export const dataFormatter = (data: string | Date) => {
  const date = new Date(data);
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  //  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}`;
  return formattedDate;
};
