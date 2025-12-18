import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent, role: 'student' | 'admin') => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      if (role === 'student') navigate('/dashboard');
      else navigate('/admin/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 p-4">
      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 group">
        <div className="bg-primary p-1.5 rounded-lg transition-transform group-hover:scale-110">
          <GraduationCap className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-bold font-display">EduStride</span>
      </Link>

      <Card className="w-full max-w-md shadow-2xl border-none">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-display">Welcome Back</CardTitle>
          <CardDescription>Sign in to your EduStride academic portal</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="admin">Administrator</TabsTrigger>
            </TabsList>
            
            <TabsContent value="student">
              <form onSubmit={(e) => handleLogin(e, 'student')} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="tatenda.m@edustride.ac.zw" required />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button className="w-full h-11" disabled={isLoading}>
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                  Sign In as Student
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="admin">
              <form onSubmit={(e) => handleLogin(e, 'admin')} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Staff Email</Label>
                  <Input id="admin-email" type="email" placeholder="admin@edustride.ac.zw" required />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="admin-password">Password</Label>
                    <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
                  </div>
                  <Input id="admin-password" type="password" required />
                </div>
                <Button className="w-full h-11" disabled={isLoading}>
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                  Sign In as Administrator
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
            New student?{' '}
            <Link to="/register" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
              Create an account <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
