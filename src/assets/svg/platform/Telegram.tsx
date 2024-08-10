import { cn } from "@/lib/utils";

export default function Telegram({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className, "text-black dark:text-white")}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_3175_151139)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0C5.37264 0 0 5.37264 0 12C0 18.6274 5.37264 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37264 18.6274 0 12 0ZM17.5622 8.16096C17.3818 10.0584 16.6003 14.663 16.2026 16.7882C16.0344 17.6875 15.7032 17.989 15.3826 18.0185C14.6856 18.0826 14.1566 17.5579 13.4815 17.1156C12.4253 16.4232 11.8286 15.9924 10.8036 15.3168C9.61872 14.5361 10.387 14.107 11.0621 13.4057C11.2387 13.2221 14.3093 10.4294 14.3686 10.176C14.376 10.1443 14.383 10.0262 14.3126 9.96384C14.2426 9.90144 14.1389 9.9228 14.0642 9.93984C13.9584 9.96384 12.2712 11.0791 9.00264 13.2854C8.52384 13.6142 8.08992 13.7746 7.70136 13.7662C7.27296 13.7568 6.4488 13.524 5.83608 13.3248C5.08464 13.0805 4.48728 12.9514 4.53936 12.5364C4.56648 12.3204 4.86408 12.0994 5.43216 11.8735C8.9304 10.3493 11.2632 9.34464 12.4303 8.85912C15.763 7.47312 16.4554 7.23216 16.9066 7.22424C17.0059 7.22256 17.2277 7.24704 17.3717 7.36368C17.4931 7.46208 17.5265 7.59528 17.5426 7.68864C17.5586 7.782 17.5786 7.99488 17.5627 8.16096H17.5622Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_3175_151139"
          x="-4"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3175_151139"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3175_151139"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
