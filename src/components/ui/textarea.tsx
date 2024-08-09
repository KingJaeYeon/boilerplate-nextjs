import * as React from "react";

import { cn } from "@/lib/utils";
import Text from "@/components/Layout/Text";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className, //
      errorMessage,
      disabled,
      value,
      maxLength,
      readOnly,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          "relative w-full max-w-[400px]",
          className,
          disabled && "cursor-not-allowed",
        )}
      >
        <textarea
          className={cn(
            "focus:border-input-focus-border hover:border-input-focus-border placeholder:text-input-placeholder body4 placeholder:body4 border-input-border disabled:border-input-disabled-border disabled:text-input-disabled-foreground flex min-h-[140px] w-full max-w-full resize-none rounded-[10px] border bg-input px-[20px] py-[15px] focus-visible:outline-none disabled:pointer-events-none disabled:placeholder:opacity-20",
            errorMessage && "border-red hover:border-red focus:border-red",
            !!maxLength ? "pr-[80px]" : "",
          )}
          ref={ref}
          value={value}
          maxLength={maxLength}
          disabled={disabled}
          readOnly={readOnly}
          {...props}
        />
        {!readOnly && maxLength && (
          <div
            className={cn(
              "absolute bottom-[15px] right-[20px]",
              disabled && "opacity-10",
              errorMessage && "bottom-[35px]",
            )}
          >
            <Text className="body5 pt-[3px]">
              {`${!value ? 0 : value.toString().length} `}
              <span className="text-gray-neutral">{`/ ${maxLength}`}</span>
            </Text>
          </div>
        )}
        {errorMessage && (
          <Text className={"text-red body7 pl-[20px] pt-[5px]"}>
            {errorMessage}
          </Text>
        )}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
