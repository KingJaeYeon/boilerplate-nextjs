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
import Icon from "@/app/analyze-ui/_component/Icon";

export default function GuideIconEditor() {
  return (
    <Col className={"gap-[5px]"}>
      <Row className={"flex-wrap gap-[30px] bg-background p-[48px]"}>
        <Icon>
          <IconBlockQuote />
        </Icon>
        <Icon>
          <IconBold />
        </Icon>
        <Icon>
          <IconH1 />
        </Icon>
        <Icon>
          <IconH2 />
        </Icon>
        <Icon>
          <IconImage />
        </Icon>
        <Icon>
          <IconItalic />
        </Icon>
        <Icon>
          <IconOrderList />
        </Icon>
        <Icon>
          <IconUnOrderList />
        </Icon>
        <Icon>
          <IconStrike />
        </Icon>
        <Icon>
          <IconUnderLine />
        </Icon>
      </Row>
    </Col>
  );
}
