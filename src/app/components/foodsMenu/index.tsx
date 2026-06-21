import { Foods } from "../foods"
import Link from "next/link"
import Image from "next/image"
import star from "@/assets/star.png"

type FoodsMenuProps = {
    currentId?: number;
}

export function FoodsMenu({ currentId }: FoodsMenuProps) {
    const filteredFoods = Foods.filter(food => food.id !== currentId)

    return(
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 w-full">
                {filteredFoods.map(food => (
                    <div className="flex flex-col h-full" key={food.id}>
                        <div className="bg-primary rounded-t-xl relative w-full py-2 sm:py-3 flex justify-center overflow-hidden">
                            <Link href={`/${food.id}`}>
                                <Image 
                                    className="w-32 sm:w-52 lg:w-60 h-auto cursor-pointer hover:rotate-4 hover:scale-105 transition-all duration-300" 
                                    src={food.image} 
                                    alt="Food Image"
                                />
                            </Link>
                        </div>
                        <div className="flex flex-col justify-between rounded-b-xl grow pt-4 sm:pt-6 lg:pt-23 pb-3 sm:pb-4 lg:pb-4 px-3 sm:px-4 lg:px-5 bg-components-background">
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex-1">
                                    <h3 className="text-base sm:text-lg lg:text-xl leading-tight">{food.title}</h3>
                                    <p className="text-xs sm:text-sm lg:text-md line-clamp-2">{food.description}</p>
                                </div>
                                <p className="text-base sm:text-lg lg:text-xl text-secondary shrink-0">{food.rate}</p>
                            </div>
                            <div className="flex items-center justify-between gap-2 mt-2 sm:mt-3 lg:mt-0">
                                <div className="flex gap-1 shrink-0">
                                    <Image className="w-4 sm:w-5 lg:w-5 h-auto" src={star} alt="stars" />
                                    <Image className="w-4 sm:w-5 lg:w-5 h-auto" src={star} alt="stars" />
                                    <Image className="w-4 sm:w-5 lg:w-5 h-auto" src={star} alt="stars" />
                                </div>
                                <p className="text-lg sm:text-2xl lg:text-3xl font-semibold shrink-0">${food.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}