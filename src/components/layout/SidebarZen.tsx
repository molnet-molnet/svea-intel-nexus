
import React from "react";
import Sidebar from "./Sidebar";
import SidebarTab from "./SidebarTab";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarZenProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SidebarZen = ({ open, setOpen }: SidebarZenProps) => {
  // For animation coordination
  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-20 transition-all duration-700 ease-in-out",
        open ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} />
      <SidebarTab
        open={open}
        icon={<Menu className="h-6 w-6 text-[#9A7D2E]" />}
        onClick={() => setOpen(!open)}
      />
    </div>
  );
};

export default SidebarZen;
