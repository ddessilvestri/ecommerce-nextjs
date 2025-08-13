import React from 'react';
import Search from './search';
import NavBarMenu from './navbar-menu';
import { Store } from 'lucide-react';

export default function NavBar() {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200 ">
      <div className="flex items-center gap-2">
        <Store size={40} className="text-primary" />
        <span className="font-bold text-1xl">Store</span>
      </div>
      <Search />
      <NavBarMenu />
    </div>
  );
}
