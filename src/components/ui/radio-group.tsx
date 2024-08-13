"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";
import Row from "@/components/Layout/Row";
import { Label } from "@/components/ui/label";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("flex gap-[10px]", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label?: string;
  htmlFor?: string;
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, label, htmlFor, ...props }, ref) => {
  return (
    <Row className="items-center gap-[10px]">
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          "data-[state=checked]:bg-radio-active data-[state=checked]:border-radio-active-border bg-radio border-radio-border group h-[24px] w-[24px] rounded-full border-[1.5px] disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        id={htmlFor}
        {...props}
      >
        <Row className={"items-center justify-center"}>
          <Row
            className={
              "bg-radio-icon group-data-[state=checked]:bg-radio-active-icon h-[12px] w-[12px] rounded-full"
            }
          />
        </Row>
      </RadioGroupPrimitive.Item>
      {label && <Label htmlFor={htmlFor}>{label}</Label>}
    </Row>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
