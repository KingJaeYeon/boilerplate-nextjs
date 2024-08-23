"use client";
import React, { useState } from "react";
import Col from "@/components/Layout/Col";
import { Switch } from "@/components/ui/switch";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";

const meta = {
  title: "COMPONENTS/Switch",
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Col className={"gap-[6px] bg-background px-[24px] py-[48px]"}>
          <Story />
        </Col>
      </ThemeProvider>
    ),
  ],
};
export default meta;

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onCheckedChange={(checked) => setChecked(checked)}
    />
  );
};

export const Theme = () => {
  return <ThemeToggle />;
};
