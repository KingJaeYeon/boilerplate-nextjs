import type { Meta } from "@storybook/react";
import { Button } from "@/components/ui/button";
import Row from "@/components/Layout/Row";
import { useToast } from "@/components/Toast/useToast";
import { Toaster } from "@/components/ui/sonner";
import React from "react";

const meta: Meta = {
  title: "COMPONENTS/Toast",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Row
        className={"items-center gap-[6px] bg-background px-[24px] py-[48px]"}
      >
        <Story />
      </Row>
    ),
  ],
  component: ToastStory,
};

export default meta;

export const Default = () => {
  const { error, info, success, action } = useToast();
  return (
    <>
      <Toaster />
      <Button variant={"primary"} onClick={() => error("error")}>
        Error
      </Button>
      <Button variant={"primary"} onClick={() => info("info")}>
        Info
      </Button>
      <Button variant={"primary"} onClick={() => success("success")}>
        Success
      </Button>
      <Button
        variant={"primary"}
        onClick={() => action("action", () => alert("action"))}
      >
        Action
      </Button>
    </>
  );
};

function ToastStory() {
  const { error, info, success, action } = useToast();
  return (
    <>
      <Toaster />
      <Row
        className={"items-center gap-[6px] bg-background px-[24px] py-[48px]"}
      >
        <Button variant={"primary"} onClick={() => error("error")}>
          Error
        </Button>
        <Button variant={"primary"} onClick={() => info("info")}>
          Info
        </Button>
        <Button variant={"primary"} onClick={() => success("success")}>
          Success
        </Button>
        <Button
          variant={"primary"}
          onClick={() => action("action", () => alert("action"))}
        >
          Action
        </Button>
      </Row>
    </>
  );
}
