"use client";
import React from 'react'
import Lottie from 'lottie-react'
import './About.css'

export default function About() {
  return (
  <>
    <div className='m-10'>
        <h2 className="text-green-600 font-bold text-2xl">About Us</h2>
        <div className='m-5 p-3 bg-green-50 border rounded'>
            <h2 className='text-green-600 font-bold text-lg'>Our Mission</h2>
            <p>We are on a mission to transform the way you shop for groceries. By offering a wide range of products, from fresh produce to pantry staples, we aim to provide everything you need in one convenient place. Our commitment to quality and customer satisfaction drives us to deliver an exceptional shopping experience every time.</p>
        </div>
        <div id='about-content' className='w-11/12 mx-auto flex items-center justify-around p-3 px-10 m-3 leading-5 tracking-wider'>
          <div className='why-us bg-green-50 p-10 border rounded'>
            <h2 className='text-green-600 font-bold text-lg mb-5'>Why Choose Us ?</h2>
            <p>24/7 hour service</p>
            <p>Fast on Delivery</p>
            <p>Fresh Authentic Product</p>
          </div>
          <div className='basis-1/2'>
            <Lottie
                animationData={require('/public/animations/delivery.json')}
                loop={true}
                className='w-3/4 h-2/4 mx-auto'
            />
        </div>
        </div>
    </div>
  </>

  )
}
