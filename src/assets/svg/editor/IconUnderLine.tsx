import { cn } from "@/lib/utils";

export default function IconUnderLine({ className }: { className?: string }) {
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
        d="M5 3V9C5.00317 10.0599 5.42561 11.0755 6.17507 11.8249C6.92453 12.5744 7.94011 12.9968 9 13C10.0599 12.9968 11.0755 12.5744 11.8249 11.8249C12.5744 11.0755 12.9968 10.0599 13 9V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 15H3.5C3.22386 15 3 15.2239 3 15.5C3 15.7761 3.22386 16 3.5 16H14.5C14.7761 16 15 15.7761 15 15.5C15 15.2239 14.7761 15 14.5 15Z"
        fill="currentColor"
      />
    </svg>
  );
}
