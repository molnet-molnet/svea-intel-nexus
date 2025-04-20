
import React from "react";
import { cn } from "@/lib/utils";

/**
 * A professional look, golden-accent tab for the left sidebar.
 * When active, the icon is hidden; when collapsed, it's shown.
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
      "fixed top-36 left-0 z-30 flex items-center transition-all duration-700",
      open ? "-translate-x-16 opacity-0 pointer-events-none" : "translate-x-0 opacity-100"
    )}
    tabIndex={0}
    role="button"
    aria-label="Open sidebar"
    onClick={onClick}
    onKeyDown={e => (e.key === "Enter" || e.key === " ") && onClick()}
    style={{ outline: "none" }}
  >
    <div className="w-11 h-24 bg-white/80 border-l-4 border-[#9A7D2E] shadow-lg rounded-r-2xl flex items-center justify-center group hover:bg-[#f5eee2] hover:shadow-xl transition-all cursor-pointer">
      {!open && (
        <span className="flex items-center justify-center">
          {icon}
        </span>
      )}
    </div>
  </div>
);

export default SidebarTab;
