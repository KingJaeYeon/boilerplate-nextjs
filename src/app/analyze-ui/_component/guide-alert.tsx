import Col from "@/components/Layout/Col";
import Row from "@/components/Layout/Row";
import Alert from "@/components/Alert";
import { Button } from "@/components/ui/button";

export default function GuideAlert() {
  return (
    <Col className={"gap-[5px]"}>
      <Row className={"items-center gap-[10px]"}>
        <Alert>
          <Button size={"md"} variant={"secondary"}>
            Alert
          </Button>
        </Alert>
      </Row>
    </Col>
  );
}
