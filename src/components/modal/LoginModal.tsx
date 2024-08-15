"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import useUserStore from "@/store/userStore";
import { useTranslation } from "react-i18next";
import Row from "@/components/Layout/Row";
import { Apple, Google } from "@/assets/svg/platform";
import Text from "@/components/Layout/Text";
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Col from "@/components/Layout/Col";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function LoginModal() {
  const { login, isAuthModal, setAuthModal, isLogin } = useUserStore();
  const { t } = useTranslation();

  if (isLogin) {
    return null;
  }
  return (
    <AlertDialog open={isAuthModal !== ""} onOpenChange={setAuthModal}>
      <AlertDialogContent className="p-[20px] tb:max-w-[430px]">
        <AlertDialogHeader>
          <Row className={"items-center justify-between"}>
            <AlertDialogTitle className={"m-0"}>
              {t(isAuthModal)}
            </AlertDialogTitle>
            <AlertDialogClose />
          </Row>
          <VisuallyHidden>
            <AlertDialogDescription>
              {t("Please choose a login method to continue using COIN PICKLE.")}
            </AlertDialogDescription>
          </VisuallyHidden>
        </AlertDialogHeader>
        <Col className="gap-[10px]">
          <Button
            className="text-popover-background relative h-[42px] items-center rounded-full bg-popover-foreground"
            onClick={() => login("google")}
          >
            <Google className={"absolute left-[15px]"} />
            <Text className={"heading5 font-medium text-background"}>
              Google 계정으로 {t(isAuthModal)}
            </Text>
          </Button>
          <Button
            className="text-popover-background relative h-[42px] rounded-full bg-popover-foreground"
            onClick={() => login("apple")}
          >
            <Apple
              className={"absolute left-[15px] text-white dark:text-black"}
            />
            <Text className={"heading5 font-medium text-background"}>
              Apple 계정으로 {t(isAuthModal)}
            </Text>
          </Button>
        </Col>
        <AlertDialogFooter className={"body6"}>
          <Row className={"text-description w-full justify-center gap-1"}>
            COIN PICKLE{" "}
            <span className={"font-bold text-foreground"}>이용약관</span>과
            <span className={"font-bold text-foreground"}>
              개인정보보호정책
            </span>
            에 자동 동의 처리됩니다.
          </Row>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
