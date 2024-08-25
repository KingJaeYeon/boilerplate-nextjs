import Row from "@/components/Layout/Row";
import Text from "@/components/Layout/Text";

export default function ShowComponentTxt({
  children,
  txt,
}: {
  children?: any;
  txt: string;
}) {
  return (
    <Row className={"w-full max-w-[200px] items-center gap-[10px]"}>
      {children}
      <Text className={"body6"}>{txt}</Text>
    </Row>
  );
}
