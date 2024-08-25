"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Row from "@/components/Layout/Row";

export default function GuideAvatar() {
  return (
    <Row className={"py-[24px]"}>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Row>
  );
}
