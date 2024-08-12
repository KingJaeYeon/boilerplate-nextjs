import { cn } from "@/lib/utils";

export function IconOrderList({ className }: { className?: string }) {
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
        d="M7 4H15M7 9H15M7 14H15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 5.5H4.5M4.5 10.5H2.5C2.5 10.266 4.35 9.424 4.35 8.266C4.30778 8.05895 4.19835 7.87163 4.03872 7.73317C3.87909 7.59471 3.6782 7.51284 3.46726 7.5003C3.25632 7.48776 3.04714 7.54524 2.87222 7.66381C2.69731 7.78238 2.56646 7.95541 2.5 8.156M2.5 14.846C2.56637 15.0466 2.69713 15.2197 2.87197 15.3383C3.04681 15.457 3.25594 15.5145 3.46687 15.5021C3.6778 15.4897 3.87872 15.4079 4.03842 15.2696C4.19811 15.1312 4.30765 14.944 4.35 14.737C4.36107 14.5612 4.30545 14.3877 4.19423 14.2511C4.08302 14.1145 3.92439 14.0248 3.75 14C3.92542 13.9779 4.08561 13.8891 4.19733 13.7521C4.30905 13.6151 4.36372 13.4403 4.35 13.264C4.30765 13.057 4.19811 12.8698 4.03842 12.7314C3.87872 12.5931 3.6778 12.5113 3.46687 12.4989C3.25594 12.4865 3.04681 12.544 2.87197 12.6627C2.69713 12.7813 2.56637 12.9544 2.5 13.155"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.50004 5.99997C3.36743 5.99997 3.24025 5.94729 3.14649 5.85353C3.05272 5.75976 3.00004 5.63258 3.00004 5.49997V3.08497L2.72404 3.22297C2.60549 3.28238 2.46819 3.29226 2.34236 3.25043C2.21652 3.20861 2.11245 3.11852 2.05304 2.99997C1.92904 2.75297 2.03004 2.67597 2.27704 2.55297L3.27704 2.05297C3.35323 2.01501 3.43785 1.99712 3.52289 2.00101C3.60793 2.0049 3.69057 2.03044 3.76297 2.07521C3.83538 2.11997 3.89516 2.18248 3.93664 2.25682C3.97813 2.33115 3.99995 2.41484 4.00004 2.49997V5.49997C4.00004 5.63258 3.94736 5.75976 3.85359 5.85353C3.75982 5.94729 3.63265 5.99997 3.50004 5.99997Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconUnOrderList({ className }: { className?: string }) {
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
        d="M6 4H15M6 9H15M6 14H15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 4H3.0001M3 9H3.0001M3 14H3.0001"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
