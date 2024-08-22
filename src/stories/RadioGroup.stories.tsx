"use client";
import type { StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import Col from "@/components/Layout/Col";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const meta = {
  title: "COMPONENTS/RadioGroup",
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <Col className={"gap-[6px] bg-background px-[24px] py-[48px]"}>
        <Story />
      </Col>
    ),
  ],
  render: (args: any) => {
    return (
      <RadioGroup defaultValue={args.defaultValue}>
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
  },
  argTypes: {
    defaultValue: {
      control: "text",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    label: {
      control: "text",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    htmlFor: {
      control: "text",
      description: "input id",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    checked: {
      type: "boolean",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    disabled: {
      control: "boolean",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    onCheckedChange: {
      table: {
        type: {
          summary: "(isChecked: boolean)=>void",
        },
      },
    },
  },
  args: {
    defaultValue: "option-one",
    label: "체크박스",
    htmlFor: "checked",
    checked: false,
    disabled: false,
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CheckedAll = () => {
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
    <>
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
    </>
  );
};
