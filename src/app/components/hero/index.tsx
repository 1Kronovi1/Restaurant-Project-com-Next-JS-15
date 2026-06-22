import foodhero from '@/assets/foodhero 1.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
    return(
        <main className='flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0'>
            <div className='flex flex-col gap-4 lg:gap-8 w-full lg:w-1/2'>
                <h1 className='text-4xl sm:text-5xl lg:text-8xl font-inria-serif text-font-color leading-tight'>
                    Delicious Food Is Waiting For You
                </h1>
                <h2 className='text-sm sm:text-base lg:text-2xl font-inria-sans text-font-color w-full lg:w-md'>
                    Quality service and great taste, always deliver a satisfying experience
                </h2>
                <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 w-full'>
                    <Button size="lg" className='w-full sm:w-auto'>Food Menu</Button>
                    <Button variant="componentBackground" size="lg" className='w-full sm:w-auto'>Book a table</Button>
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
                <Image 
                    className='w-40 sm:w-52 lg:w-180 h-auto' 
                    src={foodhero} 
                    alt='Food Hero'
                    priority
                />
            </div>
        </main>
    )
} 