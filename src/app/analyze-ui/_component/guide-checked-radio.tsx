"use client";
import Row from "@/components/Layout/Row";
import Col from "@/components/Layout/Col";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function GuideCheckedRadio() {
  const [value1, setValue1] = useState<boolean>(false);
  const [value2, setValue2] = useState<boolean>(false);
  const onChecked1Change = (isChecked: boolean) => {
    setValue1(isChecked);
  };

  const onChecked2Change = (isChecked: boolean) => {
    setValue2(isChecked);
  };

  const onCheckedALLChange = (isChecked: boolean) => {
    setValue1(isChecked);
    setValue2(isChecked);
  };

  return (
    <Col className={"gap-[5px]"}>
      <Row className={"items-center gap-[10px]"}>
        <Checkbox />
        <Checkbox disabled />
        <Checkbox
          label={"체크박스1"}
          htmlFor={"checked1"}
          onCheckedChange={onChecked1Change}
          checked={value1}
        />
        <Checkbox
          label={"체크박스2"}
          htmlFor={"checked2"}
          onCheckedChange={onChecked2Change}
          checked={value2}
        />
        <Checkbox
          label={"체크박스All"}
          htmlFor={"checkedAll"}
          onCheckedChange={onCheckedALLChange}
          checked={value2 && value1}
        />

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
            disabled
          />
        </RadioGroup>
      </Row>
    </Col>
  );
}
