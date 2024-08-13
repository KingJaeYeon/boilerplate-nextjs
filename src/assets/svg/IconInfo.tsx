import { cn } from "@/lib/utils";

export function IconInfo({ className }: { className?: string }) {
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
        d="M8.98023 15.4C8.38023 15.4 7.89023 14.91 7.89023 14.31V4.09C7.89023 3.49 8.38023 3 8.98023 3C9.58023 3 10.0702 3.49 10.0702 4.09V14.31C10.0702 14.91 9.58023 15.4 8.98023 15.4ZM5.17023 14.31V10.61C5.17023 10.01 4.68023 9.52 4.08023 9.52C3.48023 9.52 2.99023 10.01 2.99023 10.61V14.31C2.99023 14.91 3.48023 15.4 4.08023 15.4C4.68023 15.4 5.17023 14.91 5.17023 14.31ZM14.9502 14.31V7.35C14.9502 6.75 14.4602 6.26 13.8602 6.26C13.2602 6.26 12.7702 6.75 12.7702 7.35V14.31C12.7702 14.91 13.2602 15.4 13.8602 15.4C14.4602 15.4 14.9502 14.91 14.9502 14.31Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconMoreInfo({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className, "text-icon")}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <g clipPath="url(#clip0_10593_155407)">
        <path
          d="M9 12.2V9M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9ZM9.5 5.8C9.5 6.07614 9.27614 6.3 9 6.3C8.72386 6.3 8.5 6.07614 8.5 5.8C8.5 5.52386 8.72386 5.3 9 5.3C9.27614 5.3 9.5 5.52386 9.5 5.8Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_10593_155407">
          <rect width="18" height="18" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}
