"use client";
import React from "react";

import Row from "@/components/Layout/Row";
import Text from "@/components/Layout/Text";
import flag from "../../public/images/flag/flag.json";
import Image from "next/image";

const meta = {
  title: "COMPONENTS/Flag",
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <Row className={"flex-wrap gap-[30px] bg-background p-[48px]"}>
        <Story />
      </Row>
    ),
  ],
};
export default meta;

export const Default = () => {
  const flags = Object.keys(flag);
  const stringify = JSON.parse(JSON.stringify(flag));
  return (
    <>
      {flags.map((item) => (
        <Icon
          key={item}
          txt={`${item}.svg(${stringify[item]["translation-ko"]})`}
        >
          <Image
            src={`/images/flag/default/${item}.svg`}
            alt={item}
            width={24}
            height={24}
          />
        </Icon>
      ))}
    </>
  );
};

export const Round = () => {
  const flags = Object.keys(flag);
  const stringify = JSON.parse(JSON.stringify(flag));
  return (
    <>
      {flags.map((item) => (
        <Icon
          key={item}
          txt={`${item}.svg(${stringify[item]["translation-ko"]})`}
        >
          <Image
            src={`/images/flag/round/${item}.svg`}
            alt={item}
            width={24}
            height={24}
          />
        </Icon>
      ))}
    </>
  );
};

function Icon({ children, txt }: any) {
  return (
    <Row className={"w-full max-w-[200px] items-center gap-[10px]"}>
      {children}
      <Text className={"body6"}>{txt}</Text>
    </Row>
  );
}
