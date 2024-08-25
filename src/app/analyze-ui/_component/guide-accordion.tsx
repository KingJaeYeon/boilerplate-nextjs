"use client";

import Row from "@/components/Layout/Row";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import React from "react";
import Col from "@/components/Layout/Col";

export default function GuideAccordion() {
  const [open, setOpen] = React.useState(false);
  return (
    <Row className={"py-[24px]"}>
      <Accordion type="single" collapsible>
        <AccordionItem value="cryptocurrency">
          <AccordionTrigger>
            <Button
              variant={"outline"}
              size={"sm"}
              onClick={() => setOpen(!open)}
            >
              {open ? "숨기기" : "더보기"}
            </Button>
          </AccordionTrigger>
          <AccordionContent>
            <Col className={"w-full gap-2"}>
              지난 24시간 동안의 총 암호 화폐 시장 거래량은 $ 133.91B (이)며,
              -24.81 % 감소했습니다. 현재 DeFi 총 거래량은 $ 112.31B (으)로,
              지난 24시간 총 암호 화폐 시장 거래량의 9.37 % 에 해당합니다. 모든
              스테이블 코인의 거래량은 현재 $ 122.27B (이)며, 이는 지난 24시간
              총 암호화폐 시장 거래량의 91.30 % 에 해당합니다,. 현재 비트코인
              도미넌스는 51.54 % (이)며, 지난 하루동안 -0.41 % 의 증가량을
              보였습니다.
            </Col>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Row>
  );
}
