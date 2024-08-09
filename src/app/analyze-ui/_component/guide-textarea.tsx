"use client";
import Row from "@/components/Layout/Row";
import Col from "@/components/Layout/Col";
import { TextareaWithLabel } from "@/components/ui/textarea";

export default function GuideTextarea() {
  return (
    <Col className={"gap-[5px]"}>
      <Row className={"items-center gap-[10px]"}>
        <TextareaWithLabel
          label={"Your Message"}
          placeholder={"Type your message here."}
        />
      </Row>
    </Col>
  );
}
