import React from "react";
import { Trans } from "react-i18next";
import { cn } from "@/lib/utils";
import Row from "@/components/Layout/Row";

function FormatTxt({ t, i18nKey, children, className, values }: any) {
  return (
    <Row className={cn("flex-wrap gap-1 whitespace-nowrap", className)}>
      <Trans t={t} i18nKey={i18nKey} values={values}>
        {children}
      </Trans>
    </Row>
  );
}

export default FormatTxt;
