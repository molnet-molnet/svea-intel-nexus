
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, BookOpen, Code, Database } from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center space-x-3 mb-2">
          <Info className="h-7 w-7 text-osint-purple" />
          <h1 className="text-2xl font-bold">About SVEA Intel Nexus</h1>
        </div>
        
        <p className="text-muted-foreground">
          SVEA Intel Nexus is a comprehensive, open-source OSINT (Open Source Intelligence) tool tailored 
          for Swedish data while integrating global OSINT resources. This tool enables users to gather and
          analyze information about individuals and entities while ensuring compliance with legal standards.
        </p>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="capabilities">Capabilities</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="technologies">Technologies</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>What is SVEA Intel Nexus?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  SVEA Intel Nexus is designed to be a powerful yet user-friendly OSINT platform focused on 
                  Swedish data sources. It provides investigators, researchers, and security professionals with 
                  tools to gather, analyze, and visualize information from public sources.
                </p>
                <p>
                  The platform combines data from multiple sources including public records, social media, 
                  business registers, and other open sources to provide comprehensive intelligence while 
                  maintaining strict adherence to legal and ethical standards.
                </p>
                <p>
                  Key features include person searches, company analysis, phone number lookups, and 
                  social media profile discovery, all with a focus on data relevant to Swedish contexts.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="capabilities" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Core Capabilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 list-disc pl-5">
                  <li>
                    <strong>Person Search:</strong> Locate and gather information about individuals using 
                    names, social security numbers, or other identifiers.
                  </li>
                  <li>
                    <strong>Company Analysis:</strong> Research Swedish companies, their ownership 
                    structures, subsidiaries, and business activities.
                  </li>
                  <li>
                    <strong>Phone Lookups:</strong> Identify information associated with phone numbers, 
                    including ownership and registration details.
                  </li>
                  <li>
                    <strong>Social Media Discovery:</strong> Find social media profiles across platforms 
                    including Facebook, Twitter, LinkedIn, Instagram, and YouTube.
                  </li>
                  <li>
                    <strong>Data Correlation:</strong> Connect information from various sources to build 
                    comprehensive profiles and identify relationships.
                  </li>
                  <li>
                    <strong>Documentation:</strong> Record findings, create reports, and export data for 
                    further analysis.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resources" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center space-x-2">
                <BookOpen className="h-5 w-5 text-osint-blue" />
                <CardTitle>Swedish OSINT Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  SVEA Intel Nexus integrates with and draws inspiration from several Swedish 
                  OSINT resources and communities:
                </p>
                <ul className="space-y-3 list-disc pl-5">
                  <li>
                    <strong>Svensk OSINT:</strong> A community-driven initiative offering publications 
                    and guides to support OSINT investigations.
                  </li>
                  <li>
                    <strong>OSINord:</strong> The Nordic OSINT community that fosters knowledge 
                    sharing and innovation in OSINT practices.
                  </li>
                  <li>
                    <strong>Swedish Public Records:</strong> Integration with publicly available 
                    official records maintained by Swedish authorities.
                  </li>
                  <li>
                    <strong>Swedish Business Registry:</strong> Access to public company information 
                    from official business registries.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="technologies" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center space-x-2">
                <Code className="h-5 w-5 text-osint-oceanBlue" />
                <CardTitle>Technical Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  SVEA Intel Nexus is built using modern technologies to ensure performance, 
                  scalability, and maintainability:
                </p>
                <ul className="space-y-3 list-disc pl-5">
                  <li>
                    <strong>Frontend:</strong> React, TypeScript, and Tailwind CSS for a 
                    responsive and intuitive user interface.
                  </li>
                  <li>
                    <strong>Backend Infrastructure:</strong> Powered by Supabase for secure 
                    data storage, authentication, and API services.
                  </li>
                  <li>
                    <strong>Data Processing:</strong> Custom algorithms for data aggregation, 
                    correlation, and analysis.
                  </li>
                </ul>
                
                <div className="mt-6 pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <Database className="h-5 w-5 text-osint-purple" />
                    <h3 className="font-semibold">Data Sources Integration</h3>
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    The platform is designed to integrate with various public data sources through 
                    API connections, web scraping (where legally permitted), and manual data import 
                    capabilities, all while maintaining strict adherence to legal and ethical standards.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default About;
