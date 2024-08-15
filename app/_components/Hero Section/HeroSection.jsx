"use client";
import React from 'react'
import Lottie from 'lottie-react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button';
import './HeroSection.css'


export default function HeroSection() {
  return (
    <div className='hero-section w-11/12 h-auto mx-auto flex items-center justify-between p-3 px-10 m-3 leading-5 tracking-wider'>
        <div className="hero-content basis-1/2">
            <h2 className='text-4xl font-bold p-2 sm:text-3xl'>Order Your Best Food<br/>Fresh & Healthy<br/>Anytime.</h2>
            <p className='p-2 text-slate-600'>We source and sell the very best beef,vegetables etc.<br/>sourced with the greatest care from farmer.</p>
            <Button className='border rounded-full'>Order Now <ArrowRight className='ml-2'/></Button>
        </div>
        <div className='basis-1/2'>
            <Lottie
                animationData={require('/public/animations/hero.json')}
                loop={true}
                className='w-3/4 h-2/4 mx-auto'
            />
        </div>
    </div>
  )
}
