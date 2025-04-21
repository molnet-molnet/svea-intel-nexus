
import React from "react";
import { cn } from "@/lib/utils";

/**
 * Professional right-hand genie tab:
 * Thin, tall, gold+blue line accent, modern icon center, right border glow.
 * Only visible when sidebar is closed.
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
      "fixed top-48 right-0 z-[32] flex items-center transition-all duration-700 sidebar-tab",
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
        "w-12 h-20 bg-white/90 shadow-md rounded-l-3xl flex items-center justify-center cursor-pointer border-l-4 border-[#5e6ea9] hover:bg-[#f5eee2] transition-all",
        "relative group"
      )}
      style={{
        borderLeftColor: "#9A7D2E",
        borderLeftWidth: "4px",
        boxShadow: "0 0 12px 0 #4b668933",
        borderRight: "1.5px solid #bdd3fa44",
      }}
    >
      <span
        className="absolute top-[17.5%] bottom-[17.5%] right-2.5 w-0.5 rounded-md"
        style={{
          background: "linear-gradient(to bottom, #9A7D2E 37%,#5e6ea9 100%)",
          opacity: open ? 0 : 0.54,
          transition: "opacity 0.23s"
        }}
      />
      {!open && (
        <span className="flex items-center justify-center">
          {icon}
        </span>
      )}
    </div>
  </div>
);

export default SidebarTab;
