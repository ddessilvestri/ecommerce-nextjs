import { ShoppingCart } from 'lucide-react';
import React from 'react';
import { Label } from './ui/label';

type CartButtonProps = {
  cartItems: number;
};

export default function CartButton({ cartItems }: CartButtonProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="relative inline-block">
        <ShoppingCart />
        {cartItems > 0 && (
          <Label className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs leading-none">
            {cartItems}
          </Label>
        )}
      </span>
      <span>Cart</span>
    </div>
  );
}
