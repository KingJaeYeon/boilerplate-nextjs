import { cn } from "@/lib/utils";

export function IconLoad({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className, "text-icon")}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <g clip-path="url(#clip0_10601_266479)">
        <path
          d="M9 1V4.2M9 13.8V17M3.344 3.344L5.608 5.608M12.392 12.392L14.656 14.656M1 9H4.2M13.8 9H17M3.344 14.656L5.608 12.392M12.392 5.608L14.656 3.344"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_10601_266479">
          <rect width="18" height="18" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}
