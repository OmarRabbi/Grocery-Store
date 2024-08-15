import React from 'react'
import Review from './Review'

const reviews =[
    {
        name : `John Smith`,
        review : `EGrocery Online has transformed my grocery shopping experience. The quality of their produce is unmatched, and their customer service is exceptional!`,
        rating : `⭐️⭐️⭐️⭐️⭐️`
    },
    {
        name : `Noah W.`,
        review : `The store has a decent selection and reasonable prices, but there is room for improvement. Sometimes the delivery can be delayed, and I’ve had a few issues with missing items in my order.`,
        rating : `⭐️⭐️⭐️⭐️`
    },
    {
        name : `James Mortin`,
        review : `The freshness of the produce from this store is unmatched. I've tried other online grocery stores before, but none compare to the quality of fruits and vegetables here.`,
        rating : `⭐️⭐️⭐️⭐️`
    },
    {
        name : `Linda B.`,
        review : `I had a small issue with my order, but the customer service team handled it quickly and professionally. They were very responsive and resolved my problem with a smile.`,
        rating : `⭐️⭐️⭐️⭐️⭐️`
    },
    {
        name : `David Klein`,
        review : `This online grocery store offers an amazing variety of products at great prices. I love how I can find everything I need in one place, from everyday staples to specialty items.`,
        rating : `⭐️⭐️⭐️⭐️⭐️`
    },
    {
        name : `Emma Rathor`,
        review : `I've been ordering from this grocery store for a few months now, and I couldn't be happier with the quality of the produce and the convenience of the delivery. Everything arrives fresh and on time.`,
        rating : `⭐️⭐️⭐️⭐️⭐️`
    }
]
export default function Reviews() {
    
  return (
    <div className='m-10 max-w-fit'>
        <h2 className="text-green-600 font-bold text-2xl">Client Reviews</h2>
        <div className='w-full flex items-center justify-center mt-4'>
            
            <Review review={reviews}/>
        </div>
    </div>
  )
}
