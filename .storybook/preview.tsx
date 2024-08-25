"use client";
import type { Preview } from "@storybook/react";
import "@/app/globals.css";
import { notoSansKR, pretendard } from "../src/app/fonts";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/app/globals.css";
import { clsx } from "clsx";
import QueryProvider from "../src/components/QueryProvider";
import { TooltipProvider } from "../src/components/ui/tooltip";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        className={clsx(
          `${pretendard.variable} ${notoSansKR.className} bg-background font-pretendard text-foreground`,
        )}
      >
        <QueryProvider>
          <TooltipProvider delayDuration={0}>
            <Story />
          </TooltipProvider>
        </QueryProvider>
      </div>
    ),
    withThemeByClassName({
      themes: {
        // nameOfTheme: 'classNameForTheme',
        light: "light",
        dark: "dark",
      },
      defaultTheme: "dark",
    }),
  ],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
    },
  },
};

export default preview;
