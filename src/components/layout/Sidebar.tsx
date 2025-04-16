
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
  Settings,
  X,
  Info,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const [advancedOpen, setAdvancedOpen] = React.useState(false);
  
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
        "h-full w-64 bg-sidebar z-20 shadow-md flex flex-col transition-transform duration-300 ease-in-out",
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
          
          {/* Advanced Settings Section */}
          <div className="mt-4 pt-4 border-t border-sidebar-border">
            <Collapsible 
              open={advancedOpen}
              onOpenChange={setAdvancedOpen}
              className="w-full"
            >
              <CollapsibleTrigger className="flex w-full items-center px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
                <Settings className="mr-3 h-4 w-4" />
                Advanced Settings
                <ChevronRight 
                  className={cn(
                    "ml-auto h-4 w-4 transition-transform",
                    advancedOpen && "rotate-90"
                  )}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-10 pr-3 py-2 space-y-2">
                <Link
                  to="/image-search"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Image Search
                </Link>
                <Link
                  to="/notes"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Notes
                </Link>
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
