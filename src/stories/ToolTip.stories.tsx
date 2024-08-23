"use client";
import React, { useState } from "react";
import Col from "@/components/Layout/Col";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Tip from "@/components/Tip";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import Row from "@/components/Layout/Row";

const meta = {
  title: "COMPONENTS/ToolTip",
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <TooltipProvider delayDuration={0}>
        <Col className={"gap-[6px] bg-background px-[24px] py-[48px]"}>
          <Story />
        </Col>
      </TooltipProvider>
    ),
  ],
};
export default meta;

export const Default = () => {
  return (
    <Tip txt={"toolTip 확인"}>
      <Row className={"w-fit"}>
        <Button>ToolTip</Button>
      </Row>
    </Tip>
  );
};
