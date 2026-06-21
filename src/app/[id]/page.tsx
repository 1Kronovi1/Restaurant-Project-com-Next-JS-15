import { Foods } from "../components/foods";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FoodsMenu } from "../components/foodsMenu";
import star from '@/assets/star.png'
import Image from "next/image";

interface FoodPageProp {
    params: Promise<{ id: string }>
}

export default async function FoodPage({params}: FoodPageProp) {
    const { id } = await params
    const food = Foods.find(f => f.id === Number(id))

    if (!food) {
        notFound()
    }
    
    return(
        <>
            <div className="flex flex-col lg:flex-row items-center justify-start font-inria-sans gap-0 lg:gap-0">
                <div className="bg-primary relative w-full h-30 sm:h-40 lg:w-70 lg:h-110 rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl flex items-center justify-center">
                    <Image 
                        src={food.image} 
                        alt={food.title} 
                        className="absolute top-4 w-50 left-60 lg:left-50 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 lg:w-100 h-auto z-10 lg:top-1/2"
                    />
                </div>
                <div className="bg-components-background w-full lg:w-1/2 rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl px-6 sm:px-10 lg:pl-30 lg:pr-10 py-8 sm:py-10 lg:h-110 flex items-start flex-col justify-center gap-6 sm:gap-8 lg:gap-10">
                    <div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold">
                            {food.title}
                        </h1>
                        <p className="text-sm sm:text-base lg:text-2xl mt-2">
                            {food.description}
                        </p>
                    </div>
                    <p className="text-3xl sm:text-4xl lg:text-7xl font-bold text-secondary">
                        ${food.price}
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 sm:gap-6 lg:gap-20">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <div className="flex gap-1 sm:gap-2">
                                <Image className="w-4 sm:w-5 lg:w-5 h-auto" src={star} alt="stars" />
                                <Image className="w-4 sm:w-5 lg:w-5 h-auto" src={star} alt="stars" />
                                <Image className="w-4 sm:w-5 lg:w-5 h-auto" src={star} alt="stars" />
                            </div>
                            <p className="text-lg sm:text-xl lg:text-2xl font-semibold">
                                {food.rate}
                            </p>
                        </div>
                        <Button size="giant" className="w-full sm:w-auto">Order</Button>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-20">
                <FoodsMenu currentId={food.id} />
            </div>
        </>
    )
}