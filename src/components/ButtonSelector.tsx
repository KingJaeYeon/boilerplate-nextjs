"use client";
import { Button } from "@/components/ui/button";
import { IconArrowDown, IconArrowUp } from "@/assets/svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import React from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function ButtonSelector({
  value,
  setValue,
  list,
}: {
  value: string;
  setValue: any;
  list: { [key: string]: string };
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslation();

  return (
    <Select onValueChange={setValue} open={isOpen} onOpenChange={setIsOpen}>
      {/*<SelectTrigger asChild>*/}
      {/*  <Button*/}
      {/*    variant={"secondary"}*/}
      {/*    className={"h-[32px] min-w-fit items-center gap-[5px]"}*/}
      {/*  >*/}
      {/*    <span className={"heading7"}>{t(list[value])}</span>*/}
      {/*    {isOpen ? <IconArrowDown /> : <IconArrowUp />}*/}
      {/*  </Button>*/}
      {/*</SelectTrigger>*/}
      {/*<SelectContent*/}
      {/*  align={"center"}*/}
      {/*  className={"bg-button-secondary-background px-[10px] py-[20px]"}*/}
      {/*>*/}
      {/*  {Object.entries(list).map(([key, value], index) => (*/}
      {/*    <SelectItem*/}
      {/*      key={key + "hour-select"}*/}
      {/*      value={key}*/}
      {/*      className={cn(*/}
      {/*        "hover:bg-button-secondary-background hover:text-primary mb-[20px] h-[18px] min-w-[80px] text-foreground",*/}
      {/*        value === key ? "text-primary" : "",*/}
      {/*        index === Object.entries(list).length - 1 ? "mb-0" : "",*/}
      {/*      )}*/}
      {/*    >*/}
      {/*      {t(value as string)}*/}
      {/*    </SelectItem>*/}
      {/*  ))}*/}
      {/*</SelectContent>*/}
    </Select>
  );
}
