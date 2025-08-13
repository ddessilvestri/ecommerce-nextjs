'use client';

import Link from 'next/link';
import { getCategories, type Category } from '@/lib/category';
import React, { useEffect, useState } from 'react';

export default function CategoryBar() {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    getCategories()
      .then((data) => mounted && setCategories(data))
      .catch(
        (err) =>
          mounted && setError(err?.message ?? 'Failed to load categories')
      );
    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return <div className="text-sm text-red-500">{error}</div>;
  }

  if (!categories) {
    return (
      <div className="text-sm text-muted-foreground">Loading categories…</div>
    );
  }

  if (categories.length === 0) {
    return <div className="text-sm text-muted-foreground">No categories</div>;
  }

  return (
    <div className="w-full">
      <div className="flex w-full items-stretch border-y border-input">
        {categories.map((category, idx) => (
          <React.Fragment key={category.categID}>
            <Link
              href={`/category/${encodeURIComponent(category.categID)}`}
              className="flex-1 basis-0 min-w-0 px-4 py-2 text-sm text-center hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
            >
              {category.categName}
            </Link>
            {idx < categories.length - 1 && (
              <span
                className="self-center h-4 w-px bg-input"
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
