"use client";
import Col from "@/components/Layout/Col";
import Row from "@/components/Layout/Row";
import flag from "../../../../public/images/flag/flag.json";
import Image from "next/image";

export default function GuideFlag() {
  const flags = Object.keys(flag);
  return (
    <Col className={"gap-[5px]"}>
      <Row className={"flex-wrap items-center gap-[10px]"}>
        {flags.map((item) => (
          <Image
            src={`/images/flag/default/${item}.svg`}
            key={item}
            alt={item}
            width={24}
            height={24}
          />
        ))}
      </Row>
    </Col>
  );
}
