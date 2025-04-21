
import React from "react";
import { 
  Sidebar, 
  SidebarContent,
  SidebarHeader,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

const RightSidebar = () => {
  const { open, setOpen } = useSidebar();

  return (
    <>
      <div 
        className={`fixed top-48 right-0 z-[32] bg-white/90 shadow-md rounded-l-3xl border-l-4 border-[#9A7D2E] h-20 hover:bg-[#f5eee2] flex items-center justify-center cursor-pointer transition-opacity duration-300 ${open ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        onClick={() => setOpen(true)}
      >
        <div className="w-12 flex items-center justify-center">
          <span className="h-10 w-0.5 rounded-md bg-gradient-to-b from-[#9A7D2E] to-[#5e6ea9] opacity-60"></span>
        </div>
      </div>
      
      <Sidebar side="right" className="h-screen bg-white/80 backdrop-blur-sm rounded-l-xl">
        <SidebarHeader className="flex justify-between items-center p-4 border-b border-[#143f6b]/20">
          <h2 className="font-medium text-[#002244]">Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            className="text-[#002244]"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </SidebarHeader>
        <SidebarContent>
          {/* Content will be added here based on future requirements */}
        </SidebarContent>
      </Sidebar>
    </>
  );
};

export default RightSidebar;
