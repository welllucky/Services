import { theme } from "@/styles";
import { IconProps } from "@/types";

export const PlusIcon = ({
  color = theme.colors.primary.default,
  alt = "Add",
  height = "26px",
  width = "26px",
}: IconProps) => (
  <svg
    width={width}
    height={height}
    aria-label={alt}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <mask
      id="mask0_84_36559"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width={width}
      height={height}>
      <rect
        width={width}
        height={height}
        fill="url(#pattern0)"
      />
    </mask>
    <g mask="url(#mask0_84_36559)">
      <rect
        width={width}
        height={height}
        fill={color}
      />
    </g>
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1">
        <use
          xlinkHref="#image0_84_36559"
          transform="scale(0.0104167)"
        />
      </pattern>
      <image
        id="image0_84_36559"
        width="96"
        height="96"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5UlEQVR4nO3VsXHDQBAEQSRHYyzmH42UgWSexO2ueh/1gwWeBwAAAAD+qF7vr5/O9fN9vAQQYFoWIMC0LECAaVmAANOyAAGmZQECTMsCBJiWBQgwLQsQYFoWIMC0LECAaVmAANOyAAGmZQECTMsCBJjW+gJ+u4D18wjwFuD6LcwC7i8in6D7y+jg+Ae8BDh/C7OA+4voUz9B11q/gGsJIMC0LECAaVmAANOyAAGmZQECTMsCBJiWBQgwLQsQYFoWIMC0LECAaVmAANOyAAGmZQECTMsCBJiWBQgwLQsAAAAA4PmfvgGxUOdqo6NbWQAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);
