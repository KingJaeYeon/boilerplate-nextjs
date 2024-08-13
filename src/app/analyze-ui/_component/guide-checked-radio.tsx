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

  const onCheckedChange = (isChecked: boolean) => {
    setValue(isChecked);
  };

  return (
    <Col className={"gap-[5px]"}>
      <Row className={"items-center gap-[10px]"}>
        <Checkbox />
        <Checkbox disabled={true} />
        <Checkbox
          label={"체크박스"}
          htmlFor={"checked"}
          onCheckedChange={onCheckedChange}
          checked={value}
        />
        {value}
        <RadioGroup defaultValue="option-one">
          <RadioGroupItem
            value="option-one"
            id="option-one"
            label={"Option One"}
            htmlFor={"option-one"}
          />
          <RadioGroupItem
            value="option-two"
            id="option-two"
            label={"Option Two"}
            htmlFor={"option-two"}
          />
          <RadioGroupItem
            value="option-three"
            id="option-three"
            label={"Option Three"}
            htmlFor={"option-three"}
            disabled={true}
          />
        </RadioGroup>
      </Row>
    </Col>
  );
}
