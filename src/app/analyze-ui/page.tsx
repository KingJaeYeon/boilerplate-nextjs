import Main from "@/components/Layout/Main";
import Section from "@/components/Layout/Section";
import Col from "@/components/Layout/Col";
import Row from "@/components/Layout/Row";
import { RoundedTag } from "@/components/analyze-ui/Tag";
import { SquareButtonLg, SquareButtonSm } from "@/components/analyze-ui/Button";
import ThemeToggle from "@/components/ThemeToggle";
import SwitchToggle from "@/components/analyze-ui/SwitchToggle";

export default function Page() {
  return (
    <Main>
      <Section>
        <h2>둥근태그 && 네모난 버튼 세트</h2>
        <Col>
          <Row className={"gap-[10px]"}>
            <RoundedTag>태그</RoundedTag>
            <RoundedTag hasClose={true}>태그</RoundedTag>
          </Row>
        </Col>
        <Col>
          <Row className={"gap-[10px]"}>
            <SquareButtonSm>버튼명</SquareButtonSm>
          </Row>
          <Row>
            <SquareButtonLg>버튼명</SquareButtonLg>
          </Row>
        </Col>
      </Section>
      <Section className={"mt-[40px]"}>
        <h2>네모난태그 && 둥근버튼 세트</h2>
        <h3>태그: font-bold 13px light:text-write dark:text-gray-dark</h3>
        <Col>
          <h4>네모난태그: px-[13px] py-[6px] rounded-[18px]</h4>
          <Row className={"gap-[10px]"}>
            <RoundedTag>태그</RoundedTag>
            <RoundedTag hasClose={true}>태그</RoundedTag>
          </Row>
        </Col>
        <Col>
          <h4>둥근태그: px-[13px] py-[6px] rounded-[18px]</h4>
          <Row className={"gap-[10px]"}>
            <RoundedTag>태그</RoundedTag>
            <RoundedTag hasClose={true}>태그</RoundedTag>
          </Row>
        </Col>
      </Section>
      <Section className={"mt-[40px]"}>
        <h2>switch</h2>
        <Row className={"items-center gap-[10px]"}>
          <ThemeToggle />
          <SwitchToggle />
        </Row>
      </Section>
    </Main>
  );
}
