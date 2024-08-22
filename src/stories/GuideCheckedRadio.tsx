import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function GuideCheckedRadio() {
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
  );
}
