"use client";
import React from "react";
import LocaleProvider from "@/components/LocaleProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function SystemProvider({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) {
  return (
    <LocaleProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
      </ThemeProvider>
    </LocaleProvider>
  );
}
