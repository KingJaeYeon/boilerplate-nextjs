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
import ShowComponentName from "@/app/analyze-ui/_component/show-component-name";

export default function GuidePlatform() {
  return (
    <Col className={"gap-[5px]"}>
      <Row className={"flex-wrap gap-[30px] bg-background py-[24px]"}>
        <ShowComponentName id={"Naver"}>
          <Naver />
        </ShowComponentName>
        <ShowComponentName id={"Apple"}>
          <Apple />
        </ShowComponentName>
        <ShowComponentName id={"YoutubeEmpty"}>
          <YoutubeEmpty />
        </ShowComponentName>
        <ShowComponentName id={"Youtube"}>
          <Youtube />
        </ShowComponentName>
        <ShowComponentName id={"Google"}>
          <Google />
        </ShowComponentName>
        <ShowComponentName id={"FaceBook2"}>
          <FaceBook2 />
        </ShowComponentName>
        <ShowComponentName id={"FaceBook"}>
          <FaceBook />
        </ShowComponentName>
        <ShowComponentName id={"KaKao"}>
          <KaKao />
        </ShowComponentName>
        <ShowComponentName id={"Twitter"}>
          <Twitter />
        </ShowComponentName>
        <ShowComponentName id={"Github"}>
          <Github />
        </ShowComponentName>
        <ShowComponentName id={"LinkedIn"}>
          <LinkedIn />
        </ShowComponentName>
        <ShowComponentName id={"Slack"}>
          <Slack />
        </ShowComponentName>
        <ShowComponentName id={"Instagram"}>
          <Instagram />
        </ShowComponentName>
        <ShowComponentName id={"Reddit"}>
          <Reddit />
        </ShowComponentName>
        <ShowComponentName id={"Telegram"}>
          <Telegram />
        </ShowComponentName>
      </Row>
    </Col>
  );
}
