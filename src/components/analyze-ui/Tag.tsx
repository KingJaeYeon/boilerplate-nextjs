import Row from "@/components/Layout/Row";
import Text from "@/components/Layout/Text";
import IconClose from "@/assets/svg/IconClose";
import React from "react";

export function RoundedTag({
  children,
  hasClose = false,
}: {
  children: React.ReactNode | React.ReactNode[];
  hasClose?: boolean;
}) {
  return (
    <Row
      className={
        "h-[30px] items-center justify-center gap-[5px] rounded-[18px] border px-[13px] py-[8px]"
      }
    >
      <Text className={"heading7 relative top-[1px]"}>{children}</Text>
      {hasClose && <IconClose className={"h-[16px] w-[16px]"} />}
    </Row>
  );
}
