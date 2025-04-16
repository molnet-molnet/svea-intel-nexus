
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/person?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        {/* Advanced Options Sheet */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 border-black/10 transition-all duration-500"
              >
                <Settings2 className="h-4 w-4 mr-2" />
                Advanced Options
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[320px] sm:w-[450px] bg-white/90 backdrop-blur-md border-black/10 transition-all duration-500">
              <div className="p-4">
                <h3 className="text-lg font-medium mb-4">Advanced Search Options</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Search Filters</h4>
                    <div className="space-y-2">
                      {/* Placeholder for filters */}
                      <div className="p-3 bg-white/80 rounded-lg border border-black/5">
                        Location Filters
                      </div>
                      <div className="p-3 bg-white/80 rounded-lg border border-black/5">
                        Data Source Filters
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">OSINT Resources</h4>
                    <div className="flex flex-wrap gap-2">
                      <a href="https://osintframework.com" target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-full bg-zen-fog/60 border border-black/10 text-foreground/80 hover:bg-zen-aqua/30 transition-colors">
                        osintframework.com
                      </a>
                      <a href="https://intelx.io" target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-full bg-zen-fog/60 border border-black/10 text-foreground/80 hover:bg-zen-aqua/30 transition-colors">
                        intelx.io
                      </a>
                      <a href="https://github.com/jivoi/awesome-osint" target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-full bg-zen-fog/60 border border-black/10 text-foreground/80 hover:bg-zen-aqua/30 transition-colors">
                        awesome-osint
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Image Search</h4>
                    <Button size="sm" className="w-full rounded-xl">
                      Upload Image
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Clean, centered search bar */}
        <div className="flex flex-col items-center text-center space-y-8 w-full max-w-xl px-4">
          <form onSubmit={handleSearch} className="w-full transition-all">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search"
                className="w-full h-14 pl-6 pr-16 text-lg bg-white/80 rounded-2xl border-black/10 shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                type="submit"
                className="absolute right-1.5 top-1/2 transform -translate-y-1/2 rounded-xl"
                disabled={!searchQuery.trim()}
              >
                Search
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
