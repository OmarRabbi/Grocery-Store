import React from "react";
import './CategoryList.css'

export default function CategoryList({category}) {
  return (
    <div className="category m-3 mx-10">
      <h2 className="text-green-600 font-bold text-2xl">Shop by Category</h2>
      <div className="content grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2">
        {category.map(item =>(
          <div key={item.name} className="cat-item">
          <img src={item.image} alt="logo"/>
          <h2>{item.name}</h2>
        </div>
        ))}
      </div>
    </div>
  );
}
