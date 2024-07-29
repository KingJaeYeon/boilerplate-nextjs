"use client";
import * as React from "react";
import { useTheme } from "next-themes";

export default function SwitchTheme() {
  const { setTheme } = useTheme();
  return (
    <>
      <button className={"bg-white"} onClick={() => setTheme("light")}>
        light
      </button>
      <button onClick={() => setTheme("dark")}>dark</button>
      <button onClick={() => setTheme("system")}>system</button>
    </>
  );
}
