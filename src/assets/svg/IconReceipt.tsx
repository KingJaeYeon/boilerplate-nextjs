import React from "react";
import { cn } from "@/lib/utils";

export default function IconReceipt({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className, "text-icon")}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M5.5 5.5H12.5M5.5 9.5H12.5M16 17V3C16 1.89543 15.1046 1 14 1H4C2.89543 1 2 1.89543 2 3V17L4.04597 14.6617C4.82469 13.7718 6.20139 13.7482 7.0102 14.6109L7.79093 15.4437C8.58107 16.2865 9.91893 16.2865 10.7091 15.4437L11.3705 14.7382C12.2207 13.8312 13.6836 13.9115 14.4295 14.9061L16 17Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
