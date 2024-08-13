import React from "react";
import { cn } from "@/lib/utils";

export function IconMaximize({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className, "text-icon")}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <g clipPath="url(#clip0_10647_176895)">
        <path
          d="M5.44444 1H2.77778C2.30628 1 1.8541 1.1873 1.5207 1.5207C1.1873 1.8541 1 2.30628 1 2.77778V5.44444M17 5.44444V2.77778C17 2.30628 16.8127 1.8541 16.4793 1.5207C16.1459 1.1873 15.6937 1 15.2222 1H12.5556M12.5556 17H15.2222C15.6937 17 16.1459 16.8127 16.4793 16.4793C16.8127 16.1459 17 15.6937 17 15.2222V12.5556M1 12.5556V15.2222C1 15.6937 1.1873 16.1459 1.5207 16.4793C1.8541 16.8127 2.30628 17 2.77778 17H5.44444"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_10647_176895">
          <rect width="18" height="18" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}
