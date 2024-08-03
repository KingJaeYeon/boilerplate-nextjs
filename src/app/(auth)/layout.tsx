import React from "react";
import AuthProvider from "@/components/AuthProviders";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

function Layout({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default Layout;
