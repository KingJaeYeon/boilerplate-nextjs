import { cn } from "@/lib/utils";

export function IconLinearLogout({ className }: { className?: string }) {
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
        d="M6.66667 16H3.55556C3.143 16 2.74733 15.8361 2.45561 15.5444C2.16389 15.2527 2 14.857 2 14.4444V3.55556C2 3.143 2.16389 2.74733 2.45561 2.45561C2.74733 2.16389 3.143 2 3.55556 2H6.66667M12.1111 12.8889L16 9M16 9L12.1111 5.11111M16 9H6.66667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSolidLogout({ className }: { className?: string }) {
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
        d="M6.66667 16H3.55556C3.143 16 2.74733 15.8361 2.45561 15.5444C2.16389 15.2527 2 14.857 2 14.4444V3.55556C2 3.143 2.16389 2.74733 2.45561 2.45561C2.74733 2.16389 3.143 2 3.55556 2H6.66667"
        fill="currentColor"
      />
      <path
        d="M6.66667 16H3.55556C3.143 16 2.74733 15.8361 2.45561 15.5444C2.16389 15.2527 2 14.857 2 14.4444V3.55556C2 3.143 2.16389 2.74733 2.45561 2.45561C2.74733 2.16389 3.143 2 3.55556 2H6.66667V16Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1109 12.8889L15.9998 8.99997M15.9998 8.99997L12.1109 5.11108M15.9998 8.99997H6.6665"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
