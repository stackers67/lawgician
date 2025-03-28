
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Folder, Calendar, FileText } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export type Case = {
  id: string;
  title: string;
  client: string;
  status: 'active' | 'pending' | 'closed';
  deadline: string;
  documents: number;
  progress: number;
  category: string;
};

interface CaseCardProps {
  case: Case;
}

export function CaseCard({ case: caseData }: CaseCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Folder className="h-5 w-5 text-secondary" />
            <CardTitle className="text-base">{caseData.title}</CardTitle>
          </div>
          {caseData.status === 'active' && (
            <Badge className="bg-green-50 text-green-700 hover:bg-green-100">
              Active
            </Badge>
          )}
          {caseData.status === 'pending' && (
            <Badge className="bg-amber-50 text-amber-700 hover:bg-amber-100">
              Pending
            </Badge>
          )}
          {caseData.status === 'closed' && (
            <Badge className="bg-gray-50 text-gray-700 hover:bg-gray-100">
              Closed
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Client:</span>
            <span className="font-medium">{caseData.client}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Category:</span>
            <Badge variant="outline">{caseData.category}</Badge>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Deadline: {caseData.deadline}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <span>{caseData.documents} documents</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Progress</span>
              <span>{caseData.progress}%</span>
            </div>
            <Progress value={caseData.progress} className="h-2" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 px-4 py-2">
        <Button variant="secondary" size="sm" className="w-full text-xs">
          View Case
        </Button>
      </CardFooter>
    </Card>
  );
}
