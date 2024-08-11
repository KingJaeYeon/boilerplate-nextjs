import { cn } from "@/lib/utils";

export function IconLinearDashBoard({ className }: { className?: string }) {
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
        d="M2.5 2H7.7V7.2H2.5V2ZM10.67 2H15.87V7.2H10.67V2ZM10.67 10.17H15.87V15.37H10.67V10.17ZM2.5 10.17H7.7V15.37H2.5V10.17Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSolidDashBoard({ className }: { className?: string }) {
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
        d="M2.5 2H7.7V7.2H2.5V2ZM10.67 2H15.87V7.2H10.67V2ZM10.67 10.17H15.87V15.37H10.67V10.17ZM2.5 10.17H7.7V15.37H2.5V10.17Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
