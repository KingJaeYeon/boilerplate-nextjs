"use client";
import Row from "@/components/Layout/Row";
import Col from "@/components/Layout/Col";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function GuideTextarea() {
  const [value, setValue] = useState<string>("");
  const [readOnlyValue, setReadOnlyValue] = useState<string>("ReadOnly");
  return (
    <Col className={"bg-background py-[24px]"}>
      <Row className={"flex-wrap items-center gap-[30px]"}>
        <Textarea
          placeholder={"Type your message here."}
          maxLength={250}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Textarea
          placeholder={"Type your message here."}
          maxLength={250}
          value={readOnlyValue}
          onChange={(e) => setReadOnlyValue(e.target.value)}
          readOnly
        />
        <Textarea
          placeholder={"Type your message here."}
          maxLength={250}
          disabled
        />
        <Textarea
          placeholder={"Type your message here."}
          maxLength={250}
          errorMessage={"Error Message"}
        />
      </Row>
    </Col>
  );
}
