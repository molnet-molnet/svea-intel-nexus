
import React from "react";
import Sidebar from "./Sidebar";
import SidebarTab from "./SidebarTab";
import { MenuSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarZenProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SidebarZen = ({ open, setOpen }: SidebarZenProps) => {
  return (
    <div
      className={cn(
        "fixed inset-y-0 right-0 z-20 transition-all duration-700 ease-in-out flex flex-row-reverse",
        open ? "translate-x-0" : "translate-x-full"
      )}
      style={{ pointerEvents: "none" }}
    >
      {/* Sidebar: Right edge, pointerEvents auto */}
      <Sidebar open={open} setOpen={setOpen} />
      <SidebarTab
        open={open}
        icon={<MenuSquare className="h-8 w-8 text-[#9A7D2E]" />}
        onClick={() => setOpen(!open)}
      />
    </div>
  );
};

export default SidebarZen;

