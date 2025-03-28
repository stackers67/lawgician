
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  BookOpen, 
  FileText, 
  Folder, 
  Gavel, 
  Calendar, 
  User, 
  Search, 
  Settings 
} from 'lucide-react';

type SidebarItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: BookOpen,
  },
  {
    title: 'Documents',
    href: '/documents',
    icon: FileText,
  },
  {
    title: 'Cases',
    href: '/cases',
    icon: Folder,
  },
  {
    title: 'Legal Research',
    href: '/research',
    icon: Search,
  },
  {
    title: 'Calendar',
    href: '/calendar',
    icon: Calendar,
  },
  {
    title: 'Barristers',
    href: '/barristers',
    icon: Gavel,
  },
  {
    title: 'Client Portal',
    href: '/clients',
    icon: User,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];

export function DashboardSidebar() {
  const location = useLocation();
  
  return (
    <aside className="hidden lg:flex h-screen flex-col w-64 border-r bg-card">
      <div className="p-6 border-b">
        <Link to="/" className="flex items-center gap-2">
          <Gavel className="h-6 w-6 text-secondary" />
          <span className="font-serif text-xl font-bold">Lawthority</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-auto p-4">
        <ul className="space-y-2">
          {SIDEBAR_ITEMS.map((item) => {
            const isActive = location.pathname === item.href;
            
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground">
            <User className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-medium">John Smith</p>
            <p className="text-xs text-muted-foreground">Solicitor</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
