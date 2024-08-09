"use client";
import React, { useEffect } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Col from "@/components/Layout/Col";
// import { sendSmsV2 } from "@/lib/feathers/server";
import useUserStore from "@/store/userStore";
import { useToast } from "@/components/Toast/useToast";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";

export default function AuthCodeModal({
  open,
  setOpen,
  phone,
  setPhone,
  timer,
  setTimer,
  setLoadingAuthCode,
  children,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  phone: string;
  setPhone: (phone: string) => void;
  timer: number;
  setTimer: any;
  setLoadingAuthCode: (loading: boolean) => void;
  children: React.ReactNode;
}) {
  const [authCode, setAuthCode] = React.useState("");
  const { user, update } = useUserStore();
  const { error, success } = useToast();
  const { t } = useTranslation();

  const { mutate: confirmHandler, isPending: isConfirmLoading } = useMutation({
    mutationFn: async () => {
      // return await sendSmsV2.updateUserInfo({
      //   phone: phone,
      //   userId: user._id,
      //   authCode: authCode,
      // });

      return { data: true };
    },
    onSuccess: (res) => {
      if (res?.data) {
        update({ phone: phone, isPhoneAuth: true });
        success(t("phone_auth_complete"));
        setOpen(false);
      } else {
        error(t("phone_auth_fail"));
      }
    },
  });

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev: any) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  async function openModalHandler(inputOpen: boolean) {
    if (timer > 0 && !open) {
      return setOpen(true);
    } else if (timer > 0 && open) {
      return;
    }

    if (!open) {
      setLoadingAuthCode(true);

      // const checkPhone = await sendSmsV2.checkPhoneNumber({
      //   phone: phone,
      //   userId: user._id,
      // });
      const checkPhone = { data: false };
      if (checkPhone?.data) {
        error(t("phone_auth_exist"));
        return setPhone("");
      }

      // const result = await sendSmsV2.authSendSMS({
      //   phone: phone,
      //   userId: user._id,
      // });
      const result = { data: true };
      if (result) {
        success(t("phone_auth_send"));
        setTimer(20);
      }
      setLoadingAuthCode(false);
      setOpen(inputOpen);
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={openModalHandler}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{"휴대전화 본인인증"}</AlertDialogTitle>
          <AlertDialogDescription>
            {
              "본 사이트의 이벤트 참여를 위해 휴대폰 본인 인증이 필요합니다. 발송된 인증번호를 입력해주세요."
            }
          </AlertDialogDescription>
          <Col className={"gap-[10px] pt-[10px]"}>
            <Label className={"heading7 text-placeholder02"}>
              {"인증번호"}
            </Label>
            <Input
              value={authCode}
              onChange={(e) => setAuthCode(e.target.value)}
              placeholder={"placeholder"}
            />
          </Col>
        </AlertDialogHeader>
        <AlertDialogFooter onSubmit={(e) => e.preventDefault()}>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            {t("cancel")}
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={authCode.length < 5 || isConfirmLoading}
            onClick={() => confirmHandler()}
          >
            {t("confirm")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
