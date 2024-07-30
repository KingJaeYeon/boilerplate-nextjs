import React, { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
} & ComponentProps<"div">;

const Section = forwardRef<HTMLDivElement, Props>(
  ({ children, className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          `tb:max-w-[808px] tb:px-0 dt:max-w-[1370px] dt:px-[10px] w-full max-w-full`,
          className,
        )}
      >
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";

export default Section;
