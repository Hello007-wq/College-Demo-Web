import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, ShieldCheck } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Enrolling for Term 1 2026
          </div>
          
          <h1 className="text-3xs md:text-5xl font-bold font-display leading-[1.1] tracking-tight">
            Empowering the Next Generation of <span className="text-primary">Zimbabwean Scholars</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive academic portal tailored for Zimbabwean colleges. Manage fees, track results, and stay updated with your college life effortlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/register">
              <Button size="lg" className="h-14 px-8 text-base gap-2 group">
                Student Registration <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/admin/login">
              <Button variant="outline" size="lg" className="h-14 px-8 text-base">
                Admin Portal
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 border-t border-border/50">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-2xl">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-bold">Subject-Based</h3>
                <p className="text-sm text-muted-foreground">Tailored 3-Term structure</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-2xl">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-bold">Student-Centric</h3>
                <p className="text-sm text-muted-foreground">Unified portal experience</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-2xl">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-bold">Fee Tracking</h3>
                <p className="text-sm text-muted-foreground">Transparent registration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
