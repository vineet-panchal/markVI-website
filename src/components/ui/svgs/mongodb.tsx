import type { SVGProps } from "react";

const Mongodb = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" role="img" aria-label="MongoDB">
    <title>MongoDB</title>
    <path
      fill="#10AA50"
      d="M128 16c18 28 33 58 41 92 9 38 6 74-4 109-2 8-7 18-10 23-2 4-6 10-10 14-2-7-4-16-5-24-4-30-2-61 1-91 2-21 2-42-2-63-2-18-6-42-11-60z"
    />
    <path
      fill="#2D9E46"
      d="M117 18c1 10 0 21-2 34-5 30-4 61 1 91 6 34 6 61 3 89-1 8-3 17-5 23-4-6-8-15-10-23-10-35-13-71-4-109 8-34 23-64 41-92z"
    />
    <path
      fill="#fff"
      d="M128 60c-14 17-21 36-24 57-3 23 0 47 6 69 4 13 11 28 18 38 7-10 14-25 18-38 6-22 9-46 6-69-3-21-10-40-24-57z"
      opacity="0.9"
    />
  </svg>
);

export { Mongodb };