
import React from "react";
import { cn } from "@/lib/utils";

/**
 * A professional, golden-accent right-side tab for sidebar.
 * When active, the icon is hidden, appears only when collapsed.
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
      "fixed top-36 right-0 z-30 flex items-center transition-all duration-700",
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
    <div className="w-12 h-24 bg-white/80 border-r-4 border-blue-700 shadow-lg rounded-l-2xl flex items-center justify-center group hover:bg-[#f5eee2] hover:shadow-xl transition-all cursor-pointer"
      style={{ borderRight: "2.5px solid #2563eb" }} // blue-700 accent, round left
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
