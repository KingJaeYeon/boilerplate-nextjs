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

export default function GuidePlatform() {
  return (
    <Col className={"gap-[5px]"}>
      <Row className={"flex-wrap items-center gap-[10px]"}>
        <Naver />
        <Apple />
        <YoutubeEmpty />
        <Youtube />
        <Google />
        <FaceBook2 />
        <FaceBook />
        <KaKao />
        <Twitter />
        <Github />
        <LinkedIn />
        <Slack />
        <Instagram />
        <Reddit />
        <Telegram />
      </Row>
    </Col>
  );
}
