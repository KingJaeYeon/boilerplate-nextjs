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
>(({ className, label, checked, onCheckedChange, htmlFor, ...props }, ref) => (
  <Row className={"items-center gap-[10px]"}>
    <CheckboxPrimitive.Root
      ref={ref}
      id={htmlFor}
      data-state={checked === true ? "checked" : "unchecked"}
      checked={checked}
      onCheckedChange={(e) =>
        onCheckedChange && onCheckedChange(e === "indeterminate" ? true : e)
      }
      className={cn(
        "data-[state=unchecked]:text-check-icon data-[state=checked]:text-check-active-icon border-check-border data-[state=checked]:bg-check-active data-[state=checked]:border-check-active-border peer h-[24px] w-[24px] shrink-0 rounded-[5px] border disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <Row className={"items-center justify-center"}>
        <IconCheck />
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
