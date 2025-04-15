
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Briefcase, Search, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DashboardSummary = () => {
  const stats = [
    {
      title: "Person Searches",
      value: 0,
      icon: <User className="h-5 w-5 text-osint-blue" />,
      change: "0%",
      href: "/search/person",
    },
    {
      title: "Company Searches",
      value: 0,
      icon: <Briefcase className="h-5 w-5 text-osint-purple" />,
      change: "0%",
      href: "/search/company",
    },
    {
      title: "Total Searches",
      value: 0,
      icon: <Search className="h-5 w-5 text-osint-oceanBlue" />,
      change: "0%",
      href: "#",
    },
    {
      title: "Recent Activity",
      value: "None",
      icon: <Clock className="h-5 w-5 text-green-500" />,
      change: "",
      href: "#",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Card key={i} className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
              {stat.icon}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center space-x-1">
              {stat.change && (
                <p className="text-xs text-muted-foreground">
                  {stat.change} from last period
                </p>
              )}
            </div>
            <Link to={stat.href} className="mt-3 text-xs text-primary flex items-center">
              View details
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardSummary;
