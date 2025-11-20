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
import ShowComponentName from "@/app/analyze-ui/_component/show-component-name";
import { IconImage2 } from "@/assets/svg/editor/IconImage";

export default function GuideIconEditor() {
  return (
    <Col className={"gap-[5px]"}>
      <Row className={"flex-wrap gap-[30px] bg-background py-[24px]"}>
        <ShowComponentName id={"IconBlockQuote"}>
          <IconBlockQuote />
        </ShowComponentName>
        <ShowComponentName id={"IconBold"}>
          <IconBold />
        </ShowComponentName>
        <ShowComponentName id={"IconH1"}>
          <IconH1 />
        </ShowComponentName>
        <ShowComponentName id={"IconH2"}>
          <IconH2 />
        </ShowComponentName>
        <ShowComponentName id={"IconImage"}>
          <IconImage />
        </ShowComponentName>
        <ShowComponentName id={"IconImage2"}>
          <IconImage2 />
        </ShowComponentName>
        <ShowComponentName id={"IconItalic"}>
          <IconItalic />
        </ShowComponentName>
        <ShowComponentName id={"IconOrderList"}>
          <IconOrderList />
        </ShowComponentName>
        <ShowComponentName id={"IconUnOrderList"}>
          <IconUnOrderList />
        </ShowComponentName>
        <ShowComponentName id={"IconStrike"}>
          <IconStrike />
        </ShowComponentName>
        <ShowComponentName id={"IconUnderLine"}>
          <IconUnderLine />
        </ShowComponentName>
      </Row>
    </Col>
  );
}
