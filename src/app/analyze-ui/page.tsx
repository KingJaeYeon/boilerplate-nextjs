import Main from "@/components/Layout/Main";
import Section from "@/components/Layout/Section";
import Col from "@/components/Layout/Col";
import Row from "@/components/Layout/Row";
import { RoundedTag } from "@/components/analyze-ui/Tag";
import ThemeToggle from "@/components/ThemeToggle";
import SwitchToggle from "@/components/analyze-ui/SwitchToggle";
import GuideButton from "@/app/analyze-ui/_component/guide-button";
import GuideAvatar from "@/app/analyze-ui/_component/guide-avatar";
import { Button } from "@/components/ui/button";
import { GuideDialog } from "@/app/analyze-ui/_component/guide-dialog";
import GuideAlert from "@/app/analyze-ui/_component/guide-alert";
import GuideTextarea from "@/app/analyze-ui/_component/guide-textarea";
import GuideInput from "@/app/analyze-ui/_component/guide-input";
import GuideTypography from "@/app/analyze-ui/_component/guide-typography";

export default function Page() {
  return (
    <Main className={"gap-[20px] pb-[40px]"}>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>TYPOGRAPHY</h2>
        <GuideTypography />
      </Section>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>버튼, Toast Message</h2>
        <GuideButton />
      </Section>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>Avatar</h2>
        <GuideAvatar />
      </Section>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>Dialog</h2>
        <GuideDialog />
      </Section>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>Alert</h2>
        <GuideAlert />
      </Section>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>Input</h2>
        <GuideInput />
      </Section>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>TextArea</h2>
        <GuideTextarea />
      </Section>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>switch</h2>
        <Row className={"items-center gap-[10px]"}>
          <ThemeToggle />
          <SwitchToggle />
        </Row>
      </Section>
    </Main>
  );
}
