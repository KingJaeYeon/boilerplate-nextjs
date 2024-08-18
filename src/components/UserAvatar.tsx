"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  src?: string;
  fallback: string;
  className?: string;
}

export default function UserAvatar({
  src,
  fallback,
  className = "",
}: UserAvatarProps) {
  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={src} />
      <AvatarFallback>{fallback.slice(0, 2)}</AvatarFallback>
    </Avatar>
  );
}
