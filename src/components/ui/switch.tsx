"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, children, ...props }, ref) => {
  return (
    <SwitchPrimitives.Root
      className={cn(
        "data-[state=checked]:bg-toggle-active-background data-[state=unchecked]:bg-toggle-disabled-background peer relative inline-flex h-[24px] w-[60px] shrink-0 cursor-pointer items-center rounded-full border-2 border-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
      ref={ref}
    >
      {!children && (
        <>
          <SwitchThumb />
          {props.checked ? (
            <div
              className={`body8 text-toggle-active-foreground absolute right-3 ${!props.checked && "hidden"} `}
            >
              ON
            </div>
          ) : (
            <div
              className={`body8 text-toggle-disabled-foreground absolute left-1.5 ${props.checked && "hidden"} `}
            >
              OFF
            </div>
          )}
        </>
      )}
      {children}
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

const SwitchThumb = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Thumb>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Thumb>
>(({ className, children, ...props }, ref) => (
  <SwitchPrimitives.Thumb
    ref={ref}
    className={cn(
      "data-[state=checked]:bg-toggle-active-foreground data-[state=unchecked]:bg-toggle-disabled-foreground pointer-events-none block h-[20px] w-[20px] rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-0.5 data-[state=unchecked]:translate-x-9",
      className,
    )}
    {...props}
  >
    {children}
  </SwitchPrimitives.Thumb>
));
SwitchThumb.displayName = SwitchPrimitives.Thumb.displayName;

export { Switch, SwitchThumb };
