"use client";
import Col from "@/components/Layout/Col";
import Row from "@/components/Layout/Row";
import Naver from "@/assets/svg/platform/Naver";
import Apple from "@/assets/svg/platform/Apple";
import { Youtube, YoutubeEmpty } from "@/assets/svg/platform/Youtube";
import Google from "@/assets/svg/platform/Google";
import FaceBook, { FaceBook2 } from "@/assets/svg/platform/FaceBook";
import KaKao from "@/assets/svg/platform/KaKao";
import Twitter from "@/assets/svg/platform/Twitter";
import Github from "@/assets/svg/platform/Github";
import LinkedIn from "@/assets/svg/platform/LinkedIn";
import Slack from "@/assets/svg/platform/Slack";
import Instagram from "@/assets/svg/platform/Instagram";
import Reddit from "@/assets/svg/platform/Reddit";
import Telegram from "@/assets/svg/platform/Telegram";

export default function GuideIcon() {
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
