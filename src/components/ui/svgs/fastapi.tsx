import type { SVGProps } from "react";

const FastApi = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" role="img" aria-label="FastAPI">
    <title>FastAPI</title>
    <path fill="#009688" d="M128 20 220 76v104l-92 56-92-56V76z" />
    <path fill="#fff" d="M92 86h24v84H92zm48 0h24v84h-24z" />
    <path fill="#fff" d="M92 124h72v24H92z" opacity="0.85" />
  </svg>
);

export { FastApi };