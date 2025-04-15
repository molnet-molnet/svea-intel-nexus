
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Sources = () => {
  const sources = [
    {
      name: "Swedish Company Registration Office",
      description: "Official registry containing information about Swedish companies.",
      category: "Official Registry",
      dataTypes: ["Company Information", "Financial Reports", "Company Officials"],
      url: "https://www.bolagsverket.se/",
    },
    {
      name: "OSINT.se",
      description: "Swedish OSINT community providing tools and resources.",
      category: "OSINT Community",
      dataTypes: ["Guides", "Tools", "Methodologies"],
      url: "https://osint.se/",
    },
    {
      name: "Statistics Sweden",
      description: "Official statistics about Swedish population and economy.",
      category: "Official Registry",
      dataTypes: ["Population Data", "Economic Statistics", "Regional Data"],
      url: "https://www.scb.se/",
    },
    {
      name: "Swedish Tax Agency",
      description: "Public tax records and personal information.",
      category: "Official Registry",
      dataTypes: ["Personal Information", "Address Records", "Tax Information"],
      url: "https://www.skatteverket.se/",
    },
    {
      name: "Social Media Platforms",
      description: "Public profiles and information from various social networks.",
      category: "Social Media",
      dataTypes: ["Profiles", "Posts", "Connections", "Media"],
      platforms: ["Facebook", "Twitter", "LinkedIn", "Instagram", "YouTube"],
    },
    {
      name: "Swedish Land Registry",
      description: "Property ownership and land records in Sweden.",
      category: "Official Registry",
      dataTypes: ["Property Ownership", "Land Records", "Real Estate Transactions"],
      url: "https://www.lantmateriet.se/",
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-2">
          <Database className="h-7 w-7 text-osint-purple" />
          <h1 className="text-2xl font-bold">Data Sources</h1>
        </div>
        
        <p className="text-muted-foreground">
          SVEA Intel Nexus aggregates information from various public data sources.
          This page lists the primary sources used by the platform.
        </p>
        
        <div className="grid gap-4 md:grid-cols-2">
          {sources.map((source, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">{source.name}</CardTitle>
                  <Badge variant="outline">{source.category}</Badge>
                </div>
                <CardDescription>{source.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium mb-1">Data Types</h4>
                    <div className="flex flex-wrap gap-1">
                      {source.dataTypes.map((type, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {source.platforms && (
                    <div>
                      <h4 className="text-sm font-medium mb-1">Platforms</h4>
                      <div className="flex flex-wrap gap-1">
                        {source.platforms.map((platform, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {source.url && (
                    <div className="pt-2">
                      <Button variant="outline" size="sm" className="text-xs" asChild>
                        <a href={source.url} target="_blank" rel="noopener noreferrer">
                          Visit Source
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Sources;
