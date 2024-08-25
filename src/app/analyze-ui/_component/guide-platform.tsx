"use client";
import Col from "@/components/Layout/Col";
import Row from "@/components/Layout/Row";
import {
  Naver,
  YoutubeEmpty,
  KaKao,
  Youtube,
  Twitter,
  FaceBook,
  Github,
  Google,
  Reddit,
  FaceBook2,
  Slack,
  LinkedIn,
  Telegram,
  Instagram,
  Apple,
} from "@/assets/svg/platform";
import Icon from "@/app/analyze-ui/_component/Icon";

export default function GuidePlatform() {
  return (
    <Col className={"gap-[5px]"}>
      <Row className={"flex-wrap gap-[30px] bg-background p-[48px]"}>
        <Icon>
          <Naver />
        </Icon>
        <Icon>
          <Apple />
        </Icon>
        <Icon>
          <YoutubeEmpty />
        </Icon>
        <Icon>
          <Youtube />
        </Icon>
        <Icon>
          <Google />
        </Icon>
        <Icon>
          <FaceBook2 />
        </Icon>
        <Icon>
          <FaceBook />
        </Icon>
        <Icon>
          <KaKao />
        </Icon>
        <Icon>
          <Twitter />
        </Icon>
        <Icon>
          <Github />
        </Icon>
        <Icon>
          <LinkedIn />
        </Icon>
        <Icon>
          <Slack />
        </Icon>
        <Icon>
          <Instagram />
        </Icon>
        <Icon>
          <Reddit />
        </Icon>
        <Icon>
          <Telegram />
        </Icon>
      </Row>
    </Col>
  );
}
