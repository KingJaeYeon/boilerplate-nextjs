"use client";
import React from "react";
import LocaleProvider from "@/components/LocaleProvider";
import { ThemeProvider } from "@/components/ThemeProvider";

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
        {children}
      </ThemeProvider>
    </LocaleProvider>
  );
}
