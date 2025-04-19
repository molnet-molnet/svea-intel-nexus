
import React from "react";
import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";

interface SidebarZenProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SidebarZen = ({ open, setOpen }: SidebarZenProps) => {
  return (
    <div 
      className={cn(
        "fixed inset-y-0 left-0 z-20 transition-all duration-2000 ease-in-out",
        open ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} />
      
      {/* Updated tab with new logo */}
      <div 
        className={cn(
          "absolute top-36 -right-12 h-24 w-12 flex items-center justify-center cursor-pointer transition-all duration-2000 ease-in-out",
          open ? "translate-x-64" : "translate-x-0"
        )}
        onClick={() => setOpen(!open)}
      >
        <div className="w-10 h-10 bg-[#143f6b] rounded-full border border-[#9A7D2E]/60 flex items-center justify-center overflow-hidden">
          <img
            src="/lovable-uploads/92895bdd-322a-4f8c-9818-5398aa73bcc6.png"
            alt="Menu Toggle"
            className="w-8 h-8 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarZen;
