import { cn } from "@/lib/utils";

export default function Twitter({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className, "text-black dark:text-white")}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <path
        d="M19.3287 3H22.7047L15.3306 11.4247L24 22.8887H17.2072L11.8934 15.9328L5.80436 22.8887H2.43857L10.3227 13.8725L2 3H8.96616L13.7701 9.3542L19.3287 3ZM18.1456 20.8693H20.0121L7.94622 4.91748H5.93695L18.1456 20.8693Z"
        fill="currentColor"
      />
    </svg>
  );
}
