import React from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Programs } from '@/components/landing/Programs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        
        {/* About Section */}
        <section id="about" className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-primary/10">
                <img 
                  src="https://images.unsplash.com/photo-1523050338692-7b835a07973f?auto=format&fit=crop&q=80&w=800" 
                  alt="College Campus"
                  className="object-cover w-full h-full opacity-90"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-extrabold font-display leading-tight">
                  Building a Better Future for Zimbabwean Education
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  EduStride Zimbabwe is committed to providing a modern, efficient, and transparent academic management system for local colleges. We understand the specific needs of the Zimbabwean 3-term system and have built a portal that works for students and administrators alike.
                </p>
                <ul className="space-y-4">
                  {[
                    'Digital Results Slips',
                    'Transparent Fee Tracking',
                    'Real-time College Notices',
                    'Organized Term Schedules'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-medium">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold font-display">Ready to Begin Your Journey?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join hundreds of students already using EduStride to manage their academic lives. Registration takes less than 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register">
                <Button size="lg" variant="secondary" className="h-14 px-10 text-lg">
                  Register Now
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-primary-foreground/20 bg-primary-foreground/5 hover:bg-primary-foreground/10 text-primary-foreground">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-1 rounded">
                  <div className="w-4 h-4 bg-primary-foreground rounded-sm" />
                </div>
                <span className="text-xl font-bold font-display">EduStride</span>
              </div>
              <p className="text-sm text-muted-foreground">© 2024 EduStride Zimbabwe College Portal. All rights reserved.</p>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
              <a href="#" className="hover:text-primary">Help Center</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
