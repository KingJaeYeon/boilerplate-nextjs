"use client";
import Row from "@/components/Layout/Row";
import Col from "@/components/Layout/Col";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function GuideCheckedRadio() {
  const [value, setValue] = useState<boolean>(false);
  const [readOnlyValue, setReadOnlyValue] = useState<string>("ReadOnly");
  return (
    <Col className={"gap-[5px]"}>
      <Row className={"items-center gap-[10px]"}>
        <Checkbox />
        <Checkbox
          label={"체크박스"}
          htmlFor={"checked"}
          onCheckedChange={(e) => setValue(e)}
          checked={value}
        />
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
        </RadioGroup>
      </Row>
    </Col>
  );
}
