import { theme } from "@/styles";
import { IconProps } from "@/types";

export const EmptyBox = ({
  color = theme.colors.neutral["55"],
  height = 32,
  width = 32,
  size,
  alt = "caixa vazia",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    aria-label={alt}
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 24 24"
    fill={color}>
    <path d="M 5.75 3 A 1.0001 1.0001 0 0 0 4.8867188 3.4960938 L 3.1425781 6.4863281 L 3.1367188 6.4960938 L 0.14257812 11.486328 L 1.8574219 12.513672 L 3 10.609375 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 10.609375 L 22.142578 12.513672 L 23.857422 11.486328 L 20.876953 6.5214844 A 1.0001 1.0001 0 0 0 20.863281 6.4960938 L 19.113281 3.4960938 A 1.0001 1.0001 0 0 0 18.25 3 L 5.75 3 z M 6.3242188 5 L 17.675781 5 L 18.841797 7 L 5.1582031 7 L 6.3242188 5 z M 5 9 L 19 9 L 19 19 L 5 19 L 5 9 z M 9 11 L 9 13 L 15 13 L 15 11 L 9 11 z" />
  </svg>
);
