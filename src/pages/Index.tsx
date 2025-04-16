
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronUp, Search, Upload, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/person?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto space-y-8 px-4 flex flex-col items-center">
        {/* Clean, centered search bar */}
        <div className="flex flex-col items-center text-center py-14 space-y-6 mt-8 w-full max-w-2xl">          
          <form onSubmit={handleSearch} className="w-full transition-all">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search"
                className="w-full h-14 pl-6 pr-4 text-lg bg-white/80 rounded-2xl border-black/10 shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-primary"
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

        {/* Advanced Tools - Collapsible Section */}
        <Collapsible
          open={isAdvancedOpen}
          onOpenChange={setIsAdvancedOpen}
          className="w-full border border-black/10 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm overflow-hidden"
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-xl font-medium">Advanced Tools</h2>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0 hover:bg-transparent">
                {isAdvancedOpen ? 
                  <ChevronUp className="h-5 w-5 text-primary" /> : 
                  <ChevronDown className="h-5 w-5 text-primary" />
                }
              </Button>
            </CollapsibleTrigger>
          </div>
          
          <CollapsibleContent className="p-4 pt-0 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border border-black/10 bg-white/80">
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-2">Image Reverse Search</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Search for images across multiple platforms.
                  </p>
                  <div className="flex justify-end">
                    <Button className="rounded-xl">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Image
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-black/10 bg-white/80">
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-2">Notes</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Create and manage research notes.
                  </p>
                  <div className="flex justify-end">
                    <Button className="rounded-xl">
                      <FileText className="mr-2 h-4 w-4" />
                      Open Notes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Resource Tags */}
            <div className="pt-4 border-t border-black/10">
              <h3 className="font-medium mb-3">OSINT Resources</h3>
              <div className="flex flex-wrap gap-2">
                <a href="https://osintframework.com" target="_blank" rel="noopener noreferrer" className="resource-tag resource-tag-lg">
                  osintframework.com
                </a>
                <a href="https://intelx.io" target="_blank" rel="noopener noreferrer" className="resource-tag resource-tag-md">
                  intelx.io
                </a>
                <a href="https://github.com/jivoi/awesome-osint" target="_blank" rel="noopener noreferrer" className="resource-tag resource-tag-md">
                  awesome-osint
                </a>
                <a href="https://www.shodan.io" target="_blank" rel="noopener noreferrer" className="resource-tag resource-tag-md">
                  shodan.io
                </a>
                <a href="https://censys.io" target="_blank" rel="noopener noreferrer" className="resource-tag resource-tag-sm">
                  censys.io
                </a>
                <a href="https://dehashed.com" target="_blank" rel="noopener noreferrer" className="resource-tag resource-tag-sm">
                  dehashed.com
                </a>
                <a href="https://haveibeenpwned.com" target="_blank" rel="noopener noreferrer" className="resource-tag resource-tag-md">
                  haveibeenpwned.com
                </a>
                <a href="https://hunter.io" target="_blank" rel="noopener noreferrer" className="resource-tag resource-tag-sm">
                  hunter.io
                </a>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </MainLayout>
  );
};

export default Index;
