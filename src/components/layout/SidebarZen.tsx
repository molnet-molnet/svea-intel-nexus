
import React from "react";
import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";
import { Eye } from "lucide-react";

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
      
      <div 
        className={cn(
          "absolute top-36 -right-12 h-24 w-12 flex items-center justify-center cursor-pointer transition-all duration-1000 ease-in-out",
          open ? "translate-x-64 opacity-0" : "translate-x-0 opacity-100"
        )}
        onClick={() => setOpen(!open)}
      >
        <div className="w-10 h-10 bg-[#143f6b]/90 backdrop-blur-sm rounded-full border border-[#9A7D2E]/40 flex items-center justify-center hover:bg-[#143f6b] transition-colors">
          <Eye className="h-5 w-5 text-[#9A7D2E]" />
        </div>
      </div>
    </div>
  );
};

export default SidebarZen;
