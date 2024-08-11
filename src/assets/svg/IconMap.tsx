import { cn } from "@/lib/utils";

export function IconLinearMap({ className }: { className?: string }) {
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
        d="M5.9 13.2L1 16V4.8L5.9 2M5.9 13.2L11.5 16M5.9 13.2V2M11.5 16L16.4 13.2V2L11.5 4.8M11.5 16V4.8M11.5 4.8L5.9 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSolidMap({ className }: { className?: string }) {
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
        d="M1 4.8V16L5.9 13.2L11.5 16L16.4 13.2V2L11.5 4.8L5.9 2L1 4.8Z"
        fill="currentColor"
      />
      <path
        d="M5.9 13.2L1 16V4.8L5.9 2M5.9 13.2L11.5 16M5.9 13.2V2M11.5 16L16.4 13.2V2L11.5 4.8M11.5 16V4.8M11.5 4.8L5.9 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
