import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search as SearchIcon } from 'lucide-react';

type SearchProps = {
  placeholder?: string;
};

export default function Search({ placeholder = 'Search' }: SearchProps) {
  return (
    <div className="w-1/3 group inline-flex items-stretch rounded-md border border-input bg-background overflow-hidden transition-colors hover:border-muted-foreground/40 focus-within:ring-2 focus-within:ring-ring">
      <Input
        type="text"
        placeholder={placeholder}
        className="rounded-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
      />
      <Button
        variant="outline"
        className="rounded-none border-0 border-l border-l-input group-hover:bg-accent"
        aria-label="Search"
      >
        <SearchIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
