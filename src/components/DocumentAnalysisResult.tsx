
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface DocumentAnalysisResultProps {
  title: string;
  summary: string;
  keyPoints: string[];
  entities: Array<{ name: string; type: string }>;
  relevantCases: Array<{ title: string; citation: string; relevance: string }>;
  relevantLegislation: Array<{ title: string; section: string; relevance: string }>;
}

export function DocumentAnalysisResult({
  title,
  summary,
  keyPoints,
  entities,
  relevantCases,
  relevantLegislation,
}: DocumentAnalysisResultProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Document analysis results</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="summary">
          <TabsList className="mb-4">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="key-points">Key Points</TabsTrigger>
            <TabsTrigger value="entities">Entities</TabsTrigger>
            <TabsTrigger value="case-law">Case Law</TabsTrigger>
            <TabsTrigger value="legislation">Legislation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="summary" className="bg-muted/30 p-4 rounded-md">
            <p>{summary}</p>
          </TabsContent>
          
          <TabsContent value="key-points">
            <ul className="space-y-2">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                    {index + 1}
                  </span>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="entities">
            <div className="flex flex-wrap gap-2">
              {entities.map((entity, index) => (
                <Badge key={index} variant="outline" className="flex items-center gap-1">
                  <span>{entity.name}</span>
                  <span className="text-xs text-muted-foreground">({entity.type})</span>
                </Badge>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="case-law">
            <div className="space-y-4">
              {relevantCases.map((caseItem, index) => (
                <div key={index} className="border-b pb-3 last:border-0">
                  <h4 className="font-medium mb-1">{caseItem.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{caseItem.citation}</p>
                  <p className="text-sm">{caseItem.relevance}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="legislation">
            <div className="space-y-4">
              {relevantLegislation.map((item, index) => (
                <div key={index} className="border-b pb-3 last:border-0">
                  <h4 className="font-medium mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">Section: {item.section}</p>
                  <p className="text-sm">{item.relevance}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
