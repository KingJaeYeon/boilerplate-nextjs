"use client";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import Row from "@/components/Layout/Row";
import { IconDelete, IconMoving } from "@/assets/svg";

const meta: Meta<typeof Button> = {
  title: "COMPONENTS/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["default", "sm", "md", "lg"],
      table: {
        type: {
          summary: "default | sm | md | lg",
        },
      },
      description: "Button Size",
    },
    children: { control: { type: "text" } },
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "primary", "secondary", "outline", "ghost"],
      table: {
        type: {
          summary: "default | primary  | secondary | outline | ghost",
        },
      },
      description: "Button Variant",
    },
    disabled: {
      control: { type: "boolean" },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    asChild: {
      control: { type: "boolean" },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    className: {
      control: { type: "text" },
      table: {
        type: {
          summary: "string",
        },
      },
      description: "Tailwind CSS class",
    },
    loading: {
      control: { type: "boolean" },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
  args: {
    children: "Button",
    variant: "secondary",
    size: "md",
    disabled: false,
    loading: false,
    className: "",
    asChild: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Primary = () => (
  <Row className={"items-center gap-[6px] bg-background px-[24px] py-[48px]"}>
    <Button size={"sm"} variant={"primary"}>
      Button S
    </Button>
    <Button variant={"primary"}>Button M</Button>
    <Button size={"lg"} variant={"primary"}>
      Button L
    </Button>
    <Button variant={"primary"} disabled>
      Disabled
    </Button>
    <Button variant={"primary"} loading>
      Loading
    </Button>
    <Button
      variant={"primary"}
      leftIcon={<IconMoving />}
      rightIcon={<IconDelete />}
    >
      Icon
    </Button>
  </Row>
);

export const Secondary = () => (
  <Row className={"items-center gap-[6px] bg-background px-[24px] py-[48px]"}>
    <Button size={"sm"}>Button S</Button>
    <Button>Button M</Button>
    <Button size={"lg"}>Button L</Button>
    <Button disabled>Disabled</Button>
    <Button loading>Loading</Button>
    <Button leftIcon={<IconMoving />} rightIcon={<IconDelete />}>
      Icon
    </Button>
  </Row>
);

export const OutLine = () => (
  <Row className={"items-center gap-[6px] bg-background px-[24px] py-[48px]"}>
    <Button size={"sm"} variant={"outline"}>
      Button S
    </Button>
    <Button variant={"outline"}>Button M</Button>
    <Button size={"lg"} variant={"outline"}>
      Button L
    </Button>
    <Button variant={"outline"} disabled>
      Disabled
    </Button>
    <Button variant={"outline"} loading>
      Loading
    </Button>
    <Button
      variant={"outline"}
      leftIcon={<IconMoving />}
      rightIcon={<IconDelete />}
    >
      Icon
    </Button>
  </Row>
);

export const Ghost = () => (
  <Row className={"items-center gap-[6px] bg-background px-[24px] py-[48px]"}>
    <Button size={"sm"} variant={"ghost"}>
      Button S
    </Button>
    <Button variant={"ghost"}>Button M</Button>
    <Button size={"lg"} variant={"ghost"}>
      Button L
    </Button>
    <Button variant={"ghost"} disabled>
      Disabled
    </Button>
    <Button variant={"outline"} loading>
      Loading
    </Button>
    <Button
      variant={"ghost"}
      leftIcon={<IconMoving />}
      rightIcon={<IconDelete />}
    >
      Icon
    </Button>
  </Row>
);

export const NoCss = () => (
  <Row className={"items-center gap-[6px] bg-background px-[24px] py-[48px]"}>
    <Button size={"default"} variant={"default"}>
      Button S
    </Button>
  </Row>
);
