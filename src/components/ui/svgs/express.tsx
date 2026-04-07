import type { SVGProps } from "react";

const Express = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" role="img" aria-label="Express.js">
    <title>Express.js</title>
    <rect width="256" height="256" rx="36" fill="#111111" />
    <path fill="#fff" d="M56 96h144v20H56zm0 44h110v20H56zm0 44h144v20H56z" />
    <path fill="#fff" d="M180 92h20v72h-20z" />
  </svg>
);

export { Express };