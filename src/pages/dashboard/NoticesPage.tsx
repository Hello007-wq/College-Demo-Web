import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Bell, 
  Search, 
  Megaphone, 
  Calendar, 
  AlertTriangle,
  ChevronRight
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { MOCK_NOTICES } from '@/lib/mockData';

export const NoticesPage = () => {
  const [filter, setFilter] = React.useState('All');
  const [search, setSearch] = React.useState('');

  const filteredNotices = MOCK_NOTICES.filter(notice => {
    const matchesFilter = filter === 'All' || notice.type === filter;
    const matchesSearch = notice.title.toLowerCase().includes(search.toLowerCase()) || 
                          notice.content.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'Exam': return <Calendar className="w-5 h-5 text-destructive" />;
      case 'Fees': return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      default: return <Megaphone className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-2xl font-bold font-display">College Announcements</h1>
          <p className="text-muted-foreground text-sm">Stay updated with the latest news and academic notices.</p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search notices..." 
              className="pl-9 bg-secondary/50 border-none h-11"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {['All', 'General', 'Exam', 'Fees', 'Holiday'].map(f => (
          <Button 
            key={f}
            variant={filter === f ? 'default' : 'secondary'}
            size="sm"
            onClick={() => setFilter(f)}
            className="rounded-full px-6"
          >
            {f}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredNotices.length > 0 ? filteredNotices.map((notice) => (
          <Card key={notice.id} className="border-none shadow-md hover:shadow-lg transition-all group overflow-hidden">
            <CardContent className="p-0 flex flex-col md:flex-row">
              <div className={`w-full md:w-2 ${notice.priority === 'High' ? 'bg-destructive' : 'bg-primary'}`} />
              <div className="flex-1 p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className={`hidden md:flex w-14 h-14 rounded-2xl items-center justify-center shrink-0 ${notice.priority === 'High' ? 'bg-destructive/10' : 'bg-primary/10'}`}>
                  {getIcon(notice.type)}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="text-[10px] font-bold uppercase">{notice.type}</Badge>
                    {notice.priority === 'High' && (
                      <Badge variant="destructive" className="text-[10px] font-bold uppercase animate-pulse">Urgent</Badge>
                    )}
                    <span className="text-xs text-muted-foreground ml-auto">{notice.date}</span>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{notice.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{notice.content}</p>
                </div>
                <Button variant="ghost" size="icon" className="shrink-0 group-hover:translate-x-1 transition-transform">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )) : (
          <div className="py-20 text-center space-y-4">
            <div className="bg-secondary/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-muted-foreground">
              <Bell className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl font-bold">No matching notices</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
