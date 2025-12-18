import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MOCK_TIMETABLE, SUBJECTS, MOCK_STUDENT } from '@/lib/mockData';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const TIME_SLOTS = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

export const TimetablePage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold font-display">Weekly Timetable</h1>
          <p className="text-muted-foreground text-sm">Term {MOCK_STUDENT.currentTerm} Academic Schedule</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-primary/5">Sciences Lab A</Badge>
          <Badge variant="outline" className="bg-primary/5">Academic Block B</Badge>
        </div>
      </div>

      <Card className="border-none shadow-md overflow-hidden">
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-secondary/50">
                <th className="p-4 border-r border-b text-left text-xs font-bold uppercase tracking-wider w-32">Time</th>
                {DAYS.map(day => (
                  <th key={day} className="p-4 border-b text-center text-xs font-bold uppercase tracking-wider min-w-[120px]">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TIME_SLOTS.map((time, idx) => (
                <tr key={time} className={idx % 2 === 0 ? 'bg-background' : 'bg-secondary/20'}>
                  <td className="p-4 border-r border-b font-mono text-xs font-bold text-muted-foreground">{time}</td>
                  {DAYS.map(day => {
                    const slot = MOCK_TIMETABLE.find(s => s.day === day && s.startTime === time);
                    const subject = slot ? SUBJECTS.find(sub => sub.id === slot.subjectId) : null;
                    
                    return (
                      <td key={`${day}-${time}`} className="p-2 border-b min-h-[80px]">
                        {slot && subject ? (
                          <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 h-full animate-fade-in group hover:bg-primary hover:text-primary-foreground transition-all">
                            <p className="text-xs font-bold truncate">{subject.name}</p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-[10px] opacity-70 font-mono">{slot.room}</span>
                              <Badge variant="secondary" className="text-[9px] h-4 px-1 group-hover:bg-primary-foreground group-hover:text-primary">{subject.code}</Badge>
                            </div>
                          </div>
                        ) : null}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/10">
          <h4 className="font-bold text-amber-600 mb-2">Important Note</h4>
          <p className="text-sm text-amber-700/80">Laboratory sessions for Sciences program are held twice a week. Ensure you have your lab coat and safety gear ready at least 15 minutes before the session starts.</p>
        </div>
        <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
          <h4 className="font-bold text-blue-600 mb-2">Rescheduling Info</h4>
          <p className="text-sm text-blue-700/80">Any changes to the timetable will be announced via the Notices section at least 24 hours in advance. Always keep your notifications turned on.</p>
        </div>
      </div>
    </div>
  );
};
