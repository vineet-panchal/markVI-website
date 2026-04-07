import type { SVGProps } from "react";

const Firebase = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" role="img" aria-label="Firebase">
    <title>Firebase</title>
    <path fill="#FFC24A" d="M70 210 128 46l35 74-28 24z" />
    <path fill="#F58220" d="M163 120 128 46l-28 71 20 28z" />
    <path fill="#FCCA3F" d="M70 210h116l-58-46z" />
    <path fill="#FFCB2B" d="M128 128 70 210l58-46 58 46z" opacity="0.35" />
  </svg>
);

export { Firebase };