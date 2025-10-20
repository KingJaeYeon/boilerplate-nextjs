"use client";
import Row from "@/components/Layout/Row";
import Col from "@/components/Layout/Col";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FloatingOutlinedInput } from "@/components/FloatingOutlinedInput";

export default function GuideInput() {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [input3, setInput3] = useState<string>("");
  const [input4, setInput4] = useState<string>("테스트");
  const [input5, setInput5] = useState<string>("");
  return (
    <Col className={"gap-[30px] bg-background py-[24px]"}>
      <Row className={"flex-wrap items-center gap-[10px]"}>
        <Input
          placeholder={"Placeholder"}
          className={"max-w-[328px]"}
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <Input
          placeholder={"Placeholder"}
          className={"max-w-[328px]"}
          icon={"length"}
          maxLength={30}
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <Input
          placeholder={"Placeholder"}
          className={"max-w-[328px]"}
          icon={"search"}
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />
        <Input
          placeholder={"Placeholder"}
          className={"max-w-[328px]"}
          icon={"delete"}
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
        />
      </Row>
      <Row className={"flex-wrap items-center gap-[10px]"}>
        <Input
          placeholder={"Placeholder"}
          className={"max-w-[328px]"}
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          disabled
        />
        <Input
          placeholder={"Placeholder"}
          className={"max-w-[328px]"}
          icon={"length"}
          maxLength={30}
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          disabled
        />
        <Input
          placeholder={"Placeholder"}
          className={"max-w-[328px]"}
          icon={"search"}
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
          disabled
        />
        <Input
          placeholder={"Placeholder"}
          className={"max-w-[328px]"}
          icon={"delete"}
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
          disabled
        />
      </Row>
      <Row className={"flex-wrap items-center gap-[10px]"}>
        <Input
          placeholder={"Placeholder"}
          className={"max-w-[328px]"}
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          errorMessage={"input1 Error"}
        />
        <Input
          placeholder={"Placeholder"}
          className={"max-w-[328px]"}
          icon={"length"}
          maxLength={30}
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          errorMessage={"input2 Error"}
        />
        <Input
          placeholder={"Placeholder"}
          className={"max-w-[328px]"}
          icon={"search"}
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
          errorMessage={"input3 Error"}
        />
        <Input
          placeholder={"Placeholder"}
          className={"max-w-[328px]"}
          icon={"delete"}
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
          errorMessage={"input4 Error"}
        />
      </Row>
      <Row className={"flex-wrap items-center gap-[10px]"}>
        <FloatingOutlinedInput
          id={"ddddddd"}
          label={"테스트"}
          value={input5}
          onChangeValue={(value: string) => setInput5(value)}
        />
      </Row>
    </Col>
  );
}
