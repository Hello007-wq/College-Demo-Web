import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from '@/pages/LandingPage';
import { LoginPage } from '@/pages/auth/LoginPage';
import { RegisterPage } from '@/pages/auth/RegisterPage';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { DashboardOverview } from '@/pages/dashboard/DashboardOverview';
import { TimetablePage } from '@/pages/dashboard/TimetablePage';
import { NoticesPage } from '@/pages/dashboard/NoticesPage';
import { FeesPage } from '@/pages/dashboard/FeesPage';
import { ResultsPage } from '@/pages/dashboard/ResultsPage';
import { AdminDashboard } from '@/pages/dashboard/AdminDashboard';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout><DashboardOverview /></DashboardLayout>} />
          <Route path="/dashboard/timetable" element={<DashboardLayout><TimetablePage /></DashboardLayout>} />
          <Route path="/dashboard/notices" element={<DashboardLayout><NoticesPage /></DashboardLayout>} />
          <Route path="/dashboard/fees" element={<DashboardLayout><FeesPage /></DashboardLayout>} />
          <Route path="/dashboard/results" element={<DashboardLayout><ResultsPage /></DashboardLayout>} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster position="top-right" richColors />
      </div>
    </Router>
  );
}

export default App;
