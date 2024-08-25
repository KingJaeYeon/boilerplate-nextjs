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
        <ShowComponentName>
          <Naver />
        </ShowComponentName>
        <ShowComponentName>
          <Apple />
        </ShowComponentName>
        <ShowComponentName>
          <YoutubeEmpty />
        </ShowComponentName>
        <ShowComponentName>
          <Youtube />
        </ShowComponentName>
        <ShowComponentName>
          <Google />
        </ShowComponentName>
        <ShowComponentName>
          <FaceBook2 />
        </ShowComponentName>
        <ShowComponentName>
          <FaceBook />
        </ShowComponentName>
        <ShowComponentName>
          <KaKao />
        </ShowComponentName>
        <ShowComponentName>
          <Twitter />
        </ShowComponentName>
        <ShowComponentName>
          <Github />
        </ShowComponentName>
        <ShowComponentName>
          <LinkedIn />
        </ShowComponentName>
        <ShowComponentName>
          <Slack />
        </ShowComponentName>
        <ShowComponentName>
          <Instagram />
        </ShowComponentName>
        <ShowComponentName>
          <Reddit />
        </ShowComponentName>
        <ShowComponentName>
          <Telegram />
        </ShowComponentName>
      </Row>
    </Col>
  );
}
