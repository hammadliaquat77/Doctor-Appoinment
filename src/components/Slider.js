import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Image from 'next/image'



  export default function Slider() {
  return (
    <div className='container mx-auto w-full'>
       <Carousel>
  <CarouselContent>
    <CarouselItem>
      <div className='flex justify-center container mx-auto'>

      <Image
      src={'https://images.unsplash.com/photo-1730407318819-6db610077721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8'}
      height={200}
      width={200}
      />
      </div>
    </CarouselItem>
    <CarouselItem></CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    </div>
  )
}

 