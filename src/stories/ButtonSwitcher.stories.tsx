"use client";
import React, { useState } from "react";
import Col from "@/components/Layout/Col";
import ButtonSwitcher from "@/components/ButtonSwitcher";
import Row from "@/components/Layout/Row";

const meta = {
  title: "COMPONENTS/ButtonSwitcher",
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
  const [value, setValue] = useState<string>("1");
  return (
    <Row>
      <ButtonSwitcher
        state={value}
        setState={setValue}
        list={[
          { label: "1d", value: "1" },
          { label: "7d", value: "7" },
          { label: "1m", value: "30" },
          { label: "1y", value: "365" },
          { label: "all", value: "all" },
        ]}
      />
    </Row>
  );
};
