
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-zen-mist misty-bg">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1 overflow-auto p-4 md:p-6 pt-4 z-10">
          {children}
        </main>
      </div>
      <Toaster />
    </div>
  );
};

export default MainLayout;
