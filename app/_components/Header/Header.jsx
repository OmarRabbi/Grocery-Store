import { LayoutGrid, Search, ShoppingCart } from "lucide-react";
import React from "react";
import "./Header.css";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function ({category}) {
  return (
    <div className="p-2">
      <div className="upper-navbar border-b border-gray-100">
        <div className="logo-search flex items-center gap-x-10">
          <div className="logo flex items-center cursor-pointer">
            <img src="./logo.webp" alt="logo" className="w-30 h-20 z-0" />
            <h2 className="text-xl text-green-400"></h2>E
            <span className="text-red-400">grocery</span>
            <hr className="border-none" />
            Online
            <h2 />
          </div>
          <div className="search py-3 px-10 flex items-center gap-x-2 border rounded-full">
            <Search />
            <input
              type="search"
              placeholder="search"
              className="outline-none"
            />
          </div>
        </div>
        <div className="user-activities flex items-center gap-x-4 mx-4">
          <ShoppingCart className="cart" />
          <Button>Login</Button>
        </div>
      </div>
      <div className="lower-navbar p-2">
        <h2 className="item">Home</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="item">
              <LayoutGrid /> Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {category.map(item =>(
              <DropdownMenuItem key={item.name}>
              <img src={item.image} alt="logo" className="w-8 h-8 p-2" />
              {item.name}
            </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <h2 className="item">Popular Items</h2>
        <h2 className="item">About</h2>
        <h2 className="item">Review</h2>
      </div>
      <hr className="bg-slate-200" />
    </div>
  );
}
