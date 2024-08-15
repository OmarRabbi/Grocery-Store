import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Review({ review }) {
  return (
    <>
      <Carousel className='mx-auto w-3/4 '>
        <CarouselContent>
          {review.map((data) => (
            <CarouselItem key={data.name}>
              <div className="flex flex-col items-center justify-center gap-2 p-4 bg-green-50 border border-gray-300 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out">
                <p className="bg-white rounded shadow-lg p-4">{data.review}</p>
                <h3>rating: {data.rating}</h3>
                <h2>review by {data.name}</h2>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
