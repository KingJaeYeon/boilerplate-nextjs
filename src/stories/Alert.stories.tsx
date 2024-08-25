"use client";
import React, { useState } from "react";
import Col from "@/components/Layout/Col";
import { Button } from "@/components/ui/button";
import Alert from "@/components/Alert";
import AuthCodeModal from "@/components/modal/AuthCodeModal";
import useUserStore from "@/store/userStore";
import LoginModal from "@/components/modal/LoginModal";

const meta = {
  title: "COMPONENTS/Alert",
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <Col className={"gap-[6px] bg-background px-[24px] py-[48px]"}>
        <Story />
      </Col>
    ),
  ],
};
export default meta;

export const Default = () => {
  return (
    <Alert
      title={"차단하시겠습니까?"}
      description={"@wodus331"}
      confirmHandler={() => console.log("click")}
    >
      <Button size={"md"} variant={"secondary"}>
        Alert
      </Button>
    </Alert>
  );
};

export const AuthCode = () => {
  const [timer, setTimer] = useState<number>(0);
  const [phone, setPhone] = useState<string>("");
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [loadingAuthCode, setLoadingAuthCode] = useState<boolean>(false);
  return (
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
  );
};

export const SingUPInAlert = () => {
  const { setAuthModal } = useUserStore();
  return (
    <>
      <Button
        onClick={() => setAuthModal(true)}
        variant={"secondary"}
        size={"md"}
      >
        로그인 버튼
      </Button>
      <LoginModal />
    </>
  );
};
