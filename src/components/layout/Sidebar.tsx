
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home,
  User,
  Briefcase,
  Phone,
  Globe,
  Database,
  X,
  Settings2,
  ChevronRight,
  Upload,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const [advancedToolsOpen, setAdvancedToolsOpen] = React.useState(false);
  const [advancedOptionsOpen, setAdvancedOptionsOpen] = React.useState(false);
  
  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Person Search", href: "/search/person", icon: User },
    { name: "Company Search", href: "/search/company", icon: Briefcase },
    { name: "Phone Search", href: "/search/phone", icon: Phone },
    { name: "Social Media", href: "/search/social", icon: Globe },
    { name: "Resources", href: "/sources", icon: Database },
  ];

  return (
    <aside
      className={cn(
        "h-auto max-h-[70vh] my-auto w-64 bg-white/80 backdrop-blur-sm z-20 shadow-md flex flex-col transition-transform duration-2000 ease-in-out border border-[#143f6b]/60 rounded-l-xl", // Changed to only round left corners
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
          {/* Advanced Options Section - Now as first item in menu */}
          <div className="mb-4 pb-4 border-b border-[#143f6b]/20">
            <Collapsible 
              open={advancedOptionsOpen}
              onOpenChange={setAdvancedOptionsOpen}
              className="w-full"
            >
              <CollapsibleTrigger className="flex w-full items-center px-3 py-2 rounded-md text-sm font-medium text-[#002244] bg-[#143f6b]/10 hover:bg-[#143f6b]/20 transition-colors">
                <Settings2 
                  className="mr-3 h-4 w-4"
                />
                Advanced Options
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 pr-2 py-2 space-y-4 animate-fade-in">
                <Card className="border border-[#143f6b]/20 bg-white/90">
                  <CardContent className="pt-4 pb-2">
                    <h3 className="font-medium mb-2 text-sm text-[#002244]">Search Filters</h3>
                    <div className="space-y-2">
                      <div className="p-3 bg-white/80 rounded-lg border border-black/5">
                        Location Filters
                      </div>
                      <div className="p-3 bg-white/80 rounded-lg border border-black/5">
                        Data Source Filters
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-[#143f6b]/20 bg-white/90">
                  <CardContent className="pt-4 pb-2">
                    <h3 className="font-medium mb-2 text-sm text-[#002244]">Image Search</h3>
                    <div className="flex justify-end">
                      <Button size="sm" className="rounded-xl bg-[#143f6b] text-white">
                        <Upload className="mr-2 h-3 w-3" />
                        Upload Image
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="pt-2 border-t border-[#143f6b]/20">
                  <h3 className="font-medium mb-2 text-xs text-[#002244]/70 px-2">OSINT Resources</h3>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://osintframework.com" target="_blank" rel="noopener noreferrer" className="text-xs px-2 py-1 rounded-full bg-[#143f6b]/10 text-[#002244]/80 hover:bg-[#143f6b]/20 transition-colors">
                      osintframework.com
                    </a>
                    <a href="https://intelx.io" target="_blank" rel="noopener noreferrer" className="text-xs px-2 py-1 rounded-full bg-[#143f6b]/10 text-[#002244]/80 hover:bg-[#143f6b]/20 transition-colors">
                      intelx.io
                    </a>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          {/* Navigation Links */}
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-[#002244] hover:bg-[#143f6b]/10 transition-colors"
              onClick={() => setOpen(false)}
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.name}
            </Link>
          ))}
          
          {/* Advanced Tools Section */}
          <div className="mt-4 pt-4 border-t border-[#143f6b]/20">
            <Collapsible 
              open={advancedToolsOpen}
              onOpenChange={setAdvancedToolsOpen}
              className="w-full"
            >
              <CollapsibleTrigger className="flex w-full items-center px-3 py-2 rounded-md text-sm font-medium text-[#002244] hover:bg-[#143f6b]/10 transition-colors">
                <ChevronRight 
                  className={cn(
                    "mr-3 h-4 w-4 transition-transform",
                    advancedToolsOpen && "rotate-90"
                  )}
                />
                Advanced Tools
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 pr-2 py-2 space-y-4">
                <Card className="border border-[#143f6b]/20 bg-white/90">
                  <CardContent className="pt-4 pb-2">
                    <h3 className="font-medium mb-2 text-sm text-[#002244]">Notes</h3>
                    <div className="flex justify-end">
                      <Button size="sm" className="rounded-xl bg-[#143f6b] text-white">
                        <FileText className="mr-2 h-3 w-3" />
                        Open Notes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </nav>
        
        {/* Settings wheel now inside the sidebar at the bottom */}
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
