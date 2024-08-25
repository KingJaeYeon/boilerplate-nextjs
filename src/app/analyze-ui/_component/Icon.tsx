import Row from "@/components/Layout/Row";
import Text from "@/components/Layout/Text";

export default function Icon({ children }: { children?: any }) {
  return (
    <Row className={"w-full max-w-[200px] items-center gap-[10px]"}>
      {children}
      <Text className={"body6"}>{children.type.name}</Text>
    </Row>
  );
}
