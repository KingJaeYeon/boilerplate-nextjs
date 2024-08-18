import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Row from "@/components/Layout/Row";
import UserAvatar from "@/components/UserAvatar";

const meta: Meta<typeof UserAvatar> = {
  title: "COMPONENTS/Avatar",
  tags: ["autodocs"],
  component: UserAvatar,
  decorators: [
    (Story) => (
      <Row
        className={"items-center gap-[6px] bg-background px-[24px] py-[48px]"}
      >
        <Story />
      </Row>
    ),
  ],
  argTypes: {
    src: { control: { type: "text" } },
    fallback: { control: { type: "text" } },
  },
  args: {
    src: "",
    fallback: "CN",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://github.com/shadcn.png",
    fallback: "CN",
    className: "",
  },
};

export const ImageFail = () => (
  <>
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>

    <Avatar className={"h-[30px] w-[30px]"}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>C</AvatarFallback>
    </Avatar>
    <Avatar className={"h-[30px] w-[30px]"}>
      <AvatarImage src="" />
      <AvatarFallback>C</AvatarFallback>
    </Avatar>
  </>
);
