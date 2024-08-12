import React from "react";

export default function IconPointer({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M2 2.5C1.72386 2.5 1.5 2.72386 1.5 3V8C1.5 8.15738 1.5741 8.30557 1.7 8.4L5.7 11.4C5.87778 11.5333 6.12222 11.5333 6.3 11.4L10.3 8.4C10.4259 8.30557 10.5 8.15738 10.5 8V3C10.5 2.72386 10.2761 2.5 10 2.5H2Z"
        fill="#868F97"
        stroke="white"
        strokeLinejoin="round"
      />
      <path d="M4 5H8V6.78571L6 8.5L4 6.78571V5Z" fill="white" />
    </svg>
  );
}
