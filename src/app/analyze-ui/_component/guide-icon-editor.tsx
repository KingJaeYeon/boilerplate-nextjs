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
        <ShowComponentName>
          <IconBlockQuote />
        </ShowComponentName>
        <ShowComponentName>
          <IconBold />
        </ShowComponentName>
        <ShowComponentName>
          <IconH1 />
        </ShowComponentName>
        <ShowComponentName>
          <IconH2 />
        </ShowComponentName>
        <ShowComponentName>
          <IconImage />
        </ShowComponentName>
        <ShowComponentName>
          <IconImage2 />
        </ShowComponentName>
        <ShowComponentName>
          <IconItalic />
        </ShowComponentName>
        <ShowComponentName>
          <IconOrderList />
        </ShowComponentName>
        <ShowComponentName>
          <IconUnOrderList />
        </ShowComponentName>
        <ShowComponentName>
          <IconStrike />
        </ShowComponentName>
        <ShowComponentName>
          <IconUnderLine />
        </ShowComponentName>
      </Row>
    </Col>
  );
}
