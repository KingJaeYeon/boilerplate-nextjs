import Main from "@/components/Layout/Main";
import Section from "@/components/Layout/Section";
import Row from "@/components/Layout/Row";
import ThemeToggle from "@/components/ThemeToggle";
import SwitchToggle from "@/components/analyze-ui/SwitchToggle";
import GuideButton from "@/app/analyze-ui/_component/guide-button";
import GuideAvatar from "@/app/analyze-ui/_component/guide-avatar";
import { GuideDialog } from "@/app/analyze-ui/_component/guide-dialog";
import GuideAlert from "@/app/analyze-ui/_component/guide-alert";
import GuideTextarea from "@/app/analyze-ui/_component/guide-textarea";
import GuideInput from "@/app/analyze-ui/_component/guide-input";
import GuideTypography from "@/app/analyze-ui/_component/guide-typography";
import GuideFlag from "@/app/analyze-ui/_component/guide-flag";
import GuideFlagRound from "@/app/analyze-ui/_component/guide-flag-round";
import GuidePlatform from "@/app/analyze-ui/_component/guide-platform";
import GuideIcon from "@/app/analyze-ui/_component/guide-icon";
import GuideIconEditor from "@/app/analyze-ui/_component/guide-icon-editor";

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
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>Platform</h2>
        <GuidePlatform />
      </Section>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>Icon Editor</h2>
        <GuideIconEditor />
      </Section>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>Icon</h2>
        <GuideIcon />
      </Section>

      {/*<Section className={"flex flex-col gap-[10px]"}>*/}
      {/*  <h2 className={"heading1"}>Flag</h2>*/}
      {/*  <GuideFlag />*/}
      {/*</Section>*/}
      {/*<Section className={"flex flex-col gap-[10px]"}>*/}
      {/*  <h2 className={"heading1"}>Flag Round</h2>*/}
      {/*  <GuideFlagRound />*/}
      {/*</Section>*/}
    </Main>
  );
}
