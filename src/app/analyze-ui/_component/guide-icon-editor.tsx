"use client";
import Col from "@/components/Layout/Col";
import Row from "@/components/Layout/Row";
import {
  IconBlockQuote,
  IconOrderList,
  IconImage,
  IconUnderLine,
  IconStrike,
  IconBold,
  IconItalic,
  IconH1,
  IconUnOrderList,
  IconH2,
} from "@/assets/svg/editor";

export default function GuideIconEditor() {
  return (
    <Col className={"gap-[5px]"}>
      <Row className={"flex-wrap items-center gap-[10px]"}>
        <IconBlockQuote />
        <IconBold />
        <IconH1 />
        <IconH2 />
        <IconImage />
        <IconItalic />
        <IconOrderList />
        <IconUnOrderList />
        <IconStrike />
        <IconUnderLine />
      </Row>
    </Col>
  );
}
