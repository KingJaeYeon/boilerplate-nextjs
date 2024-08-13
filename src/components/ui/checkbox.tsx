"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";
import Row from "@/components/Layout/Row";
import { Label } from "@/components/ui/label";
import { IconCheck } from "@/assets/svg";

interface CheckboxType
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  state?: boolean;
  htmlFor?: string;
  label?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxType
>(({ className, label, checked, htmlFor, ...props }, ref) => (
  <Row className={"items-center gap-[10px]"}>
    <CheckboxPrimitive.Root
      ref={ref}
      id={htmlFor}
      data-state={checked ? "checked" : "unchecked"}
      checked={checked}
      className={cn(
        "border-check-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer h-[24px] w-[24px] shrink-0 rounded-[5px] border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <Row className={"items-center justify-center"}>
        <IconCheck className="data-[state=unchecked]:text-check-active-icon data-[state=checked]:text-check-icon" />
      </Row>
    </CheckboxPrimitive.Root>
    {label && (
      <Label className={"body3 cursor-pointer"} htmlFor={htmlFor}>
        {label}
      </Label>
    )}
  </Row>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
