import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 p-4 py-12">
      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 group">
        <div className="bg-primary p-1.5 rounded-lg transition-transform group-hover:scale-110">
          <GraduationCap className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-bold font-display">EduStride</span>
      </Link>

      <Card className="w-full max-w-lg shadow-2xl border-none">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-display">Student Registration</CardTitle>
          <CardDescription>Join our academic community today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-8 px-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                  {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                </div>
                {s < 3 && <div className={`w-12 sm:w-20 h-0.5 mx-2 ${step > s ? 'bg-primary' : 'bg-muted'}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Tatenda" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Mutasa" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-email">Email Address</Label>
                  <Input id="reg-email" type="email" placeholder="tatenda.m@email.com" required />
                </div>
                <Button type="button" className="w-full" onClick={() => setStep(2)}>
                  Next Step <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <div className="space-y-2">
                  <Label>Academic Program</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sciences">Sciences</SelectItem>
                      <SelectItem value="commercials">Commercials</SelectItem>
                      <SelectItem value="arts">Arts & Humanities</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 text-sm bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <p className="font-semibold text-primary">System Verification Note:</p>
                  <p className="text-muted-foreground">
                    If your name is not found in our pre-enrollment database, you will proceed with a provisional registration subject to verification.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button type="button" className="flex-1" onClick={() => setStep(3)}>
                    Next Step <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 animate-fade-in">
                <div className="space-y-2">
                  <Label htmlFor="reg-password">Create Password</Label>
                  <Input id="reg-password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" required />
                </div>
                <div className="flex gap-4">
                  <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button type="submit" className="flex-1" disabled={isLoading}>
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                    Complete Registration
                  </Button>
                </div>
              </div>
            )}
          </form>

          <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
