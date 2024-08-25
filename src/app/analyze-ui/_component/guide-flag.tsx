"use client";
import Col from "@/components/Layout/Col";
import Row from "@/components/Layout/Row";
import flag from "../../../../public/images/flag/flag.json";
import Image from "next/image";
import ShowComponentTxt from "@/app/analyze-ui/_component/show-component-txt";

export default function GuideFlag() {
  const flags = Object.keys(flag);
  const stringify = JSON.parse(JSON.stringify(flag));
  return (
    <Col className={"gap-[5px] py-[24px]"}>
      <Row className={"flex-wrap items-center gap-[20px]"}>
        {flags.map((item) => (
          <ShowComponentTxt
            key={item}
            txt={`${item}.svg(${stringify[item]["translation-ko"]})`}
          >
            <Image
              src={`/images/flag/default/${item}.svg`}
              alt={item}
              width={24}
              height={24}
            />
          </ShowComponentTxt>
        ))}
      </Row>
    </Col>
  );
}
