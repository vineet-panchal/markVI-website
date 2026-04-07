import type { SVGProps } from "react";

const Azure = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" role="img" aria-label="Azure">
    <title>Azure</title>
    <path fill="#0078D4" d="M141 22 68 149h41l-15 62 94-91h-46z" />
    <path fill="#50A7EA" d="M180 201 82 201l44-52z" opacity="0.75" />
  </svg>
);

export { Azure };