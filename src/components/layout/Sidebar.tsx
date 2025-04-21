
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Settings2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Navigation } from "./sidebar/Navigation";
import { AdvancedOptions } from "./sidebar/AdvancedOptions";
import { AdvancedTools } from "./sidebar/AdvancedTools";
import { useSidebarState } from "@/hooks/use-sidebar-state";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const {
    advancedToolsOpen,
    setAdvancedToolsOpen,
    advancedOptionsOpen,
    setAdvancedOptionsOpen
  } = useSidebarState();
  
  return (
    <aside
      className={cn(
        "h-auto max-h-[70vh] my-auto w-64 bg-white/80 backdrop-blur-sm z-20 shadow-md flex flex-col transition-transform duration-2000 ease-in-out border border-[#143f6b]/60 rounded-l-xl",
        open ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between h-16 px-4 border-b border-[#143f6b]/20">
          <span className="text-lg font-medium text-[#002244]">storm</span>
          <Button
            variant="ghost"
            size="icon"
            className="text-[#002244]"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <AdvancedOptions 
            open={advancedOptionsOpen}
            onOpenChange={setAdvancedOptionsOpen}
          />
          <Navigation onNavigate={() => setOpen(false)} />
          <AdvancedTools
            open={advancedToolsOpen}
            onOpenChange={setAdvancedToolsOpen}
          />
        </nav>
        
        <div className="p-3 border-t border-[#143f6b]/20 flex justify-center">
          <Button 
            variant="ghost" 
            size="icon" 
            asChild 
            className="h-9 w-9 rounded-full bg-[#143f6b]/10 hover:bg-[#143f6b]/20 transition-all"
          >
            <Link to="/settings">
              <Settings2 className="h-4 w-4 text-[#002244]" />
              <span className="sr-only">Settings</span>
            </Link>
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
