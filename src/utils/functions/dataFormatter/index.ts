export const dataFormatter = (data: string, fullDate?: boolean) => {
  const date = new Date(data);
  const day = date?.getDate().toString().padStart(2, "0");
  const month = ((date?.getMonth() ?? 0) + 1).toString().padStart(2, "0");
  const year = date?.getFullYear();
  const hours = date?.getHours().toString().padStart(2, "0");
  const minutes = date?.getMinutes().toString().padStart(2, "0");

  console.log({
    day,
    month,
    year,
    hours,
    minutes,
    date,
    data,
  });

  const timePart = fullDate ? `às ${hours}:${minutes}` : "";
  return `${day}/${month}/${year} ${timePart}`;
};
