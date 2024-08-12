import { cn } from "@/lib/utils";

export function IconWallet({ className }: { className?: string }) {
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
        d="M3.41875 4.35H16.6688M6.21875 4.35L13.8062 1.5L14.875 4.35M16.6688 11.1063V13.7625C16.6688 14.6375 15.9562 15.35 15.0812 15.35H3.0875C2.2125 15.35 1.5 14.6375 1.5 13.7625V4.10625C1.5 3.23125 2.2125 2.51875 3.0875 2.51875H11.0938M14.1875 2.51875H15.0812C15.9562 2.51875 16.6688 3.23125 16.6688 4.10625V8.4125M13.8437 8.4125H17.25V11.1063H13.8437C13.1 11.1063 12.5 10.5 12.5 9.7625C12.5 9.01875 13.1062 8.41875 13.8437 8.41875V8.4125Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
