"use client";
import Row from "@/components/Layout/Row";
import { Button } from "@/components/ui/button";
import Col from "@/components/Layout/Col";
import { useToast } from "@/components/Toast/useToast";

export default function GuideButton() {
  const { error, info, success, action } = useToast();
  const data = {
    player: {
      embedHtml:
        '<iframe width="1200" height="675" src="https://www.youtube.com/embed/uQgZMB5RKh4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      embedHeight: "675",
      embedWidth: "1200",
    },
  };
  return (
    <Col className={"gap-[5px]"}>
      <Row className={"items-center gap-[10px]"}>
        <Button size={"md"} variant={"primary"} onClick={() => error("error")}>
          Error
        </Button>
        <Button size={"md"} variant={"primary"} onClick={() => info("info")}>
          Info
        </Button>
        <Button
          size={"md"}
          variant={"primary"}
          onClick={() => success("success")}
        >
          Success
        </Button>
        <Button
          size={"md"}
          variant={"primary"}
          onClick={() => action("action", () => alert("action"))}
        >
          Action
        </Button>
      </Row>

      {/*<iframe*/}
      {/*  width="1200"*/}
      {/*  height="675"*/}
      {/*  src="https://www.youtube.com/embed/uQgZMB5RKh4"*/}
      {/*  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
      {/*  referrerPolicy="strict-origin-when-cross-origin"*/}
      {/*  allowFullScreen={true}*/}
      {/*></iframe>*/}
      <Row className={"items-center gap-[10px]"}>
        <Button size={"sm"} variant={"primary"}>
          Small Button
        </Button>
        <Button size={"md"} variant={"primary"}>
          Medium Button
        </Button>
        <Button size={"lg"} variant={"primary"}>
          Large Button
        </Button>
        <Button size={"lg"} variant={"primary"} disabled>
          Large Button
        </Button>
        <Button size={"lg"} variant={"primary"} loading>
          Large Button
        </Button>
      </Row>
      <Row className={"items-center gap-[10px]"}>
        <Button size={"sm"} variant={"secondary"}>
          Small Button
        </Button>
        <Button size={"md"} variant={"secondary"}>
          Medium Button
        </Button>
        <Button size={"lg"} variant={"secondary"}>
          Large Button
        </Button>
        <Button size={"lg"} variant={"secondary"} disabled>
          Large Button
        </Button>
        <Button size={"lg"} variant={"secondary"} loading>
          Large Button
        </Button>
      </Row>
      <Row className={"items-center gap-[10px]"}>
        <Button size={"sm"} variant={"outline"}>
          Small Button
        </Button>
        <Button size={"md"} variant={"outline"}>
          Medium Button
        </Button>
        <Button size={"lg"} variant={"outline"}>
          Large Button
        </Button>
        <Button size={"lg"} variant={"outline"} disabled>
          Large Button
        </Button>
        <Button size={"lg"} variant={"outline"} loading>
          Large Button
        </Button>
      </Row>
      <Row className={"items-center gap-[10px]"}>
        <Button size={"sm"} variant={"ghost"}>
          Small Button
        </Button>
        <Button size={"md"} variant={"ghost"}>
          Medium Button
        </Button>
        <Button size={"lg"} variant={"ghost"}>
          Large Button
        </Button>
        <Button size={"lg"} variant={"ghost"} disabled>
          Large Button
        </Button>
        <Button size={"lg"} variant={"ghost"} loading>
          Large Button
        </Button>
      </Row>
    </Col>
  );
}
