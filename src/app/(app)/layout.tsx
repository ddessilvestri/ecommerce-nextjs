'use client';
import NavBar from '@/components/navbar';
import CategoryBar from '@/components/category-bar';
import { useAuth } from '@/contexts/auth-context';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) router.replace('/');
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) return null;

  return (
    <main>
      <NavBar />
      <CategoryBar />
      {children}
    </main>
  );
}
