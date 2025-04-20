
import React from "react";
import { cn } from "@/lib/utils";

/**
 * Professional right-hand genie tab:
 * Thin, tall, gold-accented, rounded left, blue border line.
 * Visible when sidebar closed (+hover gold), gone when open.
 */
const SidebarTab = ({
  open,
  onClick,
  icon,
}: {
  open: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}) => (
  <div
    className={cn(
      "fixed top-40 right-0 z-[32] flex items-center transition-all duration-700 sidebar-tab",
      open
        ? "translate-x-16 opacity-0 pointer-events-none"
        : "translate-x-0 opacity-100 pointer-events-auto"
    )}
    tabIndex={0}
    role="button"
    aria-label="Open sidebar"
    onClick={onClick}
    onKeyDown={e => (e.key === "Enter" || e.key === " ") && onClick()}
    style={{ outline: "none" }}
  >
    <div
      className={cn(
        "px-0.5 w-11 h-20 bg-white/80 shadow-sm rounded-l-2xl flex items-center group cursor-pointer border-l-[3.5px]",
        "border-l-[#9A7D2E] hover:bg-[#f5eee2] hover:border-l-[#b4993a] border-l-solid"
      )}
    >
      {!open && (
        <span className="flex items-center justify-center">
          {icon}
        </span>
      )}
    </div>
  </div>
);

export default SidebarTab;

