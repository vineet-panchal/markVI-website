import type { SVGProps } from "react";

const Sql = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 512 512" role="img" aria-label="SQL">
    <title>SQL</title>
    <ellipse cx="256" cy="108" rx="160" ry="58" fill="#336791" />
    <path fill="#336791" d="M96 108v128c0 32 71.6 58 160 58s160-26 160-58V108" />
    <ellipse cx="256" cy="236" rx="160" ry="58" fill="#3E6E9E" />
    <ellipse cx="256" cy="364" rx="160" ry="58" fill="#4B7AA8" />
    <path
      fill="#fff"
      d="M156 173h43c28 0 47 12 47 34 0 15-8 25-23 31l25 35h-29l-21-31h-11v31h-27zm27 21v29h14c15 0 22-5 22-15 0-9-7-14-22-14zm95-21h25l34 99h-27l-7-21h-34l-7 21h-26zm8 61h22l-11-34zM307 173h27v78h41v21h-68z"
    />
  </svg>
);

export { Sql };