
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search as SearchIcon,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AdvancedSearchOptions from "./AdvancedSearchOptions";

interface SearchBoxProps {
  onSearch: (query: string, options: Record<string, any>) => void;
  placeholder?: string;
  className?: string;
  type?: "person" | "company" | "phone" | "social";
}

const SearchBox = ({ 
  onSearch, 
  placeholder = "Search...", 
  className = "", 
  type = "person" 
}: SearchBoxProps) => {
  const [query, setQuery] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [advancedOptions, setAdvancedOptions] = useState<Record<string, any>>({});

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query, advancedOptions);
    }
  };

  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };

  const updateAdvancedOptions = (options: Record<string, any>) => {
    setAdvancedOptions(options);
  };

  return (
    <Card className={`border border-black/10 bg-white/80 backdrop-blur-sm shadow-sm ${className}`}>
      <CardContent className="pt-4">
        <form onSubmit={handleSearch}>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="pl-4 rounded-xl border-black/10"
              />
            </div>
            <Button type="submit" className="rounded-xl">Search</Button>
          </div>
          
          <div className="mt-2">
            <Button 
              type="button" 
              variant="ghost" 
              size="sm" 
              className="text-sm text-primary/80 flex items-center hover:text-primary hover:bg-transparent"
              onClick={toggleAdvanced}
            >
              Advanced Options
              {showAdvanced ? 
                <ChevronUp className="ml-1 h-4 w-4" /> : 
                <ChevronDown className="ml-1 h-4 w-4" />
              }
            </Button>
          </div>
          
          {showAdvanced && (
            <div className="mt-3 animate-fade-in">
              <AdvancedSearchOptions 
                type={type} 
                onChange={updateAdvancedOptions} 
              />
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default SearchBox;
