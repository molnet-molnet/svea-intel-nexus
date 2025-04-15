
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import SearchBox from "@/components/search/SearchBox";
import ResultCard, { ResultData } from "@/components/search/ResultCard";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SocialSearch = () => {
  const [results, setResults] = useState<ResultData[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const { toast } = useToast();

  const handleSearch = (query: string, options: Record<string, any>) => {
    setLoading(true);
    setSearched(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      // Mock data for demonstration
      if (query.toLowerCase().includes("john") || query.toLowerCase().includes("johan")) {
        setResults([
          {
            id: "s1",
            type: "social",
            name: "Johan Andersson",
            title: "LinkedIn",
            description: "Software Developer at Tech Solutions AB",
            url: "https://linkedin.com",
            confidence: 88,
            tags: ["LinkedIn", "Tech", "Developer"],
          },
          {
            id: "s2",
            type: "social",
            name: "j.andersson",
            title: "Twitter",
            description: "Tech enthusiast | Software Developer | Stockholm",
            url: "https://twitter.com",
            date: "Joined 2015",
            confidence: 76,
            tags: ["Twitter", "Tech", "Developer"],
          },
          {
            id: "s3",
            type: "social",
            name: "johanphoto",
            title: "Instagram",
            description: "Photography | Travel | Technology",
            url: "https://instagram.com",
            date: "329 followers",
            confidence: 72,
            tags: ["Instagram", "Photography"],
          }
        ]);
      } else {
        setResults([]);
      }
      setLoading(false);
    }, 1500);
  };

  const handleSaveResult = (id: string) => {
    toast({
      title: "Result saved",
      description: "The selected result has been saved to your collection.",
    });
  };

  const handleExportResult = (id: string) => {
    toast({
      title: "Result exported",
      description: "The data has been exported successfully.",
    });
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Social Media Search</h1>
          <p className="text-muted-foreground">
            Discover social media profiles across multiple platforms including Facebook, Twitter, LinkedIn, and Instagram.
          </p>
        </div>

        <SearchBox 
          onSearch={handleSearch} 
          placeholder="Enter name, username, or email address..." 
          type="social"
        />

        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader className="h-8 w-8 text-primary animate-spin mb-2" />
            <p className="text-muted-foreground">Searching social media platforms...</p>
          </div>
        ) : searched && results.length === 0 ? (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>No results found</AlertTitle>
            <AlertDescription>
              Try using a different name or username.
              <br />
              <span className="text-xs text-muted-foreground mt-1 block">
                Tip: For testing, try searching for "Johan" or "John".
              </span>
            </AlertDescription>
          </Alert>
        ) : (
          <div>
            {results.length > 0 && (
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                  Showing {results.length} result{results.length !== 1 ? "s" : ""}
                </p>
              </div>
            )}
            <div className="grid gap-4 md:grid-cols-2">
              {results.map((result) => (
                <ResultCard 
                  key={result.id} 
                  data={result} 
                  onSave={handleSaveResult}
                  onExport={handleExportResult}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default SocialSearch;
