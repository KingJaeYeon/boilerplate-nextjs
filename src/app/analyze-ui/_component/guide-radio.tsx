"use client";
import Row from "@/components/Layout/Row";
import Col from "@/components/Layout/Col";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function GuideRadio() {
  const [value, setValue] = useState<string>("one");
  const [value1, setValue1] = useState<string>("one");

  return (
    <Col className={"gap-[30px] bg-background py-[24px]"}>
      <Row className={"gap-[30px]"}>
        <RadioGroup value={value} onValueChange={setValue}>
          <RadioGroupItem value="one" id="one" htmlFor={"one"}>
            One
          </RadioGroupItem>
          <RadioGroupItem value="two" id="two" htmlFor={"two"}>
            Two
          </RadioGroupItem>
          <RadioGroupItem value="three" id="three" htmlFor={"three"} disabled>
            Three-disabled
          </RadioGroupItem>
        </RadioGroup>
      </Row>
      <Row className={"flex-wrap gap-[30px]"}>
        <RadioGroup value={value1} onValueChange={setValue1} disabled>
          <RadioGroupItem
            value="one"
            id="one-disabled"
            htmlFor={"one-disabled"}
          >
            One-Disabled
          </RadioGroupItem>
          <RadioGroupItem
            value="two"
            id="two-disabled"
            htmlFor={"two-disabled"}
          >
            Two-Disabled
          </RadioGroupItem>
          <RadioGroupItem
            value="three"
            id="three-disabled"
            htmlFor={"three-disabled"}
          >
            Three-Disabled
          </RadioGroupItem>
        </RadioGroup>
      </Row>
    </Col>
  );
}
