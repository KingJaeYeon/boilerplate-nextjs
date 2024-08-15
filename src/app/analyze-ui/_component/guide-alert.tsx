"use client";
import Col from "@/components/Layout/Col";
import Row from "@/components/Layout/Row";
import Alert from "@/components/Alert";
import { Button } from "@/components/ui/button";
import AuthCodeModal from "@/components/modal/AuthCodeModal";
import { useState } from "react";
import useUserStore from "@/store/userStore";

export default function GuideAlert() {
  const [timer, setTimer] = useState<number>(0);
  const [phone, setPhone] = useState<string>("");
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [loadingAuthCode, setLoadingAuthCode] = useState<boolean>(false);
  const { setAuthModal } = useUserStore();
  return (
    <Col className={"gap-[5px]"}>
      <Row className={"items-center gap-[10px]"}>
        <Alert>
          <Button size={"md"} variant={"secondary"}>
            Alert
          </Button>
        </Alert>
        <AuthCodeModal
          open={authModalOpen}
          setOpen={setAuthModalOpen}
          timer={timer}
          setTimer={setTimer}
          phone={phone}
          setPhone={setPhone}
          setLoadingAuthCode={setLoadingAuthCode}
        >
          <Button size={"md"} variant={"secondary"}>
            AuthCodeModal
          </Button>
        </AuthCodeModal>

        <Button
          onClick={() => setAuthModal(true)}
          variant={"secondary"}
          size={"md"}
        >
          로그인 버튼
        </Button>
      </Row>
    </Col>
  );
}
