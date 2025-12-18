import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg transition-transform group-hover:scale-110">
            <GraduationCap className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold font-display tracking-tight">EduStride Zimbabwe</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#programs" className="hover:text-primary transition-colors">Programs</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm">Login</Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="hidden sm:inline-flex">Register</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
