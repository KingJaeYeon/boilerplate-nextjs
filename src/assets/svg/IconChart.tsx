import { cn } from "@/lib/utils";

export function IconChart({ className }: { className?: string }) {
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
        d="M2 2V16H16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12.5L8 7L11 10L15.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconLinearChart({ className }: { className?: string }) {
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
        d="M2 14L6.86957 7.125L10.5217 10.875L16 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCandleChart({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className, "text-icon")}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path d="M5 4H6V16H5V4Z" fill="currentColor" />
      <path d="M12 2H13V16H12V2Z" fill="currentColor" />
      <path d="M3 6H8V14H3V6Z" fill="currentColor" />
      <path d="M10 4H15V14H10V4Z" fill="currentColor" />
    </svg>
  );
}

export function IconLinearPieChart({ className }: { className?: string }) {
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
        d="M15.447 11.7228C15.0017 12.7759 14.3052 13.7039 13.4184 14.4257C12.5315 15.1474 11.4814 15.6409 10.3598 15.8631C9.23821 16.0852 8.07926 16.0292 6.98428 15.7C5.88931 15.3707 4.89166 14.7783 4.07855 13.9744C3.26545 13.1705 2.66164 12.1797 2.31992 11.0886C1.9782 9.99744 1.90898 8.8392 2.1183 7.71513C2.32762 6.59105 2.80911 5.53537 3.52068 4.64037C4.23225 3.74537 5.15224 3.0383 6.2002 2.58099M16 8.99986C16 8.08062 15.8189 7.17039 15.4672 6.32113C15.1154 5.47187 14.5998 4.70021 13.9498 4.05021C13.2998 3.40021 12.5281 2.88461 11.6789 2.53283C10.8296 2.18106 9.91938 2 9.00014 2V8.99986H16Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSolidPieChart({ className }: { className?: string }) {
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
        d="M8.98 2.73C5.13 2.73 2 5.85 2 9.71C2 13.57 5.13 16.69 8.98 16.69C12.83 16.69 15.96 13.56 15.96 9.71H8.98V2.73Z"
        fill="currentColor"
      />
      <path
        d="M10.03 2V8.62L16.79 8.76C16.79 5.03 13.76 2 10.03 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
