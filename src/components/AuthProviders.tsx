"use client";
import React, { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/Toast/useToast";
import useUserStore from "@/store/userStore";
import { useTranslation } from "react-i18next";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function AuthProviders({ children }: Props) {
  const router = useRouter();
  const [init, setInit] = React.useState(false);
  const { success } = useToast();
  const { setAuthModal } = useUserStore();
  const { t } = useTranslation();

  useLayoutEffect(() => {
    // authData.authentication.getAccessToken().then((res) => {
    //   if (!res) {
    //     router.push("/");
    //     setAuthModal(true);
    //     return success(t("guest_login_error"));
    //   }
    //   setInit(true);
    // });
  }, []);

  return <>{init && children}</>;
}
