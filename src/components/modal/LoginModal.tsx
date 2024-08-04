"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useUserStore from "@/store/userStore";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import Image from "next/image";
import Row from "@/components/Layout/Row";

export default function LoginModal() {
  const { login, isAuthModal, setAuthModal, isLogin } = useUserStore();
  const { t } = useTranslation();
  const { theme } = useTheme();
  if (isLogin) {
    return null;
  }
  return (
    <Dialog open={isAuthModal !== ""} onOpenChange={setAuthModal}>
      <DialogContent className="tb:max-w-[430px]">
        <DialogHeader>
          <DialogTitle>{t(isAuthModal)}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            className="text-popover-background relative h-[42px] bg-popover-foreground"
            onClick={() => login("google")}
          >
            <Image
              className={"absolute left-[15px]"}
              width={18}
              height={18}
              src={"/images/icon-google-dark.png"}
              alt={"google-icon"}
            />
            Google 계정으로 {t(isAuthModal)}
          </Button>
          <Button
            className="text-popover-background relative h-[42px] bg-popover-foreground"
            onClick={() => login("apple")}
          >
            <Image
              className={"absolute left-[15px]"}
              width={18}
              height={18}
              src={
                theme === "dark"
                  ? "/images/icon-apple-light.png"
                  : "/images/icon-apple-dark.png"
              }
              alt={"apple-icon"}
            />
            Apple 계정으로 {t(isAuthModal)}
          </Button>
        </div>
        <DialogFooter className={"body6"}>
          <Row className={"text-placeholder w-full justify-center gap-1"}>
            COIN PICKLE{" "}
            <span className={"font-bold text-foreground"}>이용약관</span>과
            <span className={"font-bold text-foreground"}>
              개인정보보호정책
            </span>
            에 자동 동의 처리됩니다.
          </Row>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
