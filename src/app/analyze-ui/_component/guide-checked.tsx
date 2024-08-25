"use client";
import Row from "@/components/Layout/Row";
import Col from "@/components/Layout/Col";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function GuideChecked() {
  const [value, setValue] = useState<boolean>(false);
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

  const onCheckedChange = (isChecked: boolean) => {
    setValue(isChecked);
  };

  return (
    <Col className={"gap-[30px] bg-background py-[24px]"}>
      <Row className={"gap-[30px]"}>
        <Checkbox onCheckedChange={onCheckedChange} checked={value} />
        <Checkbox disabled />
      </Row>
      <Row className={"gap-[30px]"}>
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
      </Row>
    </Col>
  );
}
