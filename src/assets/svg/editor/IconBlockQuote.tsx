import { cn } from "@/lib/utils";

export default function IconBlockQuote({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className, "text-icon")}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path d="M7 5H4V8H7V5Z" fill="currentColor" />
      <path d="M14 5H11V8H14V5Z" fill="currentColor" />
      <path d="M7 8C7 12.031 4 13 4 13L7 8Z" fill="currentColor" />
      <path d="M14 8C14 12.031 11 13 11 13L14 8Z" fill="currentColor" />
      <path
        d="M7 8V5H4V8H7ZM7 8C7 12.031 4 13 4 13M14 8V5H11V8H14ZM14 8C14 12.031 11 13 11 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
