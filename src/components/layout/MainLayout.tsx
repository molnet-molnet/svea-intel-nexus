
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./Navbar";
import BackgroundPattern from "./BackgroundPattern";
import { SidebarProvider } from "@/components/ui/sidebar";
import RightSidebar from "./sidebar/RightSidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex flex-col bg-zen-mist misty-bg relative w-full">
        <BackgroundPattern />
        <Navbar />
        
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 overflow-auto p-4 md:p-6 pt-4 z-10">
            {children}
          </main>
          <RightSidebar />
        </div>

        <Toaster />
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
