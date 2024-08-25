"use client";
import Row from "@/components/Layout/Row";
import { Button } from "@/components/ui/button";
import Col from "@/components/Layout/Col";
import { useToast } from "@/components/Toast/useToast";
import { IconClose, IconLeft, IconMoving } from "@/assets/svg";

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
    <Col className={"gap-[10px] bg-background py-[24px]"}>
      <Row className={"flex-wrap items-center gap-[10px]"}>
        <Button onClick={() => error("error")}>Error</Button>
        <Button onClick={() => info("info")}>Info</Button>
        <Button onClick={() => success("success")}>Success</Button>
        <Button onClick={() => action("action", () => alert("action"))}>
          Action
        </Button>
        <Button leftIcon={<IconMoving />} rightIcon={<IconClose />}>
          Icon Button
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
      <Row className={"flex-wrap items-center gap-[10px]"}>
        <Button size={"sm"} variant={"primary"}>
          Button Small
        </Button>
        <Button variant={"primary"}>Button Medium</Button>
        <Button size={"lg"} variant={"primary"}>
          Button Large
        </Button>
        <Button variant={"primary"} disabled>
          Disabled
        </Button>
        <Button variant={"primary"} loading>
          Loading...
        </Button>
      </Row>
      <Row className={"flex-wrap items-center gap-[10px]"}>
        <Button size={"sm"}>Button Small</Button>
        <Button>Button Medium</Button>
        <Button size={"lg"} variant={"secondary"}>
          Button Large
        </Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading...</Button>
      </Row>
      <Row className={"flex-wrap items-center gap-[10px]"}>
        <Button size={"sm"} variant={"outline"}>
          Button Small
        </Button>
        <Button variant={"outline"}>Button Medium</Button>
        <Button size={"lg"} variant={"outline"}>
          Button Large
        </Button>
        <Button variant={"outline"} disabled>
          Disabled
        </Button>
        <Button variant={"outline"} loading>
          Loading...
        </Button>
      </Row>
      <Row className={"flex-wrap items-center gap-[10px]"}>
        <Button size={"sm"} variant={"ghost"}>
          Button Small
        </Button>
        <Button variant={"ghost"}>Button Medium</Button>
        <Button size={"lg"} variant={"ghost"}>
          Button Large
        </Button>
        <Button variant={"ghost"} disabled>
          Disabled
        </Button>
        <Button variant={"ghost"} loading>
          Loading...
        </Button>
      </Row>
    </Col>
  );
}
