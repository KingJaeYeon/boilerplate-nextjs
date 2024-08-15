"use client";
import Row from "@/components/Layout/Row";
import Col from "@/components/Layout/Col";
import ThemeToggle from "@/components/ThemeToggle";
import SwitchToggle from "@/components/analyze-ui/SwitchToggle";
import ButtonSwitcher from "@/components/ButtonSwitcher";
import { useState } from "react";

export default function GuideSwitch() {
  const [value, setValue] = useState<string>("1");
  const [value2, setValue2] = useState<string>("1");
  return (
    <Col className={"gap-[5px]"}>
      <Row className={"items-center gap-[10px]"}>
        <ThemeToggle />
        <SwitchToggle />
        <ButtonSwitcher
          state={value}
          setState={setValue}
          list={[
            { label: "1d", value: "1" },
            { label: "7d", value: "7" },
            { label: "1m", value: "30" },
            { label: "1y", value: "365" },
            { label: "all", value: "all" },
          ]}
        />
        <ButtonSwitcher
          state={value2}
          setState={setValue2}
          list={[
            { label: "One", value: "1" },
            { label: "Two", value: "2" },
          ]}
        />
      </Row>
    </Col>
  );
}
