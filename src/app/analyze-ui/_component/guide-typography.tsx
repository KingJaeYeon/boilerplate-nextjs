"use client";
import React from "react";
import Col from "@/components/Layout/Col";
import Row from "@/components/Layout/Row";
import Text from "@/components/Layout/Text";
import { cn } from "@/lib/utils";

export default function GuideTypography() {
  return (
    <Col className={"flex-wrap gap-[20px] bg-background py-[24px] tb:flex-row"}>
      <Col className={"flex-1 gap-[20px]"}>
        <Bold className={"heading1"}>
          Pretendard, Bold, 24px, line-height: 120%, letter-spacing: 0
        </Bold>
        <Bold className={"heading2"}>
          Pretendard, Bold, 20px, line-height: 120%, letter-spacing: 0
        </Bold>
        <Bold className={"heading3"}>
          Pretendard, Bold, 18px, line-height: 120%, letter-spacing: 0
        </Bold>
        <Bold className={"heading4"}>
          Pretendard, Bold, 16px, line-height: 120%, letter-spacing: 0
        </Bold>
        <Bold className={"heading5"}>
          Pretendard, Bold, 15px, line-height: 120%, letter-spacing: 0
        </Bold>
        <Bold className={"heading6"}>
          Pretendard, Bold, 14px, line-height: 120%, letter-spacing: 0
        </Bold>
        <Bold className={"heading7"}>
          Pretendard, Bold, 13px, line-height: 120%, letter-spacing: 0
        </Bold>
        <Bold className={"heading8"}>
          Pretendard, Bold, 12px, line-height: 120%, letter-spacing: 0
        </Bold>
        <Bold className={"heading9"}>
          Pretendard, Bold, 11px, line-height: 120%, letter-spacing: 0
        </Bold>
        <Bold className={"heading10"}>
          Pretendard, Bold, 9px, line-height: 120%, letter-spacing: 0
        </Bold>
      </Col>
      <Col className={"flex-1 gap-[20px]"}>
        <Regular className={"body1"}>
          Pretendard, Regular, 20px, line-height: 120%, letter-spacing: 0
        </Regular>
        <Regular className={"body2"}>
          Pretendard, Regular, 18px, line-height: 120%, letter-spacing: 0
        </Regular>
        <Regular className={"body3"}>
          Pretendard, Regular, 16px, line-height: 120%, letter-spacing: 0
        </Regular>
        <Regular className={"body4"}>
          Pretendard, Regular, 15px, line-height: 120%, letter-spacing: 0
        </Regular>
        <Regular className={"body5"}>
          Pretendard, Regular, 14px, line-height: 120%, letter-spacing: 0
        </Regular>
        <Regular className={"body6"}>
          Pretendard, Regular, 13px, line-height: 120%, letter-spacing: 0
        </Regular>
        <Regular className={"body7"}>
          Pretendard, Regular, 12px, line-height: 120%, letter-spacing: 0
        </Regular>
        <Regular className={"body8"}>
          Pretendard, Regular, 11px, line-height: 120%, letter-spacing: 0
        </Regular>
        <Regular className={"body9"}>
          Pretendard, Regular, 9px, line-height: 120%, letter-spacing: 0
        </Regular>
      </Col>
    </Col>
  );
}

function Bold({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Row className={"items-start"}>
      <Text className={"notoSans18H w-full max-w-[150px] uppercase"}>
        {className}
      </Text>
      <Col>
        <Text className={cn(className)}>Pretendard - Bold</Text>
        <Text className={"notoSans15D text-description"}>{children}</Text>
      </Col>
    </Row>
  );
}

function Regular({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Row className={"items-start"}>
      <Text className={"notoSans18H w-full max-w-[150px] uppercase"}>
        {className}
      </Text>
      <Col>
        <Text className={cn(className)}>Pretendard - Regular</Text>
        <Text className={"notoSans15D text-description"}>{children}</Text>
      </Col>
    </Row>
  );
}
