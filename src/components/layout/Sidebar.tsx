
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
  Info,
  ChevronRight,
  Upload,
  FileText
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const [advancedOpen, setAdvancedOpen] = React.useState(false);
  const [advancedToolsOpen, setAdvancedToolsOpen] = React.useState(false);
  
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
        "h-full w-64 bg-sidebar z-20 shadow-md flex flex-col transition-transform duration-500 ease-in-out",
        open ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
          <span className="text-lg font-medium text-sidebar-foreground">storm</span>
          <Button
            variant="ghost"
            size="icon"
            className="text-sidebar-foreground"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.name}
            </Link>
          ))}
          
          {/* Advanced Tools Section */}
          <div className="mt-4 pt-4 border-t border-sidebar-border">
            <Collapsible 
              open={advancedToolsOpen}
              onOpenChange={setAdvancedToolsOpen}
              className="w-full"
            >
              <CollapsibleTrigger className="flex w-full items-center px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
                <ChevronRight 
                  className={cn(
                    "mr-3 h-4 w-4 transition-transform",
                    advancedToolsOpen && "rotate-90"
                  )}
                />
                Advanced Tools
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 pr-2 py-2 space-y-4">
                <Card className="border border-sidebar-border bg-sidebar-accent/30">
                  <CardContent className="pt-4 pb-2">
                    <h3 className="font-medium mb-2 text-sm text-sidebar-foreground">Image Search</h3>
                    <div className="flex justify-end">
                      <Button size="sm" className="rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
                        <Upload className="mr-2 h-3 w-3" />
                        Upload Image
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-sidebar-border bg-sidebar-accent/30">
                  <CardContent className="pt-4 pb-2">
                    <h3 className="font-medium mb-2 text-sm text-sidebar-foreground">Notes</h3>
                    <div className="flex justify-end">
                      <Button size="sm" className="rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
                        <FileText className="mr-2 h-3 w-3" />
                        Open Notes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="pt-2 border-t border-sidebar-border/50">
                  <h3 className="font-medium mb-2 text-xs text-sidebar-foreground/70 px-2">OSINT Resources</h3>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://osintframework.com" target="_blank" rel="noopener noreferrer" className="text-xs px-2 py-1 rounded-full bg-sidebar-accent/30 text-sidebar-foreground/80 hover:bg-sidebar-accent/50 transition-colors">
                      osintframework.com
                    </a>
                    <a href="https://intelx.io" target="_blank" rel="noopener noreferrer" className="text-xs px-2 py-1 rounded-full bg-sidebar-accent/30 text-sidebar-foreground/80 hover:bg-sidebar-accent/50 transition-colors">
                      intelx.io
                    </a>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          {/* Advanced Settings Section */}
          <div className="mt-2">
            <Collapsible 
              open={advancedOpen}
              onOpenChange={setAdvancedOpen}
              className="w-full"
            >
              <CollapsibleTrigger className="flex w-full items-center px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
                <ChevronRight 
                  className={cn(
                    "mr-3 h-4 w-4 transition-transform",
                    advancedOpen && "rotate-90"
                  )}
                />
                Advanced Settings
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-10 pr-3 py-2 space-y-2">
                <Link
                  to="/about"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <Info className="mr-3 h-4 w-4" />
                  About
                </Link>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
