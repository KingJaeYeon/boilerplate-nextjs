import { cn } from "@/lib/utils";

export default function FaceBook({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <circle cx="13" cy="13" r="12.5" fill="white" />
      <path
        d="M13 0C5.81912 0 0 5.85487 0 13.0796C0 19.6089 4.75312 25.0185 10.9688 26V16.8594H7.66838V13.0813H10.9688V10.1985C10.9688 6.92088 12.909 5.109 15.8795 5.109C17.3014 5.109 18.7882 5.36413 18.7882 5.36413V8.58325H17.1486C15.5334 8.58325 15.0312 9.59075 15.0312 10.6275V13.0796H18.6371L18.0603 16.8594H15.0312V26C21.2469 25.0185 26 19.6089 26 13.0796C26 5.85487 20.1809 0 13 0Z"
        fill="url(#paint0_linear_7086_21015)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_7086_21015"
          x1="13.0006"
          y1="25.2219"
          x2="13.0006"
          y2="-0.00481312"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0062E0" />
          <stop offset="1" stopColor="#19AFFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FaceBook2({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className, "text-black dark:text-white")}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
