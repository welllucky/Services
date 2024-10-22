import { IconProps } from "@/types";

export const ClearDisabledIcon = ({
  width = "40px",
  height = "40px",
  color = "black",
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 10C14.47 10 10 14.47 10 20C10 25.53 14.47 30 20 30C25.53 30 30 25.53 30 20C30 14.47 25.53 10 20 10ZM20 28C15.59 28 12 24.41 12 20C12 15.59 15.59 12 20 12C24.41 12 28 15.59 28 20C28 24.41 24.41 28 20 28ZM20 18.59L23.59 15L25 16.41L21.41 20L25 23.59L23.59 25L20 21.41L16.41 25L15 23.59L18.59 20L15 16.41L16.41 15L20 18.59Z"
      fill={color}
    />
  </svg>
);
