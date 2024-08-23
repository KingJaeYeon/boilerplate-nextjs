"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import Text from "@/components/Layout/Text";

export default function Tip({
  children,
  className,
  txt,
}: {
  children: React.ReactNode;
  className?: string;
  txt: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent className={className}>{txt}</TooltipContent>
    </Tooltip>
  );
}
