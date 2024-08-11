import { cn } from "@/lib/utils";

export function IconHome({ className }: { className?: string }) {
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
        d="M6.66667 16.5556V8.77778H11.3333V16.5556M2 6.44444L9 1L16 6.44444V15C16 15.4126 15.8361 15.8082 15.5444 16.0999C15.2527 16.3917 14.857 16.5556 14.4444 16.5556H3.55556C3.143 16.5556 2.74733 16.3917 2.45561 16.0999C2.16389 15.8082 2 15.4126 2 15V6.44444Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
