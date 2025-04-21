
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
  const { setOpen } = useSidebar();

  return (
    <>
      <SidebarTrigger 
        className="fixed top-48 right-0 z-[32] bg-white/90 shadow-md rounded-l-3xl border-l-4 border-[#9A7D2E] h-20 hover:bg-[#f5eee2]"
      />
      <Sidebar side="right" className="h-screen bg-white/80 backdrop-blur-sm">
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
