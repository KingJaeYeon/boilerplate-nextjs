"use client";
import React from "react";

export default function SystemProvider({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) {
  return <>{children}</>;
}
