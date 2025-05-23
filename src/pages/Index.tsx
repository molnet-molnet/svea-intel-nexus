
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

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
        <div className="flex flex-col items-center text-center space-y-8 w-full max-w-xl px-4">
          {/* Main logo above search bar */}
          <div className="mb-8">
            <img
              src="/lovable-uploads/24a4d129-8afb-41ed-b8c5-f5f19d0177e8.png"
              alt="Storm Logo"
              className="w-40 h-40 object-contain"
            />
          </div>

          {/* Search form */}
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
                className="absolute right-1.5 top-1/2 transform -translate-y-1/2 rounded-xl bg-primary/20 hover:bg-primary/30 text-[#9A7D2E] h-10 w-10 p-0"
                disabled={!searchQuery.trim()}
                size="sm"
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </form>

          {/* storm text below search bar */}
          <div className="mt-6">
            <span className="font-quicksand font-bold text-3xl tracking-wider text-foreground relative inline-block">
              <span className="relative inline-block px-1">
                <span className="bg-[#002244] bg-clip-text text-transparent">
                  storm
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#9A7D2E] transform scale-x-75"></span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#9A7D2E] transform scale-x-75 blur-sm"></span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
