import * as React from "react";
import Text from "@/components/Layout/Text";
import { cn } from "@/lib/utils";
import IconSearch from "@/assets/svg/IconSearch";
import IconDelete from "@/assets/svg/IconDelete";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: "none" | "search" | "delete" | "length";
  iconOnClick?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className, //
      type,
      icon = "none",
      iconOnClick = () => {},
      maxLength,
      value,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative w-full")}>
        <input
          type={type}
          className={cn(
            "placeholder:text-input-foreground body4 placeholder:body4 border-input-border flex h-[42px] w-full rounded-full border bg-background px-3 py-2 indent-[6px] placeholder:indent-[6px] focus-visible:outline-none disabled:opacity-10",
            // "file:bg-transparent file:text-sm bg-background ring-offset-background file:border-0 file:font-medium focus-visible:outline-none disabled:cursor-not-allowed",
            // "focus-visible:border-input-focus-border focus-visible:placeholder-input-focus-foreground bg-background ring-offset-background file:border-0 file:font-medium  focus-visible:outline-none ",
            icon !== "none" ? "pr-[40px]" : "",
            className,
          )}
          ref={ref}
          {...props}
        />
        <InputIcon
          icon={icon}
          iconOnClick={iconOnClick}
          maxLength={maxLength}
          value={value}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };

function InputIcon({
  icon,
  iconOnClick,
  maxLength,
  value,
}: {
  icon: "none" | "search" | "delete" | "length";
  iconOnClick: () => void;
  maxLength?: number;
  value?: any;
}) {
  if (icon === "none") {
    return null;
  }

  return (
    <div
      className={"absolute right-[14px] top-[11px] cursor-pointer"}
      onClick={iconOnClick}
    >
      {icon === "search" && <IconSearch className={"h-[20px] w-[20px]"} />}
      {!!value && value.length > 0 && icon === "delete" && (
        <IconDelete className={"h-[20px] w-[20px]"} />
      )}
      {icon === "length" && (
        <Text className="body5 pt-[3px]">
          {`${!value?.length ? 0 : value?.length} `}
          <span className="text-gray-neutral">{`/ ${maxLength}`}</span>
        </Text>
      )}
    </div>
  );
}
