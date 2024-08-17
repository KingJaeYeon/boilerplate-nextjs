"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

interface UserAvatarProps {
  src?: string;
  fallback: string;
}

export default function UserAvatar({ src, fallback }: UserAvatarProps) {
  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback>{fallback.slice(0, 2)}</AvatarFallback>
    </Avatar>
  );
}
