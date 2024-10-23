import { IconProps } from "@/types";

export const SettingsIcon = ({ width, height, color }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <mask
      id="mask0_84_36520"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="26"
      height="26">
      <rect
        width="26"
        height="26"
        fill="url(#pattern0)"
      />
    </mask>
    <g mask="url(#mask0_84_36520)">
      <rect
        width="26"
        height="26"
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
          xlinkHref="#image0_84_36520"
          transform="scale(0.0104167)"
        />
      </pattern>
      <image
        id="image0_84_36520"
        width="96"
        height="96"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
