import * as React from "react";

export default function Facebook(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      width={40}
      height={40}
      xmlns="http://www.w3.org/2000/svg"
      stroke="#FFFFFF"
      fill="#FFFFFF"
      {...props}
    >
      <path d="M75 512h167V330h-60v-60h60v-75c0-41.355 33.645-75 75-75h75v60h-60c-16.543 0-30 13.457-30 30v60h87.293l-10 60H302v182h135c41.355 0 75-33.645 75-75V75c0-41.355-33.645-75-75-75H75C33.645 0 0 33.645 0 75v362c0 41.355 33.645 75 75 75zM30 75c0-24.813 20.188-45 45-45h362c24.813 0 45 20.188 45 45v362c0 24.813-20.188 45-45 45H332V360h72.707l20-120H332v-30h90V90H317c-57.898 0-105 47.102-105 105v45h-60v120h60v122H75c-24.813 0-45-20.188-45-45zm0 0" />
    </svg>
  );
}
