import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Settings, User } from 'lucide-react';
import React from 'react';
import CartButton from './cart-button';

export default function NavBarMenu() {
  return (
    <div className="flex items-center">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-4">
          <NavigationMenuItem>
            <Link
              href="/admin"
              className="flex items-center gap-2 font-medium hover:underline"
            >
              <Settings className="h-4 w-4" />
              <span>Admin</span>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/"
              className="flex items-center gap-2 font-medium hover:underline"
            >
              <User className="h-4 w-4" />
              <span>User</span>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/cart"
              className="flex items-center gap-2 font-medium hover:underline"
            >
              <CartButton cartItems={10} />
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
