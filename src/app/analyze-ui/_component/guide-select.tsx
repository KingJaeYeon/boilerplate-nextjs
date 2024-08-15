"use client";
import Row from "@/components/Layout/Row";
import Col from "@/components/Layout/Col";
import { useState } from "react";
import ButtonSelector from "@/components/ButtonSelector";

export default function GuideSelect() {
  const [value, setValue] = useState<string>("1");
  const list: { [key: string]: string } = {
    "1": "1h",
    "4": "4h",
    "12": "12h",
    "24": "1d",
  };
  return (
    <Col className={"gap-[5px]"}>
      <Row className={"items-center gap-[10px]"}>
        <ButtonSelector value={value} setValue={setValue} list={list} />
      </Row>
    </Col>
  );
}
