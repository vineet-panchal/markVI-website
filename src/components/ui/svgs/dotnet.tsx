import type { SVGProps } from "react";

const Dotnet = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" role="img" aria-label=".NET">
    <title>.NET</title>
    <rect width="256" height="256" rx="44" fill="#512BD4" />
    <path
      fill="#fff"
      d="M58 108h26v40h40v-40h26v104h-26v-40H84v40H58zm126 0h72v24h-24v80h-26v-80h-22z"
    />
  </svg>
);

export { Dotnet };