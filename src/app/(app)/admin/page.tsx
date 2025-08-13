'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductTable } from '@/components/admin/tab-content/product';

const tabs = [
  {
    label: 'Products',
    value: 'products',
    content: <ProductTable />,
  },
  {
    label: 'Categories',
    value: 'categories',
    content: 'Manage categories here.',
  },
  {
    label: 'Users',
    value: 'users',
    content: 'Manage users here.',
  },
];

export default function Admin() {
  return (
    <div className="w-full min-h-screen p-4">
      <Tabs defaultValue="products" className="w-full">
        <TabsList className="w-full flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="w-full">
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
