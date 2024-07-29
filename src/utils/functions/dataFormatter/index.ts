export const dataFormatter = (data: string, fullDate?: boolean) => {
  const date = typeof data === "string" ? new Date(data) : data;
  const day = date?.getDate().toString().padStart(2, "0");
  const month = ((date?.getMonth() ?? 0) + 1).toString().padStart(2, "0");
  const year = date?.getFullYear();
  const hours = date?.getHours().toString().padStart(2, "0");
  const minutes = date?.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${fullDate ? `às ${hours}:${minutes}` : ""}`;
};
