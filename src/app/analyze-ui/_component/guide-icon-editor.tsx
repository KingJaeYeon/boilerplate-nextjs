"use client";
import Col from "@/components/Layout/Col";
import Row from "@/components/Layout/Row";
import { IconBlockQuote } from "@/assets/svg/editor/IconBlockQuote";
import { IconBold } from "@/assets/svg/editor/IconBold";
import { IconH1, IconH2 } from "@/assets/svg/editor/IconH";
import { IconImage } from "@/assets/svg/editor/IconImage";
import { IconItalic } from "@/assets/svg/editor/IconItalic";
import { IconOrderList, IconUnOrderList } from "@/assets/svg/editor/IconList";
import { IconStrike } from "@/assets/svg/editor/IconStrike";
import { IconUnderLine } from "@/assets/svg/editor/IconUnderLine";

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
