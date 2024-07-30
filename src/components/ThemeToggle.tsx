import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch, SwitchThumb } from "@/components/ui/switch";
import { IconSun, IconMoon } from "@/assets/IconTheme";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [checked, setChecked] = useState(theme === "light");

  useEffect(() => {
    // Sync the internal state with the actual theme after rendering
    setChecked(theme === "light");
  }, [theme]);

  const handleThemeChange = (checked: boolean) => {
    setChecked(checked); // This triggers the animation
    // Apply the theme change after a short delay
    setTimeout(() => setTheme(checked ? "light" : "dark"), 150);
  };

  return (
    <Switch
      checked={checked}
      onCheckedChange={handleThemeChange}
      className={cn(
        "h-[24px] w-[50px]",
        theme === "dark" ? "bg-[hsla(180_1%_86%)]" : "",
      )}
      style={{
        backgroundColor:
          theme === "dark" ? "hsla(228, 3%, 34%, 1)" : "hsla(180, 1%, 86%, 1)",
      }}
    >
      <SwitchThumb
        className={cn(
          "flex items-center justify-center data-[state=unchecked]:translate-x-7",
        )}
        style={{
          backgroundColor:
            theme === "dark"
              ? "hsla(180, 1%, 86%, 1)"
              : "hsla(228, 3%, 34%, 1)",
        }}
      >
        {theme === "dark" ? (
          <IconSun className={"h-[14px] w-[14px] text-[hsla(0_0%_36%)]"} />
        ) : (
          <IconMoon className={"text-gray-white"} />
        )}
      </SwitchThumb>
    </Switch>
  );
}

export default ThemeToggle;
