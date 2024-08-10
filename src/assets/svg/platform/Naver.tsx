import { cn } from "@/lib/utils";

export default function Naver({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className, "text-[#03CF5D] dark:text-white")}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <path
        d="M16.628 13.704L9.176 3H3V23H9.47V12.296L16.922 23H23.098V3H16.628V13.704Z"
        fill="currentColor"
      />
    </svg>
  );
}
