
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home,
  Search,
  User,
  Briefcase,
  Phone,
  Globe,
  Database,
  Shield,
  X,
  Info
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const navigation = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Person Search", href: "/search/person", icon: User },
    { name: "Company Search", href: "/search/company", icon: Briefcase },
    { name: "Phone Search", href: "/search/phone", icon: Phone },
    { name: "Social Media", href: "/search/social", icon: Globe },
    { name: "Data Sources", href: "/sources", icon: Database },
    { name: "Compliance", href: "/compliance", icon: Shield },
    { name: "About", href: "/about", icon: Info }
  ];

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 w-64 bg-sidebar z-20 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:w-64 md:shrink-0",
        open ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
          <span className="text-lg font-medium text-sidebar-foreground">OSINT Navigator</span>
          <Button
            variant="ghost"
            size="icon"
            className="text-sidebar-foreground md:hidden"
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
        </nav>
        <div className="p-4 border-t border-sidebar-border">
          <p className="text-sm text-sidebar-foreground/70">
            SVEA Intel Nexus v1.0
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
