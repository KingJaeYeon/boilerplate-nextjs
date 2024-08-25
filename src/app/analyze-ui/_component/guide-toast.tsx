"use client";
import Row from "@/components/Layout/Row";
import { Button } from "@/components/ui/button";
import Col from "@/components/Layout/Col";
import { useToast } from "@/components/Toast/useToast";
import { IconClose, IconLeft, IconMoving } from "@/assets/svg";
import Text from "@/components/Layout/Text";

export default function GuideToast() {
  const { error, info, success, action } = useToast();
  return (
    <Col className={"gap-[30px] bg-background py-[24px]"}>
      <Row className={"flex-wrap items-center gap-[10px]"}>
        <Button onClick={() => error("error")}>Error</Button>
        <Button onClick={() => info("info")}>Info</Button>
        <Button onClick={() => success("success")}>Success</Button>
        <Button onClick={() => action("action", () => alert("action"))}>
          Action
        </Button>
      </Row>
    </Col>
  );
}
