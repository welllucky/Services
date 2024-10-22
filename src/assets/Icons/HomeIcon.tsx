import { IconProps } from "@/types";

export const HomeIcon = ({ width, height, color }: IconProps) => (
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
