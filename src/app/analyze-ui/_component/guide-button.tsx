"use client";
import Row from "@/components/Layout/Row";
import { Button } from "@/components/ui/button";
import Col from "@/components/Layout/Col";
import { useToast } from "@/components/Toast/useToast";
import { IconClose, IconLeft, IconMoving } from "@/assets/svg";
import Text from "@/components/Layout/Text";

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
    <Col className={"gap-[20px] bg-background py-[24px]"}>
      {/*<iframe*/}
      {/*  width="1200"*/}
      {/*  height="675"*/}
      {/*  src="https://www.youtube.com/embed/uQgZMB5RKh4"*/}
      {/*  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
      {/*  referrerPolicy="strict-origin-when-cross-origin"*/}
      {/*  allowFullScreen={true}*/}
      {/*></iframe>*/}
      <Col className={"gap-[10px]"}>
        <Text className={"body4"}>Large</Text>
        <Row className={"flex-wrap items-center gap-[10px]"}>
          <Button variant={"primary"} size={"lg"}>
            Primary
          </Button>
          <Button size={"lg"}>Secondary</Button>
          <Button variant={"outline"} size={"lg"}>
            Outline
          </Button>
          <Button variant={"ghost"} size={"lg"}>
            Ghost
          </Button>
          <Button variant={"default"} size={"lg"}>
            Default
          </Button>
        </Row>
      </Col>
      <Col className={"gap-[10px]"}>
        <Text className={"body4"}>Medium</Text>
        <Row className={"flex-wrap items-center gap-[10px]"}>
          <Button variant={"primary"}>Primary</Button>
          <Button>Secondary</Button>
          <Button variant={"outline"}>Outline</Button>
          <Button variant={"ghost"}>Ghost</Button>
          <Button variant={"default"}>Default</Button>
        </Row>
      </Col>
      <Col className={"gap-[10px]"}>
        <Text className={"body4"}>Small</Text>
        <Row className={"flex-wrap items-center gap-[10px]"}>
          <Button variant={"primary"} size={"sm"}>
            Primary
          </Button>
          <Button size={"sm"}>Secondary</Button>
          <Button variant={"outline"} size={"sm"}>
            Outline
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            Ghost
          </Button>
          <Button variant={"default"} size={"sm"}>
            Default
          </Button>
        </Row>
      </Col>
      <Col className={"gap-[10px]"}>
        <Text className={"body4"}>Default</Text>
        <Row className={"flex-wrap items-center gap-[10px]"}>
          <Button variant={"primary"} size={"default"}>
            Primary
          </Button>
          <Button size={"default"}>Secondary</Button>
          <Button variant={"outline"} size={"default"}>
            Outline
          </Button>
          <Button variant={"ghost"} size={"default"}>
            Ghost
          </Button>
          <Button variant={"default"} size={"default"}>
            Default
          </Button>
        </Row>
      </Col>
      <Col className={"gap-[10px]"}>
        <Text className={"body4"}>Disabled</Text>
        <Row className={"flex-wrap items-center gap-[10px]"}>
          <Button variant={"primary"} disabled>
            Primary
          </Button>
          <Button disabled>Secondary</Button>
          <Button variant={"outline"} disabled>
            Outline
          </Button>
          <Button variant={"ghost"} disabled>
            Ghost
          </Button>
          <Button variant={"default"} disabled>
            Default
          </Button>
        </Row>
      </Col>
      <Col className={"gap-[10px]"}>
        <Text className={"body4"}>Loading</Text>
        <Row className={"flex-wrap items-center gap-[10px]"}>
          <Button variant={"primary"} loading>
            Primary
          </Button>
          <Button loading>Secondary</Button>
          <Button variant={"outline"} loading>
            Outline
          </Button>
          <Button variant={"ghost"} loading>
            Ghost
          </Button>
          <Button variant={"default"} loading>
            Default
          </Button>
        </Row>
      </Col>

      <Col className={"gap-[10px]"}>
        <Text className={"body4"}>Icon</Text>
        <Row className={"flex-wrap items-center gap-[10px]"}>
          <Button
            variant={"primary"}
            leftIcon={<IconMoving />}
            rightIcon={<IconClose />}
          >
            Primary
          </Button>
          <Button leftIcon={<IconMoving />} rightIcon={<IconClose />}>
            Secondary
          </Button>
          <Button
            variant={"outline"}
            leftIcon={<IconMoving />}
            rightIcon={<IconClose />}
          >
            Outline
          </Button>
          <Button
            variant={"ghost"}
            leftIcon={<IconMoving />}
            rightIcon={<IconClose />}
          >
            Ghost
          </Button>
          <Button
            variant={"default"}
            leftIcon={<IconMoving />}
            rightIcon={<IconClose />}
          >
            Default
          </Button>
        </Row>
      </Col>
    </Col>
  );
}
