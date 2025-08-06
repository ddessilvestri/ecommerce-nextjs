import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

type SearchProps = {
  placeholder?: string;
};

export default function Search({ placeholder = 'Search' }: SearchProps) {
  return (
    <div className="flex items-center gap-2">
      <Input type="text" placeholder={placeholder} />
      <Button variant="outline">icon</Button>
    </div>
  );
}
