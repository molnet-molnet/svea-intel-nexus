
import React from "react";
import { Link } from "react-router-dom";
import { Home, User, Briefcase, Phone, Globe, Database } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Person Search", href: "/search/person", icon: User },
  { name: "Company Search", href: "/search/company", icon: Briefcase },
  { name: "Phone Search", href: "/search/phone", icon: Phone },
  { name: "Social Media", href: "/search/social", icon: Globe },
  { name: "Resources", href: "/sources", icon: Database },
];

interface NavigationProps {
  onNavigate: () => void;
}

export const Navigation = ({ onNavigate }: NavigationProps) => {
  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-[#002244] hover:bg-[#143f6b]/10 transition-colors"
          onClick={onNavigate}
        >
          <item.icon className="mr-3 h-4 w-4" />
          {item.name}
        </Link>
      ))}
    </>
  );
};
