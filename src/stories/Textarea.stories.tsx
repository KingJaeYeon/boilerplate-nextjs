"use client";
import type { Meta, StoryObj } from "@storybook/react";
import Row from "@/components/Layout/Row";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

const meta: Meta<typeof Textarea> = {
  title: "COMPONENTS/Textarea",
  component: Textarea,
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
    readOnly: {
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
    className: "",
    value: "테스트",
    placeholder: "Placeholder",
    disabled: false,
    readOnly: false,
    errorMessage: "",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active = () => {
  const [value, setValue] = useState<string>("");
  return (
    <Textarea
      placeholder={"Type your message here."}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
export const ReadOnly = () => {
  const [readOnlyValue, setReadOnlyValue] = useState<string>("ReadOnly");

  return (
    <Textarea
      placeholder={"Type your message here."}
      value={readOnlyValue}
      onChange={(e) => setReadOnlyValue(e.target.value)}
      readOnly
    />
  );
};
export const Disabled = () => {
  return <Textarea placeholder={"Type your message here."} disabled />;
};

export const ErrorMessage = () => {
  const [value, setValue] = useState<string>("");
  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={"Type your message here."}
      errorMessage={"Error Message"}
    />
  );
};
