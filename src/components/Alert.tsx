"use client";
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
import { ReactNode, useState } from "react";

export default function Alert({
  children,
  title,
  description,
  confirmHandler,
}: {
  children: ReactNode;
  title: string;
  description?: string;
  confirmHandler?: () => Promise<void> | void;
}) {
  const [open, setOpen] = useState(false);

  const handleConfirm = async () => {
    !!confirmHandler && (await confirmHandler());
    setOpen(false);
  };

  const openAlertHandler = (open: boolean) => {
    if (open) {
      setOpen(open);
    }
  };

  const closeAlertHandler = () => {
    setOpen(false);
  };
  return (
    <AlertDialog open={open} onOpenChange={openAlertHandler}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeAlertHandler}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
