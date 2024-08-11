import { cn } from "@/lib/utils";

export function IconLinearReport({ className }: { className?: string }) {
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
        d="M3 11.4C3 11.4 3.8 10.6 6.2 10.6C8.6 10.6 10.2 12.2 12.6 12.2C15 12.2 15.8 11.4 15.8 11.4V1.8C15.8 1.8 15 2.6 12.6 2.6C10.2 2.6 8.6 1 6.2 1C3.8 1 3 1.8 3 1.8V11.4ZM3 11.4V17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSolidReport({ className }: { className?: string }) {
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
        d="M3 11.4C3 11.4 3.8 10.6 6.2 10.6C8.6 10.6 10.2 12.2 12.6 12.2C15 12.2 15.8 11.4 15.8 11.4V1.8C15.8 1.8 15 2.6 12.6 2.6C10.2 2.6 8.6 1 6.2 1C3.8 1 3 1.8 3 1.8V11.4Z"
        fill="currentColor"
      />
      <path
        d="M3 11.4C3 11.4 3.8 10.6 6.2 10.6C8.6 10.6 10.2 12.2 12.6 12.2C15 12.2 15.8 11.4 15.8 11.4V1.8C15.8 1.8 15 2.6 12.6 2.6C10.2 2.6 8.6 1 6.2 1C3.8 1 3 1.8 3 1.8V11.4ZM3 11.4V17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
