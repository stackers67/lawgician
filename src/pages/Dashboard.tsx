
import React from 'react';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { DocumentUpload } from '@/components/DocumentUpload';
import { DocumentCard, Document } from '@/components/DocumentCard';
import { CaseCard, Case } from '@/components/CaseCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Folder, Plus } from 'lucide-react';

// Sample data for demonstration
const recentDocuments: Document[] = [
  {
    id: '1',
    title: 'Smith v. Johnson - Contract Dispute',
    type: 'PDF',
    uploadedAt: '2 hours ago',
    tags: ['Contract', 'Dispute', 'Commercial'],
    status: 'analyzed',
  },
  {
    id: '2',
    title: 'Brown Property Acquisition Agreement',
    type: 'DOCX',
    uploadedAt: '1 day ago',
    tags: ['Property', 'Acquisition', 'Commercial'],
    status: 'analyzed',
  },
  {
    id: '3',
    title: 'Williams Divorce Proceedings',
    type: 'PDF',
    uploadedAt: '3 days ago',
    tags: ['Family', 'Divorce'],
    status: 'analyzing',
  },
];

const activeCases: Case[] = [
  {
    id: '1',
    title: 'Smith v. Johnson',
    client: 'John Smith',
    status: 'active',
    deadline: '15 Aug 2023',
    documents: 12,
    progress: 75,
    category: 'Commercial'
  },
  {
    id: '2',
    title: 'Brown Property Acquisition',
    client: 'Sarah Brown',
    status: 'active',
    deadline: '22 Sep 2023',
    documents: 8,
    progress: 45,
    category: 'Property'
  },
  {
    id: '3',
    title: 'Williams Divorce',
    client: 'Emma Williams',
    status: 'pending',
    deadline: '30 Oct 2023',
    documents: 5,
    progress: 20,
    category: 'Family'
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold mb-2">Welcome back, John</h1>
            <p className="text-muted-foreground">
              Here's an overview of your recent documents and active cases.
            </p>
          </div>
          
          <section className="mb-8">
            <h2 className="text-xl font-serif font-medium mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DocumentUpload />
            </div>
          </section>
          
          <Tabs defaultValue="documents" className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <TabsList>
                <TabsTrigger value="documents" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Recent Documents
                </TabsTrigger>
                <TabsTrigger value="cases" className="flex items-center gap-2">
                  <Folder className="h-4 w-4" />
                  Active Cases
                </TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                New
              </Button>
            </div>
            
            <TabsContent value="documents">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentDocuments.map((doc) => (
                  <DocumentCard key={doc.id} document={doc} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cases">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeCases.map((caseItem) => (
                  <CaseCard key={caseItem.id} case={caseItem} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
