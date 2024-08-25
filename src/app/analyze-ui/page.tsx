import Main from "@/components/Layout/Main";
import Section from "@/components/Layout/Section";
import GuideButton from "@/app/analyze-ui/_component/guide-button";
import GuideAvatar from "@/app/analyze-ui/_component/guide-avatar";
import { GuideDialog } from "@/app/analyze-ui/_component/guide-dialog";
import GuideAlert from "@/app/analyze-ui/_component/guide-alert";
import GuideTextarea from "@/app/analyze-ui/_component/guide-textarea";
import GuideInput from "@/app/analyze-ui/_component/guide-input";
import GuideTypography from "@/app/analyze-ui/_component/guide-typography";
import GuidePlatform from "@/app/analyze-ui/_component/guide-platform";
import GuideIcon from "@/app/analyze-ui/_component/guide-icon";
import GuideIconEditor from "@/app/analyze-ui/_component/guide-icon-editor";
import GuideRadio from "@/app/analyze-ui/_component/guide-radio";
import GuideSwitch from "@/app/analyze-ui/_component/guide-switch";
import GuideChecked from "@/app/analyze-ui/_component/guide-checked";
import GuideFlag from "@/app/analyze-ui/_component/guide-flag";
import GuideFlagRound from "@/app/analyze-ui/_component/guide-flag-round";
import GuideToast from "@/app/analyze-ui/_component/guide-toast";
import { Accordion } from "@/components/ui/accordion";
import GuideAccordion from "@/app/analyze-ui/_component/guide-accordion";

export default function Page() {
  return (
    <Main className={"gap-[20px] px-[16px] pb-[40px]"}>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>TYPOGRAPHY</h2>
        <GuideTypography />
      </Section>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>Toast</h2>
        <GuideToast />
      </Section>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>Button</h2>
        <GuideButton />
      </Section>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>Avatar</h2>
        <GuideAvatar />
      </Section>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>Accordion</h2>
        <GuideAccordion />
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
        <h2 className={"heading1"}>Radio</h2>
        <GuideRadio />
      </Section>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>Check</h2>
        <GuideChecked />
      </Section>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>Switch</h2>
        <GuideSwitch />
      </Section>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>Icon Platform</h2>
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
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>Flag</h2>
        <GuideFlag />
      </Section>
      <Section className={"flex flex-col gap-[10px]"}>
        <h2 className={"heading1"}>Flag Round</h2>
        <GuideFlagRound />
      </Section>
    </Main>
  );
}
