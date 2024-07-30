"use client";
import * as React from "react";
import { Switch } from "@/components/ui/switch";

export default function SwitchToggle() {
  const [checked, setChecked] = React.useState(false);
  return (
    <Switch
      checked={checked}
      onCheckedChange={(checked) => setChecked(checked)}
    />
  );
}
