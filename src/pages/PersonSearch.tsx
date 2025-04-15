
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import SearchBox from "@/components/search/SearchBox";
import ResultCard, { ResultData } from "@/components/search/ResultCard";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PersonSearch = () => {
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
            id: "p1",
            type: "person",
            name: "Johan Andersson",
            title: "Software Developer",
            description: "Works at Tech Solutions AB since 2018. Previously at Digital Innovation.",
            email: "johan.andersson@example.com",
            phone: "+46 70 123 4567",
            location: "Stockholm, Sweden",
            date: "Last updated: 2023-05-15",
            confidence: 87,
            tags: ["Tech", "Developer", "Stockholm"],
          },
          {
            id: "p2",
            type: "person",
            name: "Johan Bergman",
            title: "Marketing Director",
            description: "Senior marketing professional with 10+ years of experience in digital marketing.",
            email: "johan.bergman@example.com",
            phone: "+46 73 987 6543",
            location: "Gothenburg, Sweden",
            date: "Last updated: 2023-06-20",
            confidence: 72,
            tags: ["Marketing", "Management", "Gothenburg"],
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
          <h1 className="text-2xl font-bold mb-2">Person Search</h1>
          <p className="text-muted-foreground">
            Search for individuals using name, social security number, or other identifiers.
          </p>
        </div>

        <SearchBox 
          onSearch={handleSearch} 
          placeholder="Enter name, social security number, or identifier..." 
          type="person"
        />

        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader className="h-8 w-8 text-primary animate-spin mb-2" />
            <p className="text-muted-foreground">Searching databases...</p>
          </div>
        ) : searched && results.length === 0 ? (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>No results found</AlertTitle>
            <AlertDescription>
              Try broadening your search or using different keywords.
              <br />
              <span className="text-xs text-muted-foreground mt-1 block">
                Tip: For testing, try searching for "Johan".
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

export default PersonSearch;
