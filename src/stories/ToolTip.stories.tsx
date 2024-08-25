"use client";
import React from "react";
import Col from "@/components/Layout/Col";
import Tip from "@/components/Tip";
import { Button } from "@/components/ui/button";
import Row from "@/components/Layout/Row";

const meta = {
  title: "COMPONENTS/ToolTip",
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <Col className={"gap-[6px] bg-background px-[24px] py-[48px]"}>
        <Story />
      </Col>
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
