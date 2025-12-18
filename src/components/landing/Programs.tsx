import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Microscope, Calculator, Palette, CheckCircle2 } from 'lucide-react';

const programs = [
  {
    title: 'Sciences',
    icon: Microscope,
    description: 'Advanced scientific studies focusing on research and practical laboratory skills.',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'],
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    title: 'Commercials',
    icon: Calculator,
    description: 'Expertise in finance, economics, and business management for the modern corporate world.',
    subjects: ['Accounts', 'Economics', 'Business Studies', 'Commerce', 'Office Management'],
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    title: 'Arts & Humanities',
    icon: Palette,
    description: 'Developing critical thinking and cultural awareness through creative and social studies.',
    subjects: ['English Literature', 'Shona', 'History', 'Divinity', 'Art & Design'],
    color: 'bg-amber-500/10 text-amber-600',
  },
];

export const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold font-display">Programs Offered</h2>
          <p className="text-muted-foreground">
            Explore our specialized academic tracks designed to prepare students for higher education and professional careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.title} className="border-none shadow-xl hover:scale-[1.02] transition-transform">
              <CardHeader>
                <div className={`w-12 h-12 rounded-2xl ${program.color} flex items-center justify-center mb-4`}>
                  <program.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {program.subjects.map((subject) => (
                    <li key={subject} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {subject}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
