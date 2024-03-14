import { type IconProps } from "@/types";
import Filter from "./filter.svg";

export const PlusIcon = () => {
  return (
    <svg
      width="26"
      height="26"
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
        width="26"
        height="26">
        <rect
          width="26"
          height="26"
          fill="url(#pattern0)"
        />
      </mask>
      <g mask="url(#mask0_84_36559)">
        <rect
          width="26"
          height="26"
          fill="#7AC143"
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
};

export const Selo = () => {
  return (
    <svg
      width="26"
      height="30"
      viewBox="0 0 26 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_1530_30528)">
        <path
          d="M9.16106 3.43901C10.1526 1.5572 12.8474 1.5572 13.8389 3.43901C14.4324 4.56531 15.7443 5.10871 16.9603 4.73193C18.9921 4.10241 20.8976 6.00793 20.2681 8.03968C19.8913 9.25573 20.4347 10.5676 21.561 11.1611C23.4428 12.1526 23.4428 14.8474 21.561 15.8389C20.4347 16.4324 19.8913 17.7443 20.2681 18.9603C20.8976 20.9921 18.9921 22.8976 16.9603 22.2681C15.7443 21.8913 14.4324 22.4347 13.8389 23.561C12.8474 25.4428 10.1526 25.4428 9.16106 23.561C8.56761 22.4347 7.25573 21.8913 6.03968 22.2681C4.00793 22.8976 2.10241 20.9921 2.73193 18.9603C3.10871 17.7443 2.56531 16.4324 1.43901 15.8389C-0.442797 14.8474 -0.442797 12.1526 1.43901 11.1611C2.56531 10.5676 3.10871 9.25573 2.73193 8.03968C2.10241 6.00793 4.00792 4.10241 6.03968 4.73193C7.25573 5.10871 8.56761 4.56531 9.16106 3.43901Z"
          fill="url(#paint0_linear_1530_30528)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1530_30528"
          x="-6"
          y="-2"
          width="35"
          height="35"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood
            floodOpacity="0"
            result="BackgroundImageFix"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite
            in2="hardAlpha"
            operator="out"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1530_30528"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1530_30528"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1530_30528"
          x1="20.2"
          y1="22.2"
          x2="6.18333"
          y2="6.73333"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#960C23" />
          <stop
            offset="1"
            stopColor="#E71C35"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const EmailIcon = ({ width, height, color }: IconProps) => {
  return (
    <svg
      width={width || "40"}
      height={height || "40"}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <mask
        id="mask0_27_64"
        // mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="8"
        y="8"
        width="24"
        height="24">
        <rect
          x="8.92308"
          y="8.92308"
          width="22.1538"
          height="22.1538"
          fill="url(#pattern0)"
        />
      </mask>
      <g mask="url(#mask0_27_64)">
        <rect
          x="8.92308"
          y="8.92308"
          width="22.1538"
          height="22.1538"
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
            xlinkHref="#image0_27_64"
            transform="scale(0.0104167)"
          />
        </pattern>
        <image
          id="image0_27_64"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADUklEQVR4nO2cv2sUQRTHBxUFIfYG1D9ARSstg+TN3sy5mZeI21r6L1hea2MwEhVbS20EW7XWSkHtVYh9TKyMKBNzEAXDzo/dd7v7/cCDdO/2febmu3t3GaUAAAAAAAAAAAAAAAAAAAD+wRKft8RrlviDJd62mn8Nuoi3/SyM5rtX9cq5xhaMMeaY1e6BIfdT/KL1bNbubMjdr6rqaPbhG+JX0hdoO1KG+GVWCUbzQ+mLsh0rQ7yebc/HtsMRAtzOaLR0NoeANenVZLtaxKvpAjR/FL8Q3c0y5N5nEOC2pC/EdrQM8bcc74ADm6iBY5ueDwQcDAQIAwFDF2DIPS+pPK0Gxmi0ctJo91hcwF7afzfEt6qqOqx6zmQyOWSK5ZuWeLPObJIbht12ubdFsXxJ9ZSiWLlgiF+HzCS5aeQngo+cc3OqJ5Rledxqd9tq/hE6j+TmCQ8iG0a766rj2GK5NNp9ip2DpIBOh/SoZsjOvICuhfQkMGQ7IaArIV1EhKy4AKN5yWj+3OWQLvdC1n+GX3u45L7aRXdDXED0BcxISNvAkJ0uIGPMibrzSXuBAQ3Gmi9acm+6ENKjmJAl926s3eXY+UQR2mAaYv6z8FkM6UlEyE5f38LCwpHU+QQT24DIzVvip7MU0uPId+j4yrUzuedTm9QGsxDSZULINj0f1UaDhJCuUl//nwUQH7JtzKe1Bm2GNJGbzxGybc6nlQZNh/QkIWRjbgI6J6DJkB43ELJS82mtgYkM6f17dJMhO4hfRTjn5vzPuwMH+GW8uMS+/N8BAnd8r1x3Wb0QkLKF5NzC1NAFxIa05JN27wT8FdKan2RY9UkhO1gBsSG9rzZyhKwauoDQu5zQJ9lUBiGgbkhLfOM2KAH/e9KV/M55cAKmFAWfMpqf+fJ/KyEGK2BWgABhIEAYCBAGAoSBAGEgQBgIEAYChIEAYSBAGAgQBgKEgQBhIEAYCOi/ABzYZGOLeDOHYRxZpgWPLPM/44teAQMvQ3wnWYA/jjfwHytQOuOxlR5/HC8Gy4ELy91TufDH8PrjeCGB6w7/Rfbzo/ckrGM74oNCd8ev/OzD34/f1/yJsD7hcYvKfrVv7c6CeDXbng8AAAAAAAAAAAAAAAAAANUnfgPE154U+/L76gAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};

export const CallsIcon = ({ width, height, color }: IconProps) => {
  return (
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
};
export const HomeIcon = ({ width, height, color }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <mask
        id="mask0_84_36159"
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

      <g mask="url(#mask0_84_36159)">
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
            xlinkHref="#image0_84_36159"
            transform="scale(0.0104167)"
          />
        </pattern>
        <image
          id="image0_84_36159"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK9SURBVHgB7ZsviBVRFIfP+mcRBcEggkUsFotgWYuCzSYIFpvRYtxqtBoFg8W2SUGTySSYNggaDAYxCCKIuKz6PJd9w8LbfTv3zJyZM3fm++DX3rt37v0xb943b54IAAAAAABAWVyeBwK4rvmh+am5IdArdzRbmtk825q7Ar1wX/NXdje/yj/NA4HOWNE8lL0bv5hHmkMCrqxqnkn95lfZ0BwTcOGE5pXkb36V15qTAq04o3kn9s2vsqk5K9CI85qP0nzzq3zSXBAwkeTqq7Tf/CrfNFcEsqgEa+YchC2DRcGqy5N5cl+/NZ8D9mGZYC1LcoKV+XvXDe9D2BbIFawqfzT39hkn3YrYNoyDsIldsH5rbh8w3k3NL8N4kxY2q2B911zNGHdNdr715I47SWGzCtYXzSXJ56Lms2H8SQmbVbDea86JnbShm4Z5JiFsVsF6qzktzTmleWOYL310rclIsQrWc81xaU+6yG4Y5h2lsFkF66nmqPhxWPPYMP+ofmFrI1jeTErYvATLm0kIm7dgeTNqYWsiWNekf9Lt6dEJW9eC5c2ohC0J1gfJX0xTwfJmFMLWt2B5U7SwWQXrhfgIljdFClu0YHlTlLANSbC8GbSwDVWwvBmksFkFK+WWlEs6dsta096sSkckwXppPKCZlI91vZ0IW5tHBEunyZpdhc0qWBSwExdh83hEsHTarL2VsHk9Ilg6bdffSNisgkUBB8ckbFbBooC8JGFbXxzcw0zrNrkU+11Gp+vjz2zBUEAwFBDMERkeXV+4B3VN4gwIhgKCoYBgKCAYCgiGAoKhgGCG6AF11H2PL+oGIGdAMBQQDAUEQwHBUEAwFBAMBQRDAcFQQDAUEAwFBEMBwVBAMBQQDAUE08fvAUO7Pz+o4+EMCIYCgqGAYCggGAoIhgKCoQAAAAAAAAAAAICe+A8K9nAbQmx/TQAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};

export const SettingsIcon = ({ width, height, color }: IconProps) => {
  return (
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
};

export const UserExists = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <mask
        id="mask0_1143_41205"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="64"
        height="64">
        <rect
          width="64"
          height="64"
          fill="url(#pattern0)"
        />
      </mask>
      <g mask="url(#mask0_1143_41205)">
        <rect
          width="64"
          height="64"
          fill="#53565A"
        />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <use
            xlinkHref="#image0_1143_41205"
            transform="scale(0.0104167)"
          />
        </pattern>
        <image
          id="image0_1143_41205"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export const FilterIcon = () => {
  return <Filter />;
};

export const SearchIcon = ({
  width = "40px",
  height = "40px",
  color = "black"
}: IconProps) => {
  return (
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
};

export const ClearIcon = ({
  width = "40px",
  height = "40px",
  color = "black"
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 10C14.47 10 10 14.47 10 20C10 25.53 14.47 30 20 30C25.53 30 30 25.53 30 20C30 14.47 25.53 10 20 10ZM20 28C15.59 28 12 24.41 12 20C12 15.59 15.59 12 20 12C24.41 12 28 15.59 28 20C28 24.41 24.41 28 20 28ZM20 18.59L23.59 15L25 16.41L21.41 20L25 23.59L23.59 25L20 21.41L16.41 25L15 23.59L18.59 20L15 16.41L16.41 15L20 18.59Z"
        fill={color}
      />
    </svg>
  );
};

export const ClearDisabledIcon = ({
  width = "40px",
  height = "40px",
  color = "black"
}: IconProps) => {
  return (
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
};

// export const EyeIcon = ({
// 	width = "40px",
// 	height = "40px",
// 	color = "black",
// }: IconProps) => {
// 	return (
// 		<svg
// 			width={width}
// 			height={height}
// 			viewBox="0 0 40 40"
// 			fill="none"
// 			xmlns="http://www.w3.org/2000/svg"
// 			xmlns:xlink="http://www.w3.org/1999/xlink">
// 			<mask
// 				id="mask0_52_217"
// 				style="mask-type:alpha"
// 				maskUnits="userSpaceOnUse"
// 				x="8"
// 				y="8"
// 				width="24"
// 				height="24">
// 				<rect
// 					x="8"
// 					y="8"
// 					width="24"
// 					height="24"
// 					fill="url(#pattern0)"
// 				/>
// 			</mask>
// 			<g mask="url(#mask0_52_217)">
// 				<rect
// 					x="8"
// 					y="8"
// 					width="24"
// 					height="24"
// 					fill={color}
// 				/>
// 			</g>
// 			<defs>
// 				<pattern
// 					id="pattern0"
// 					patternContentUnits="objectBoundingBox"
// 					width="1"
// 					height="1">
// 					<use
// 						xlink:href="#image0_52_217"
// 						transform="scale(0.0104167)"
// 					/>
// 				</pattern>
// 				<image
// 					id="image0_52_217"
// 					width="96"
// 					height="96"
// 					xlink:href="data:image/png;base64,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"
// 				/>
// 			</defs>
// 		</svg>
// 	);
// };

// export const EyeClosedIcon = ({
// 	width = "40px",
// 	height = "40px",
// 	color = "black",
// }: IconProps) => {
// 	return (
// 		<svg
// 			width={width}
// 			height={width}
// 			viewBox="0 0 40 40"
// 			fill="none"
// 			xmlns="http://www.w3.org/2000/svg"
// 			xmlns:xlink="http://www.w3.org/1999/xlink">
// 			<mask
// 				id="mask0_52_301"
// 				style="mask-type:alpha"
// 				maskUnits="userSpaceOnUse"
// 				x="8"
// 				y="8"
// 				width="24"
// 				height="24">
// 				<rect
// 					x="8"
// 					y="8"
// 					width="24"
// 					height="24"
// 					fill="url(#pattern0)"
// 				/>
// 			</mask>
// 			<g mask="url(#mask0_52_301)">
// 				<rect
// 					x="8"
// 					y="8"
// 					width="24"
// 					height="24"
// 					fill={color}
// 				/>
// 			</g>
// 			<defs>
// 				<pattern
// 					id="pattern0"
// 					patternContentUnits="objectBoundingBox"
// 					width="1"
// 					height="1">
// 					<use
// 						xlink:href="#image0_52_301"
// 						transform="scale(0.0104167)"
// 					/>
// 				</pattern>
// 				<image
// 					id="image0_52_301"
// 					width="96"
// 					height="96"
// 					xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAIk0lEQVR4nO1daaxdVRU+zwECiokExWAB44DBAaMVqYbk0nfXOnftO6x1X/WIURwSgnGKjWLiwI+HYVKDButAUaIJJqC/9I+MIUDrhBUTTRqspgWlFoFQBAOFSqlZ517ppbzcvc/ZZ7jnvv0lJ2nyXs9ee31nr7XXsPeLooCAgICAgICAgICAgIBmgIC/1EU+o245ViUMyoUG5aBB/jfBYF3d8qxS5f//CSTUqPxAwgwoP5BQicOdrvxDJATHXAI6nf47DPDDriQEx1wC9MtW5Va1Elqt1ot6uPQW0+aPGJTLDPBPDPAWQvmrAX6AQPYS8IFDpMteQt5hkLcS8s8I5NIuyId78XDt2rUff3E0DyiZhAVVlsHBlw3ybYT8hNs49odAHieQO9SPxfHwXcvLyy+ImooySSDgrxel9KmEoNxPKFcY4HdGTUSZPsGgXFwFCRPPH9XMqcmLmoQ5I+EgIe80wBv7/f7RUVMwbySYkXnarSsiagrmkQQzcty3dmF4atQEzINjNis/+wzIVxqxayqThA7yZwnkix0YbDAgb+1D/6Rer/dydZxJkhyh/+61N7xWf0YgXQNyvgG+ikB+RcBPFUDELYhLr4waQQLIo2WQkBeI+JIOSMeAfMOA7MpNAvCeTlvOimYZhHKuQfmv+8S46tzRAsGwRSg/yhPoEfDTBMNPRrMINRH5vi6uJXdElLxCI2NCfiSHzF+LZgVJkrzQAF/tZ2O5tiyq+g8D8u1sKzc1SVfp3KM6obsDA/zjApzcwbpT2bQ4OE0TeZlMEvI1de6QFgzy94tRvtRqjp4zJ+CNmXZOwN+rRdI0meX8pcjuKlPZvtAknQG+J8PHc1lUJQjlUxmE+xPR0poy4wSD/GndqxPId00sQyI6shgnncEkAX8iqgImHqCzwwK+iYheVnXETCB7DfDmOJYTfeaqRBrkax3l3a9b3KhMxPHg9c7bNpDrVqpEVZm2IJDHdauZrEuOyjtndbKE/EPHD+7BTkdeE5UBDfkJZZuTzQf++bQyYNW5I0LZBsAneEx/gVCudCThzlJKoIR8uaPCbnSxwTWQsFu3ml4rAfinbh+gXJp3nJUnhMPYoDzj8OX/IUtBo1sDCT4rQa2AQb7dQQ8HujGvj4pAq5W8lJDvdVh6e3S3k/X93RrMkY9PGCwOjh9tq60+cJcmAiNfGORNDsrZp90GecfoIp9BII9VRgLwcuSBTnv4bpdgjUC+6TNORO3+6Yd6b6Z+/ed5jUNLa9LihxMB/iSkbSo5VmvWWEizp1oxzDvGAgH/2joIyi8iT5hcKQ1PElCu9JVbG8Ac5Nyquszz8g84KP9+jRh9JtHv9492Nz/FBmvqVH1k1yoZoTxkk7MLw/dnerGW+tIWQMuLtUQYeYKQk3zK9yehA8y+8mv7o91Ey98y9R2N+zFt9u36qACQ5m+8CPAhgTcVMgeUG6wyura6aJHB4evfR+uHrytCeAN8p2WsZ8oigUBuLmIOPei9QXNB080173Aq4BAOzil9ezUBA7xnqplD+VhpWVQYfKaoeRDKdxxM0QftQqH83qL8x4ps0TCW7aemNZpwPiFNX9s6QkDuKsAk8H80GixKcGNZusx8jP7erJPQb/WPsxFAIL+zvkiXicMEC3FeCgP8j6kmqDN4c12HRLJgXNj3N0EjJ6wnTaYxyU9pbaAQwVFumToW8ucmf38WSeh0+I3W1ATIX5y7KFy2oQb5lxVtQ7cfLviskWD7iEYf0uAc5xdq0KDBg/WlMX/IW/hYhrZxtDf08P83KyS4ZQwct6CTMLGcbX+xPOSbiiCiI9Ma7nQF7tda9KyR0G11X6VlSOvYsZydt+/H3hUAcp3vRAzwZgcF7teencND+hpJ0GTl9Xb98JZcyTiFnlrUlKp1JXg2rMaxnDguoDsoUbYb5M/rEVYtFmlxZRSslRMxTwvi7Hrhp6nNb/caSKNel6+TYHhmuVchSIGPX5zQjeU9BuRJKwHIl0e+0LKaU1898H0+EXKyLjnKteuiKBLyrIR0taL8y0H5OwspSSq0wOxUGUO+zSfHDsAnONVbayIhbdQCucvB9BwgkHZUJNLrAhwmpa0bPh3DtDg4baZJcDqzVsL5AW02siXqJszR5tyeP3p2JWxrIgma7yntbgptu3MpwY1JuNpnJSTqE4CXM+yOVnr2afKwMhKAH9bDgnnn7DjwsGXLYE5M6lrfTmWipTVaQLcHa5OKkEe1b7+32Ht1dX1HqpPBYlQFtBU7w/LeWkT9IEmSI7SGq5lYrWQRyt/TffbosN0/delrUURrzIc3XlVCQlXt6Vmd8li4e7THKKoR3VJJkG5UBwzItzLYYz1TcGGdB9s6M17Uyds7f002x8hbfbqUfVF3Aq9wjLsofpCNBF0NvCmOk2PrkHnuSFAYlK9mJOGgFvjViRVZY3YFIS9lWLXNIEGzoi7Z0+cRgfyEnjfWuxjKPHer79a0yujcl+tWumEkqBJtvT4WMu7VLKLuLDTd7CuPJsTSG1S0zR74vrxyNYoENSkudVJjn/B+g/wb9TEE8gUTD/txvPQ2jTbVf2hsoGG/XjfQXb/h5PS0e1veq/dWjC/k+HOeFTkXJIzPVF3gkjc3jXsaQoJCe0i1g2IeSaBZjxMmoa3smj6oX3Ey/UmvKJizLepzThlqzxHI3TOpeOCNTelFLSKCfp9zfaHc57eEg4/OULdFtSA9CIhyhR53qkrp6VYX5CLTHp4yTbZVQ8Kzq6LdPz29RgzkDs9CzEqXd9+qfwdBzUuWYG9VkTAJNQmqLD2DpUf/0xOJwFu0yXV8Vf0jEwXwvaMLudPr62/XBCEhX6Ktk7TIb/LNwK5aEmYJc++Ym4AsK0HNXd3yrtqVQJ5XIQR4kBCUXyMJQfk1khCUXxNGV+0EhxsQEBAQEBAQEBAQEBA1Bf8DiXJQg5C//eQAAAAASUVORK5CYII="
// 				/>
// 			</defs>
// 		</svg>
// 	);
// };

export * from "./EmptyBox";
