"use client";
import Row from "@/components/Layout/Row";
import Col from "@/components/Layout/Col";
import ThemeToggle from "@/components/ThemeToggle";
import ButtonSwitcher from "@/components/ButtonSwitcher";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import * as React from "react";

export default function GuideSwitch() {
  const [value, setValue] = useState<string>("1");
  const [value2, setValue2] = useState<string>("1");
  const [checked, setChecked] = React.useState(false);
  return (
    <Col className={"gap-[5px]"}>
      <Row className={"items-center gap-[10px]"}>
        <ThemeToggle />
        <Switch
          checked={checked}
          onCheckedChange={(checked) => setChecked(checked)}
        />
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
