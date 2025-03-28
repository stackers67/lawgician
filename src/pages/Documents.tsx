
import React, { useState } from 'react';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { DocumentUpload } from '@/components/DocumentUpload';
import { DocumentCard, Document } from '@/components/DocumentCard';
import { DocumentAnalysisResult } from '@/components/DocumentAnalysisResult';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Plus, Filter, Search } from 'lucide-react';

// Sample data for demonstration
const documents: Document[] = [
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
  {
    id: '4',
    title: 'Harris Medical Negligence Claim',
    type: 'PDF',
    uploadedAt: '5 days ago',
    tags: ['Medical', 'Negligence', 'Personal Injury'],
    status: 'analyzed',
  },
  {
    id: '5',
    title: 'Wilson Employment Tribunal Witness Statement',
    type: 'DOCX',
    uploadedAt: '1 week ago',
    tags: ['Employment', 'Tribunal'],
    status: 'analyzed',
  },
  {
    id: '6',
    title: 'Davies Intellectual Property Agreement',
    type: 'DOCX',
    uploadedAt: '2 weeks ago',
    tags: ['IP', 'Commercial'],
    status: 'pending',
  },
];

// Sample document analysis data
const analysisData = {
  title: "Smith v. Johnson - Contract Dispute",
  summary: "This document is a contract dispute between Smith Enterprises Ltd and Johnson Holdings plc regarding the failure to fulfill delivery obligations for custom manufacturing equipment. The contract, dated 12 January 2022, specified delivery by 30 March 2022, but Johnson Holdings failed to meet this deadline, citing supply chain issues. Smith Enterprises is claiming damages of £250,000 for business interruption and lost profits.",
  keyPoints: [
    "Contract signed on 12 January 2022 with delivery date of 30 March 2022",
    "Contract value: £750,000 for custom manufacturing equipment",
    "Johnson Holdings missed delivery deadline, citing supply chain difficulties",
    "Smith Enterprises claiming £250,000 in damages for business interruption",
    "Contract contains a force majeure clause that Johnson Holdings is invoking",
    "No formal contract extension was agreed in writing",
  ],
  entities: [
    { name: "Smith Enterprises Ltd", type: "Claimant" },
    { name: "Johnson Holdings plc", type: "Defendant" },
    { name: "Elizabeth Smith", type: "Director" },
    { name: "Robert Johnson", type: "CEO" },
    { name: "12 January 2022", type: "Date" },
    { name: "30 March 2022", type: "Deadline" },
    { name: "£750,000", type: "Contract Value" },
    { name: "£250,000", type: "Damages Claimed" },
  ],
  relevantCases: [
    {
      title: "Hadley v Baxendale",
      citation: "[1854] EWHC J70",
      relevance: "Establishes the principle that damages for breach of contract should be such as may fairly and reasonably be considered as arising naturally from the breach. Relevant to the claim for business interruption damages."
    },
    {
      title: "Metropolitan International Schools Ltd v Designtechnica Corp",
      citation: "[2011] EWCA Civ 1380",
      relevance: "Deals with the interpretation of force majeure clauses in commercial contracts. Relevant to the defendant's claim that supply chain issues constitute force majeure."
    },
    {
      title: "Transfield Shipping Inc v Mercator Shipping Inc",
      citation: "[2008] UKHL 48",
      relevance: "Concerns the remoteness of damage in contract law and the extent to which unusual losses can be recovered. Relevant to the quantification of lost profits claims."
    }
  ],
  relevantLegislation: [
    {
      title: "Supply of Goods and Services Act 1982",
      section: "Section 14",
      relevance: "Implied term that the supplier will carry out the service with reasonable care and skill. Relevant to determining whether Johnson Holdings took reasonable steps to mitigate supply chain issues."
    },
    {
      title: "Late Payment of Commercial Debts (Interest) Act 1998",
      section: "Sections 4-6",
      relevance: "Provides for statutory interest on late payments in commercial contracts. May be relevant to any counterclaim by Johnson for unpaid invoices."
    },
    {
      title: "Unfair Contract Terms Act 1977",
      section: "Section 3",
      relevance: "Relates to the reasonableness of exclusion clauses in contracts. Relevant to the interpretation of the force majeure clause being relied upon by Johnson Holdings."
    }
  ]
};

const Documents = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    <div className="min-h-screen flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-serif font-bold">Documents</h1>
            <div className="flex items-center gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Upload Document
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>Upload Document</DialogTitle>
                    <DialogDescription>
                      Upload a document to analyze with Lawthority
                    </DialogDescription>
                  </DialogHeader>
                  <DocumentUpload />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search documents..." className="pl-8" />
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="analyzed">Analyzed</SelectItem>
                  <SelectItem value="analyzing">Analyzing</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {showAnalysis ? (
            <div className="mb-6">
              <Button 
                variant="outline" 
                className="mb-4"
                onClick={() => setShowAnalysis(false)}
              >
                Back to Documents
              </Button>
              <DocumentAnalysisResult {...analysisData} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc) => (
                <div key={doc.id} onClick={() => setShowAnalysis(true)}>
                  <DocumentCard document={doc} />
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Documents;
