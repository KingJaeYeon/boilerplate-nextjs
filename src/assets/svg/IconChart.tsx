import { cn } from "@/lib/utils";

export function IconChart({ className }: { className?: string }) {
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
        d="M2 2V16H16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12.5L8 7L11 10L15.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinearChart({ className }: { className?: string }) {
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
        d="M2 14L6.86957 7.125L10.5217 10.875L16 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CandleChart({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className, "text-icon")}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path d="M5 4H6V16H5V4Z" fill="currentColor" />
      <path d="M12 2H13V16H12V2Z" fill="currentColor" />
      <path d="M3 6H8V14H3V6Z" fill="currentColor" />
      <path d="M10 4H15V14H10V4Z" fill="currentColor" />
    </svg>
  );
}
