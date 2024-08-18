"use client";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import Row from "@/components/Layout/Row";
import { IconDelete, IconMoving } from "@/assets/svg";
import { Input } from "@/components/ui/input";
import Col from "@/components/Layout/Col";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "COMPONENTS/Input",
  component: Input,
  decorators: [
    (Story) => (
      <Row
        className={"items-center gap-[6px] bg-background px-[24px] py-[48px]"}
      >
        <Story />
      </Row>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "text",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    value: {
      control: "text",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    placeholder: {
      control: "text",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    maxLength: {
      control: "number",
      description: 'need to set "icon" to "length"',
      table: {
        type: {
          summary: "number",
        },
      },
    },
    icon: {
      control: "select",
      options: ["none", "search", "delete", "length"],
      table: {
        type: {
          summary: "none | search | delete | length",
        },
        defaultValue: {
          summary: "none",
        },
      },
    },
    className: {
      control: "text",
      description: "Tailwind CSS class",
      table: {
        type: {
          summary: "string",
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
    errorMessage: {
      control: "text",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    iconOnClick: {
      action: "iconOnClick",
      table: {
        type: {
          summary: "function",
        },
      },
    },
    onChange: {
      action: "onChange",
      table: {
        type: {
          summary: "function",
        },
      },
    },
  },
  args: {
    className: "max-w-[328px]",
    icon: "delete",
    value: "테스트",
    placeholder: "Placeholder",
    disabled: false,
    errorMessage: "",
    maxLength: 30,
    type: "text",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active = () => {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [input3, setInput3] = useState<string>("");
  const [input4, setInput4] = useState<string>("테스트");
  return (
    <Row className={"max-w-[400px] flex-wrap gap-[10px]"}>
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
  );
};

export const Disabled = () => {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [input3, setInput3] = useState<string>("");
  const [input4, setInput4] = useState<string>("테스트");
  return (
    <Row className={"max-w-[400px] flex-wrap gap-[10px]"}>
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
  );
};

export const ErrorMessage = () => {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [input3, setInput3] = useState<string>("");
  const [input4, setInput4] = useState<string>("테스트");
  return (
    <Row className={"max-w-[400px] flex-wrap gap-[10px]"}>
      {" "}
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
  );
};
