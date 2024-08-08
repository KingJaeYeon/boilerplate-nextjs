"use client";
import Row from "@/components/Layout/Row";
import { Button } from "@/components/ui/button";
import Col from "@/components/Layout/Col";
import { useToast } from "@/components/Toast/useToast";
import useUserStore from "@/store/userStore";
import { TextareaWithLabel } from "@/components/ui/textarea";

export default function GuideTextarea() {
  const { error, info, success, action } = useToast();
  const { setAuthModal } = useUserStore();
  return (
    <Col className={"gap-[5px]"}>
      <Row className={"items-center gap-[10px]"}>
        <TextareaWithLabel
          label={"Your Message"}
          placeholder={"Type your message here."}
        />
        <Button size={"md"} variant={"primary"} onClick={() => info("info")}>
          Info
        </Button>
        <Button
          size={"md"}
          variant={"primary"}
          onClick={() => success("success")}
        >
          Success
        </Button>
        <Button
          size={"md"}
          variant={"primary"}
          onClick={() => action("action", () => alert("action"))}
        >
          Action
        </Button>
        <Button onClick={() => setAuthModal(true)}>로그인 버튼</Button>
      </Row>
      <Row className={"items-center gap-[10px]"}>
        <Button size={"sm"} variant={"primary"}>
          Small Button
        </Button>
        <Button size={"md"} variant={"primary"}>
          Medium Button
        </Button>
        <Button size={"lg"} variant={"primary"}>
          Large Button
        </Button>
        <Button size={"lg"} variant={"primary"} disabled={true}>
          Large Button
        </Button>
      </Row>
      <Row className={"items-center gap-[10px]"}>
        <Button size={"sm"} variant={"secondary"}>
          Small Button
        </Button>
        <Button size={"md"} variant={"secondary"}>
          Medium Button
        </Button>
        <Button size={"lg"} variant={"secondary"}>
          Large Button
        </Button>
        <Button size={"lg"} variant={"secondary"} disabled={true}>
          Large Button
        </Button>
      </Row>
      <Row className={"items-center gap-[10px]"}>
        <Button size={"sm"} variant={"outline"}>
          Small Button
        </Button>
        <Button size={"md"} variant={"outline"}>
          Medium Button
        </Button>
        <Button size={"lg"} variant={"outline"}>
          Large Button
        </Button>
        <Button size={"lg"} variant={"outline"} disabled={true}>
          Large Button
        </Button>
      </Row>
      <Row className={"items-center gap-[10px]"}>
        <Button size={"sm"} variant={"ghost"}>
          Small Button
        </Button>
        <Button size={"md"} variant={"ghost"}>
          Medium Button
        </Button>
        <Button size={"lg"} variant={"ghost"}>
          Large Button
        </Button>
        <Button size={"lg"} variant={"ghost"} disabled={true}>
          Large Button
        </Button>
      </Row>
    </Col>
  );
}
