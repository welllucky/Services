import { IconProps } from "@/types";

export const CallsIcon = ({ width, height, color }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <mask
      id="mask0_84_36168"
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
    <g mask="url(#mask0_84_36168)">
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
          xlinkHref="#image0_84_36168"
          transform="scale(0.0104167)"
        />
      </pattern>
      <image
        id="image0_84_36168"
        width="96"
        height="96"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHYSURBVHgB7d3LTcNAFIXhw2sHiC6AEigAUQk0AyFlUEF41AENwJoVZgWLMFewiAQGxhn7aOL/k+4KQZT5sRPHkS0BAAAAAAAA/3eY5jLNQ5rXNPMVn3iO92kmaQ5ktJVmmuZddS1gyYnnHiE2NbBY/BvVvXgl51oDR5iq/kUrPRMNJPb5Y97ttE2syb4yrSvfmQz7vArEmpwqU5cAx0KbE2VaU74mzbbwk1ib3Zxf6BJgrvJ/syZFn3+XXRAKIoAZAcwIYEYAMwKYEcCsj48U/nqfjAVsAWYEMCOAGQHMCGBGADMCmPVxHDD28wFZ2ALMCGBGADMCmBHAjABmBDBzfMVw2e/V9H2+YdDjGLYAMwKYEcCMAGYEMCOAGQHMHMcBy77PXqnzDWwBZgQwI4AZAcwIYEYAMwKYcT4g//GLYgswI4AZAcwIYEYAMwKYEcCM8wFmbAFmBDAjgBkBzAhgRgAzAph1OQ6Ii5Pu/PLzMV8v6EWZumwBT0KbR2XqEuBOaHOrAcRtO7h8/fd5U4fL128o33OavTRHwqK4qcWVBhIv3jPV9R/a58xk+GAzHjBu2zH2m/icy3xDi3hNuNDnrZ0a1beIudN8PddY+Ox9PgAAAAAAAMbrA0uqZwydeEOvAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);
