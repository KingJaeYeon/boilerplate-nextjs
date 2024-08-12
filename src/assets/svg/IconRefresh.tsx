import { cn } from "@/lib/utils";

export function IconRefresh({ className }: { className?: string }) {
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
        d="M17 2.72555V7.08919M17 7.08919H12.6364M17 7.08919L13.6255 3.91828C12.8438 3.13625 11.8768 2.56498 10.8147 2.25775C9.75255 1.95053 8.6299 1.91737 7.55148 2.16138C6.47307 2.40538 5.47404 2.91859 4.64761 3.65313C3.82119 4.38766 3.1943 5.31958 2.82545 6.36192M1 14.3619V9.99828M1 9.99828H5.36364M1 9.99828L4.37455 13.1692C5.15618 13.9512 6.12318 14.5225 7.18532 14.8297C8.24745 15.1369 9.3701 15.1701 10.4485 14.9261C11.5269 14.6821 12.526 14.1689 13.3524 13.4343C14.1788 12.6998 14.8057 11.7679 15.1745 10.7256"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
