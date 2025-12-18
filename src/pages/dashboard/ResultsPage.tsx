import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
//   FileText, 
  Download, 
  TrendingUp, 
  Award,
//   ChevronRight,
  Printer,
  Info
} from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MOCK_RESULTS, SUBJECTS, MOCK_STUDENT } from '@/lib/mockData';
import { toast } from 'sonner';

export const ResultsPage = () => {
  const currentResults = MOCK_RESULTS;
  
  const handleDownload = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Generating result slip PDF...',
        success: 'Result slip downloaded successfully!',
        error: 'Failed to generate result slip.',
      }
    );
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20';
      case 'B': return 'text-blue-600 bg-blue-500/10 border-blue-500/20';
      case 'C': return 'text-amber-600 bg-amber-500/10 border-amber-500/20';
      default: return 'text-destructive bg-destructive/10 border-destructive/20';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-2xl font-bold font-display">Academic Results</h1>
          <p className="text-muted-foreground text-sm">Review your termly performance and grade summary.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-11 px-6 gap-2" onClick={() => toast.info('Results printed to system default printer.')}>
            <Printer className="w-4 h-4" />
            Print Slip
          </Button>
          <Button className="h-11 px-8 gap-2 font-bold shadow-lg shadow-primary/20" onClick={handleDownload}>
            <Download className="w-4 h-4" />
            Download Slip (PDF)
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Performance Summary */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-none shadow-md overflow-hidden">
            <CardHeader className="bg-secondary/30 border-b">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-xl">Term {MOCK_STUDENT.currentTerm} End-of-Term Results</CardTitle>
                  <CardDescription>Academic Year 2024 • {MOCK_STUDENT.program}</CardDescription>
                </div>
                <Badge className="bg-primary text-primary-foreground font-bold px-4">FINALIZED</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-none">
                    <TableHead className="pl-6 font-bold">Subject Code</TableHead>
                    <TableHead className="font-bold">Subject Name</TableHead>
                    <TableHead className="text-center font-bold">Mark (%)</TableHead>
                    <TableHead className="text-center font-bold">Grade</TableHead>
                    <TableHead className="font-bold">Remarks</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentResults.map((result) => {
                    const subject = SUBJECTS.find(s => s.id === result.subjectId);
                    return (
                      <TableRow key={result.id} className="group hover:bg-secondary/30 transition-colors border-b border-border/50">
                        <TableCell className="pl-6 font-mono text-xs">{subject?.code}</TableCell>
                        <TableCell className="font-bold">{subject?.name}</TableCell>
                        <TableCell className="text-center">
                          <span className="text-sm font-medium">{result.mark}%</span>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant="outline" className={`w-8 h-8 rounded-lg flex items-center justify-center p-0 font-extrabold text-base ${getGradeColor(result.grade)}`}>
                            {result.grade}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground italic">
                          "{result.comment}"
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="flex items-center gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-bold text-primary">Academic Achievement</p>
              <p className="text-sm text-muted-foreground">You are in the top 10% of the {MOCK_STUDENT.program} department for Term 1. Keep up the excellent work!</p>
            </div>
          </div>
        </div>

        {/* GPA / Stats Sidebar */}
        <div className="space-y-6">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Performance Analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground font-medium">Average Mark</p>
                <div className="text-5xl font-extrabold font-display text-primary">82.7%</div>
                <div className="flex items-center justify-center gap-1 text-emerald-600 text-xs font-bold">
                  <TrendingUp className="w-3 h-3" />
                  +4.2% from mid-term
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground border-b pb-2">Grade Distribution</p>
                <div className="space-y-3">
                  {[
                    { label: 'Distinction (A)', count: 2, color: 'bg-emerald-500' },
                    { label: 'Merit (B)', count: 1, color: 'bg-blue-500' },
                    { label: 'Pass (C)', count: 0, color: 'bg-amber-500' },
                  ].map(item => (
                    <div key={item.label} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium">
                        <span>{item.label}</span>
                        <span>{item.count}</span>
                      </div>
                      <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${item.color}`} 
                          style={{ width: `${(item.count / currentResults.length) * 100}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <div className="p-4 rounded-xl bg-secondary/50 border border-border flex gap-3 items-start">
                  <Info className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    Results displayed here are provisional until the formal ratification by the Academic Board. For official purposes, please use the stamped paper copy from the registrar.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
