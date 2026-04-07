import type { SVGProps } from "react";

const Cpp = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 512 512" role="img" aria-label="C++">
    <title>C++</title>
    <path fill="#00599C" d="M256 0 468.3 128v256L256 512 43.7 384V128z" />
    <path
      fill="#fff"
      d="M256 116.8 378.4 187v138L256 395.2 133.6 325V187z"
      opacity="0.12"
    />
    <path
      fill="#fff"
      d="M213.7 179.8c20.1 0 39 8.6 52.2 23.8l-32.8 19a42.6 42.6 0 0 0-20.4-4.8c-32 0-57.9 26-57.9 58s25.9 58 57.9 58c7.4 0 14.6-1.4 21.3-4.1l32.6 18.8a90.9 90.9 0 0 1-53.9 17.1c-50.2 0-90.8-40.6-90.8-90.8s40.6-89.8 91.8-89.8zm145.4 1.7h31.8v41.5h41.4V255h-41.4v41.5h-31.8V255H317.8v-31.8h41.3zm86.6 0h31.8v41.5h41.5V255h-41.5v41.5h-31.8V255h-41.4v-31.8h41.4z"
    />
  </svg>
);

export { Cpp };