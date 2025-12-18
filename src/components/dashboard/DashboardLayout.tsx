import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Bell, 
  CreditCard, 
  GraduationCap, 
  LogOut, 
  Menu, 
  X,
  UserCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MOCK_STUDENT } from '@/lib/mockData';

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

const NavItem = ({ to, icon: Icon, label, active }: NavItemProps) => (
  <Link 
    to={to} 
    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
      active 
        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
    }`}
  >
    <Icon className={`w-5 h-5 ${active ? '' : 'group-hover:scale-110 transition-transform'}`} />
    <span className="font-medium">{label}</span>
  </Link>
);

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const navItems = [
    { to: '/dashboard', icon: LayoutDashboard, label: 'Overview' },
    { to: '/dashboard/timetable', icon: Calendar, label: 'Timetable' },
    { to: '/dashboard/notices', icon: Bell, label: 'Notices' },
    { to: '/dashboard/fees', icon: CreditCard, label: 'Fees' },
    { to: '/dashboard/results', icon: GraduationCap, label: 'Results' },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-sidebar border-r border-sidebar-border p-6">
      <div className="flex items-center gap-2 mb-10 px-2">
        <div className="bg-primary p-1.5 rounded-lg">
          <GraduationCap className="w-6 h-6 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold font-display text-sidebar-foreground">EduStride</span>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavItem 
            key={item.to} 
            {...item} 
            active={location.pathname === item.to} 
          />
        ))}
      </nav>

      <div className="mt-auto pt-6 space-y-4">
        <div className="px-4 py-4 rounded-2xl bg-primary/5 border border-primary/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <UserCircle className="w-6 h-6 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold truncate text-sidebar-foreground">{MOCK_STUDENT.name}</p>
              <p className="text-xs text-muted-foreground truncate">{MOCK_STUDENT.studentId}</p>
            </div>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-1">
            Term {MOCK_STUDENT.currentTerm} • 2026
          </p>
        </div>
        
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/5"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 h-screen">
        <SidebarContent />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 border-b flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1 rounded">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold font-display">EduStride</span>
          </div>
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72">
              <SidebarContent />
            </SheetContent>
          </Sheet>
        </header>

        {/* Page Header (Desktop) */}
        <header className="hidden lg:flex h-16 border-b items-center justify-between px-8 bg-background shrink-0">
          <h2 className="font-display text-xl font-bold">
            {navItems.find(item => item.to === location.pathname)?.label || 'Dashboard'}
          </h2>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Bell className="w-4 h-4" />
              <span className="bg-primary text-primary-foreground text-[10px] px-1 rounded-full">2</span>
            </Button>
            <div className="h-8 w-px bg-border mx-2" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold leading-none">{MOCK_STUDENT.name}</p>
                <p className="text-[10px] text-muted-foreground uppercase mt-1">{MOCK_STUDENT.program}</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <UserCircle className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
};
