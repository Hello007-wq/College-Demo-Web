import React from 'react';
import { 
  Users, 
  BookOpen, 
  Clock, 
  CreditCard, 
//   TrendingUp, 
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MOCK_STUDENT, SUBJECTS, MOCK_FEES, MOCK_NOTICES } from '@/lib/mockData';
import { Link } from 'react-router-dom';

export const DashboardOverview = () => {
  const studentSubjects = SUBJECTS.filter(s => MOCK_STUDENT.subjects.includes(s.id));
  const latestFee = MOCK_FEES[0];
  const recentNotices = MOCK_NOTICES.slice(0, 2);

  return (
    <div className="space-y-8 pb-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display">Hello, {MOCK_STUDENT.name.split(' ')[0]}!</h1>
          <p className="text-muted-foreground mt-1">Here is what is happening in your academic portal today.</p>
        </div>
        <Badge variant="secondary" className="px-4 py-1.5 text-sm font-semibold border-primary/20 bg-primary/5 text-primary">
          Term {MOCK_STUDENT.currentTerm} • Academic Year 2025
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Program', value: MOCK_STUDENT.program, icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-600/10' },
          { label: 'Subjects', value: studentSubjects.length, icon: Users, color: 'text-purple-600', bg: 'bg-purple-600/10' },
          { label: 'Next Lecture', value: '08:00 AM', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-600/10' },
          { label: 'Fee Status', value: latestFee.status, icon: CreditCard, color: 'text-emerald-600', bg: 'bg-emerald-600/10' },
        ].map((stat) => (
          <Card key={stat.label} className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={`${stat.bg} p-3 rounded-2xl`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-tighter">Live</Badge>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Subjects List */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-base font-sans">Registered Subjects</CardTitle>
                <p className="text-sm text-muted-foreground">Current enrollment for Term {MOCK_STUDENT.currentTerm}</p>
              </div>
              <Link to="/dashboard/timetable">
                <Button variant="ghost" size="sm" className="gap-2">
                  View Timetable <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentSubjects.map((subject) => (
                  <div key={subject.id} className="flex items-center justify-between p-4 rounded-2xl bg-secondary/30 border border-transparent hover:border-primary/20 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center font-bold text-primary shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {subject.code.slice(0, 3)}
                      </div>
                      <div>
                        <p className="font-bold">{subject.name}</p>
                        <p className="text-xs text-muted-foreground">{subject.code}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-background">Active</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fee Summary */}
          <Card className="border-none shadow-md bg-primary text-primary-foreground overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
            <CardContent className="p-8">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <p className="text-primary-foreground/80 font-medium">Outstanding Balance</p>
                  <h3 className="text-4xl font-extrabold font-display">USD ${(latestFee.amount - latestFee.paid).toFixed(2)}</h3>
                  <p className="text-sm opacity-80">Due by {latestFee.dueDate}</p>
                </div>
                <Link to="/dashboard/fees">
                  <Button variant="secondary" className="rounded-xl shadow-lg font-bold">
                    Pay Now
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Notices */}
        <div className="space-y-6">
          <Card className="border-none shadow-md h-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl">Recent Notices</CardTitle>
              <Link to="/dashboard/notices">
                <Button variant="ghost" size="icon">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-6">
              {recentNotices.map((notice) => (
                <div key={notice.id} className="space-y-3 relative pl-6 border-l-2 border-primary/20 pb-4">
                  <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-primary" />
                  <div className="flex justify-between items-start">
                    <Badge className={notice.priority === 'High' ? 'bg-destructive/10 text-destructive border-destructive/20' : ''}>
                      {notice.type}
                    </Badge>
                    <span className="text-[10px] font-medium text-muted-foreground">{notice.date}</span>
                  </div>
                  <h4 className="font-bold text-sm leading-tight">{notice.title}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">{notice.content}</p>
                </div>
              ))}
              <Button variant="outline" className="w-full text-xs font-bold uppercase tracking-wider h-11" asChild>
                <Link to="/dashboard/notices">View All Announcements</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
