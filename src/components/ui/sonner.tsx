"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import Confirm from "@/assets/svg/IconConfirm";
import Error from "@/assets/svg/IconError";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group w-[90%] max-w-[1300px]"
      position={"top-center"}
      icons={{
        success: <Confirm />,
        error: <Error />,
      }}
      toastOptions={{
        unstyled: true,
        className:
          "flex flex-row gap-3 items-center justify-center p-3 rounded-lg text-foreground border w-full md:max-w-[1300px] backdrop-blur heading5",
      }}
      {...props}
    />
  );
};

export { Toaster };
