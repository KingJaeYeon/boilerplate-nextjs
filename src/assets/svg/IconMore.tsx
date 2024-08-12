import React from "react";
import { cn } from "@/lib/utils";

export default function IconMore({ className }: { className?: string }) {
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
        d="M9.38 8.62C9.86 8.62 10.26 9.01 10.26 9.5C10.26 9.99 9.87 10.38 9.38 10.38C8.89 10.38 8.5 9.99 8.5 9.5C8.5 9.01 8.89 8.62 9.38 8.62ZM9.38 2.5C9.86 2.5 10.26 2.89 10.26 3.38C10.26 3.87 9.87 4.26 9.38 4.26C8.89 4.26 8.5 3.87 8.5 3.38C8.5 2.89 8.89 2.5 9.38 2.5ZM9.38 14.75C9.86 14.75 10.26 15.14 10.26 15.63C10.26 16.12 9.87 16.51 9.38 16.51C8.89 16.51 8.5 16.12 8.5 15.63C8.5 15.14 8.89 14.75 9.38 14.75Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
