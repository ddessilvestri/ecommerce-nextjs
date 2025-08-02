'use client';

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";

export default function Home() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading, login, logout } = useAuth();
  

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Loading...</h2>
          <Button onClick={() => router.push('/login')}>Log in</Button>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Home page</h2>
          <Button onClick={() => router.push('/login')}>Log in</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Welcome, {user?.name}!</h1>
          <Button 
            onClick={() => logout()}
            variant="outline"
          >
            Logout
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
          <p className="text-gray-600">
            You are logged in as {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
}

