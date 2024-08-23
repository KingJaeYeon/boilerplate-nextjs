"use client";
import React, { useState } from "react";
import Col from "@/components/Layout/Col";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const meta = {
  title: "COMPONENTS/Icon",
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
  const [value, setValue] = useState("one");
  return (
    <RadioGroup value={value} onValueChange={setValue}>
      <RadioGroupItem value="one" id="one" htmlFor={"one"}>
        One
      </RadioGroupItem>
      <RadioGroupItem value="two" id="two" htmlFor={"two"}>
        Two
      </RadioGroupItem>
      <RadioGroupItem value="three" id="three" htmlFor={"three"}>
        Three
      </RadioGroupItem>
    </RadioGroup>
  );
};

export const Disabled = () => {
  const [value, setValue] = useState("one");
  return (
    <RadioGroup value={value} onValueChange={setValue} disabled>
      <RadioGroupItem value="one" id="disable-one" htmlFor={"disabled-one"}>
        One
      </RadioGroupItem>
      <RadioGroupItem value="two" id="disabled-two" htmlFor={"disabled-two"}>
        Two
      </RadioGroupItem>
      <RadioGroupItem
        value="three"
        id="disabled-three"
        htmlFor={"disabled-three"}
      >
        Three
      </RadioGroupItem>
    </RadioGroup>
  );
};
