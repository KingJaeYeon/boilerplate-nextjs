import { cn } from "@/lib/utils";

export function IconCategory({ className }: { className?: string }) {
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
        d="M5.58008 4.5H16.1801M5.58008 9.39H16.1801M5.58008 14.29H16.1801"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 4.5H1.51M1.5 9.39H1.51M1.5 14.29H1.51"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
