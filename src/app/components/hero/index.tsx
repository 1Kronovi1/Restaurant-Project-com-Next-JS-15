import foodhero from '@/assets/foodhero 1.png'
import Image from 'next/image'
import { Button } from '../button'

export function Hero() {
    return(
        <main className='flex items-center justify-between'>
            <div className='flex flex-col gap-8'>
                <h1 className='text-8xl font-inria-serif text-font-color'>Delicious Food Is Waiting For You</h1>
                <h2 className='text-2xl w-md font-inria-sans text-font-color'>Quality service and great taste, always deliver a satisfying experience</h2>
                <div className='flex gap-10'>
                    <Button title='Food Menu'/>
                    <button className='cursor-pointer rounded-full text-2xl font-inria-sans bg-components-background text-font-color px-6 py-3'>Book a Table</button>
                </div>
            </div>
            <div>
                <Image className='w-230' src={foodhero} alt='Food Hero' />
            </div>
        </main>
    )
} 