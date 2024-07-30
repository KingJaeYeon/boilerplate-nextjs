import React from "react";

export function SquareButtonSm({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <button
      className={"heading7 h-[32px] rounded-[6px] border px-[15px] py-[7px]"}
    >
      {children}
    </button>
  );
}

export function SquareButtonLg({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <button
      className={
        "heading5 h-[45px] w-full max-w-[328px] rounded-[6px] border px-[15px] pb-[14px] pt-[12px]"
      }
    >
      {children}
    </button>
  );
}
