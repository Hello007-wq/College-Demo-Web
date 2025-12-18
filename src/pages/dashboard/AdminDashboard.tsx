import React from 'react';
import { 
  Users, 
  BookOpen, 
  CreditCard, 
  TrendingUp, 
  Search,
  Plus,
  Filter,
  Download,
  GraduationCap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from 'react-router-dom';

export const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-secondary/30">
      <header className="h-16 border-b bg-background px-8 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1 rounded">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold font-display text-xl">EduStride Admin</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">Logout</Link>
          </Button>
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Users className="w-4 h-4 text-primary" />
          </div>
        </div>
      </header>

      <main className="p-8 max-w-7xl mx-auto space-y-8 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold font-display">Administrator Overview</h1>
            <p className="text-muted-foreground mt-1">Manage student records, fees, and academic performance.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" /> Export Data
            </Button>
            <Button className="gap-2">
              <Plus className="w-4 h-4" /> New Student
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Total Students', value: '1,284', icon: Users, color: 'text-blue-600', bg: 'bg-blue-600/10' },
            { label: 'Total Programs', value: '3', icon: BookOpen, color: 'text-purple-600', bg: 'bg-purple-600/10' },
            { label: 'Revenue (Term 1)', value: 'USD $84k', icon: CreditCard, color: 'text-emerald-600', bg: 'bg-emerald-600/10' },
            { label: 'Pending Results', value: '12', icon: TrendingUp, color: 'text-amber-600', bg: 'bg-amber-600/10' },
          ].map((stat) => (
            <Card key={stat.label} className="border-none shadow-md">
              <CardContent className="p-6">
                <div className={`${stat.bg} p-3 rounded-2xl w-fit mb-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <CardTitle className="text-xl">Student Directory</CardTitle>
                <p className="text-sm text-muted-foreground">Manage and view all registered students.</p>
              </div>
              <div className="flex w-full md:w-auto gap-2">
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search students..." className="pl-9 h-10" />
                </div>
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>Term</TableHead>
                  <TableHead>Fee Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { id: 'ST2024001', name: 'Tatenda Mutasa', program: 'Sciences', term: 1, status: 'Partial' },
                  { id: 'ST2024002', name: 'Chipo Moyo', program: 'Commercials', term: 1, status: 'Paid' },
                  { id: 'ST2024003', name: 'Farai Dube', program: 'Arts', term: 1, status: 'Outstanding' },
                  { id: 'ST2024004', name: 'Blessing Zhou', program: 'Sciences', term: 1, status: 'Paid' },
                ].map((s) => (
                  <TableRow key={s.id}>
                    <TableCell className="font-mono text-xs">{s.id}</TableCell>
                    <TableCell className="font-bold">{s.name}</TableCell>
                    <TableCell>{s.program}</TableCell>
                    <TableCell>Term {s.term}</TableCell>
                    <TableCell>
                      <Badge variant={s.status === 'Paid' ? 'default' : s.status === 'Partial' ? 'secondary' : 'destructive'} className="bg-opacity-10 text-opacity-100">
                        {s.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm" className="text-primary">Details</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
