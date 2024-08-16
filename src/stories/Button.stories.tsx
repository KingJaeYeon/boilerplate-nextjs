import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["default", "sm", "md", "lg"],
    },
    children: { control: { type: "text" } },
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "outline", "ghost"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    asChild: { control: { type: "boolean" } },
    className: { control: { type: "text" } },
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
    asChild: false,
    className: "",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Primary",
  },
};

export const Secondary: Story = {
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["default", "sm", "md", "lg"],
    },
    children: { control: { type: "text" } },
    variant: {
      control: { type: "select" },
      options: ["secondary"],
    },
  },

  args: {
    variant: "secondary",
    size: "md",
    children: "Secondary",
    disabled: false,
    asChild: false,
  },
};

export const OutLine: Story = {
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["default", "sm", "md", "lg"],
    },
    children: { control: { type: "text" } },
    variant: {
      control: { type: "select" },
      options: ["outline"],
    },
  },

  args: {
    children: "Outline",
    size: "md",
    variant: "outline",
    disabled: false,
    asChild: false,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};
