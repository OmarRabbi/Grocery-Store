import React from 'react'
import ProductItem from './ProductItem'

const ProductItems = [
  {
    productName: "Creamy Bread",
    productQuantity: "6pc",
    productImage: "./products/bread.jpeg",
    productPrice: "$5.99",
    productSellingPrice: "$5.99",
  },
  {
    productName: "Apple",
    productQuantity: "1kg",
    productImage: "./products/apple.jpeg",
    productPrice: "$3.99",
    productSellingPrice: "$5.99",
  },
  {
    productName: "Beef Leg Piece",
    productQuantity: "1kg",
    productImage: "./products/beef.jpeg",
    productPrice: "$3.99",
    productSellingPrice: "$5.99",
  },
  {
    productName: "Strawberry",
    productQuantity: "1kg",
    productImage: "./products/strawberry.jpeg",
    productPrice: "$2.99",
    productSellingPrice: "$3.99",
  },
  {
    productName: "Cabbage",
    productQuantity: "4pc",
    productImage: "./products/cabbage.jpeg",
    productPrice: "$2.99",
    productSellingPrice: "$4.99",
  },
  {
    productName: "Pumpkins",
    productQuantity: "1kg",
    productImage: "./products/pumpkins.jpeg",
    productPrice: "$1.99",
    productSellingPrice: "$3.99",
  },
  {
    productName: "Tomato",
    productQuantity: "1kg",
    productImage: "./products/tomato.jpeg",
    productPrice: "$1.50",
    productSellingPrice: "$1.50",
  },
  {
    productName: "Garlic",
    productQuantity: "1kg",
    productImage: "./products/garlic.jpeg",
    productPrice: "$2.25",
    productSellingPrice: "$2.50",
  },
];
export default function ProductList() {
  return (
    <div className='m-10'>
        <h2 className="text-green-600 font-bold text-2xl">Our Popular Products</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4'>
            <ProductItem ProductItems={ProductItems}/>
        </div>
    </div>
  )
}
