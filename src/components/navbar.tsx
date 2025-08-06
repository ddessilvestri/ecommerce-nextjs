import React from 'react';
import Search from './search';
import NavBarMenu from './navbar-menu';

export default function NavBar() {
  return (
    <div className="flex justify-between items-center p-4">
      <Search />
      <NavBarMenu />
    </div>
  );
}
