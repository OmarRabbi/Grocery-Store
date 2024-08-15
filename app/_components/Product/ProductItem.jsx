import React from "react";
import "./ProductItem.css";
import { Button } from "@/components/ui/button";

export default function ({ProductItems}) {
  return (
    <>
    {ProductItems.map(item =>(
      <div key={item.productName} className="product-content">
      <img src={item.productImage} alt="apple" />
      <h2 className="font-bold text-lg">{item.productName} {item.productQuantity}</h2>
      <div className="flex gap-3">
        <h2>{item.productPrice}</h2>
        <h2 className={`${item.productSellingPrice > item.productPrice ? 'line-through text-slate-500' : 'hidden'}`}>{item.productSellingPrice}</h2>
      </div>
      <Button
        variant="outline"
        className="text-primary hover:text-white hover:bg-primary"
      >
        Add to cart
      </Button>
    </div>
    ))}
    </>
  );
}
