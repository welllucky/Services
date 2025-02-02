import { IconProps } from "@/types";

export const SearchIcon = ({
  width = "40px",
  height = "40px",
  color = "black",
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 80 80"
    fill={color}
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M28 0C12.5834 0 0 12.5834 0 28C0 43.4166 12.5834 56 28 56C34.992 56 41.38 53.3921 46.2969 49.125L48 50.8281V56L72 80L80 72L56 48H50.8281L49.125 46.2969C53.3921 41.38 56 34.992 56 28C56 12.5834 43.4166 0 28 0ZM28 8C39.0931 8 48 16.9069 48 28C48 39.0931 39.0931 48 28 48C16.9069 48 8 39.0931 8 28C8 16.9069 16.9069 8 28 8Z"
      fill={color}
    />
  </svg>
);
