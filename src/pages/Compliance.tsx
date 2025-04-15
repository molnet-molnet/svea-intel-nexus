
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Shield, AlertTriangle, Check } from "lucide-react";

const Compliance = () => {
  return (
    <MainLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center space-x-3 mb-2">
          <Shield className="h-7 w-7 text-osint-purple" />
          <h1 className="text-2xl font-bold">Legal Compliance</h1>
        </div>
        
        <p className="text-muted-foreground">
          SVEA Intel Nexus is designed to comply with Swedish laws and regulations
          regarding data collection, privacy, and intelligence gathering. This page
          outlines our commitment to legal and ethical OSINT practices.
        </p>
        
        <Card>
          <CardHeader>
            <CardTitle>Swedish Legal Framework</CardTitle>
            <CardDescription>
              Key legislation that governs our OSINT operations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Data Protection Act (Dataskyddslagen)</AccordionTrigger>
                <AccordionContent>
                  <p>
                    This law implements the EU's General Data Protection Regulation (GDPR) in Sweden.
                    It regulates how personal data can be collected, processed, and stored. Our tool
                    ensures that all data collection from public sources complies with these regulations.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Electronic Communications Act (Lag om elektronisk kommunikation)</AccordionTrigger>
                <AccordionContent>
                  <p>
                    This law governs electronic communications and networks in Sweden, including
                    provisions about data retention and privacy. Our tool only accesses publicly
                    available electronic communications in accordance with this law.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Freedom of Information and Official Secrets Act</AccordionTrigger>
                <AccordionContent>
                  <p>
                    This law regulates public access to official documents and information.
                    SVEA Intel Nexus only utilizes information that is legally accessible under
                    this framework.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Personal Data Act (Personuppgiftslagen)</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Although largely replaced by GDPR and the Data Protection Act, some provisions
                    may still be relevant. Our tool adheres to all current personal data regulations.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <CardTitle>Important Disclaimers</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-amber-500 pl-4 py-2">
              <p className="font-medium">Legal Use Only</p>
              <p className="text-muted-foreground mt-1">
                SVEA Intel Nexus is designed for legal OSINT activities only. Users are responsible
                for ensuring their use of this tool complies with all applicable laws and regulations.
              </p>
            </div>
            
            <div className="border-l-4 border-amber-500 pl-4 py-2">
              <p className="font-medium">Public Information Only</p>
              <p className="text-muted-foreground mt-1">
                This tool only accesses and aggregates publicly available information. It does not
                breach security measures, access private data, or circumvent authentication systems.
              </p>
            </div>
            
            <div className="border-l-4 border-amber-500 pl-4 py-2">
              <p className="font-medium">Verification Responsibility</p>
              <p className="text-muted-foreground mt-1">
                Users must independently verify information obtained through this tool before
                taking any action based on it. We cannot guarantee the accuracy or completeness
                of all data.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <CardTitle>Our Compliance Commitments</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start">
              <div className="bg-green-500/10 p-1 rounded-full mr-3 mt-0.5">
                <Check className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <p className="font-medium">Data Minimization</p>
                <p className="text-muted-foreground mt-1">
                  We only collect and process data that is necessary for the specific
                  search or analysis being conducted.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-500/10 p-1 rounded-full mr-3 mt-0.5">
                <Check className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <p className="font-medium">Transparency</p>
                <p className="text-muted-foreground mt-1">
                  We clearly indicate the sources of information and the methods used
                  to obtain it.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-500/10 p-1 rounded-full mr-3 mt-0.5">
                <Check className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <p className="font-medium">Regular Legal Reviews</p>
                <p className="text-muted-foreground mt-1">
                  We regularly review our practices against changes in legislation
                  to ensure ongoing compliance.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-500/10 p-1 rounded-full mr-3 mt-0.5">
                <Check className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <p className="font-medium">Data Security</p>
                <p className="text-muted-foreground mt-1">
                  We implement appropriate technical measures to protect data
                  collected and processed through our tool.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Compliance;
