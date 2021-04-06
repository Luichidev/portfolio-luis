import * as React from "react";

export default function Menu(props) {
  return (
    <svg
      height={21}
      width={21}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke="rgba(255, 255, 255, 0.9)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M4 8h24M4 16h24M4 24h24"
      />
    </svg>
  );
}
