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
            <div className="flex items-center justify-start gap-10">
                {filteredFoods.map(food => (
                    <div className="flex flex-col" key={food.id}>
                        <div className="bg-primary rounded-t-xl h-45 relative w-70 py-3 flex justify-center">
                            <Link href={`/${food.id}`}>
                                <Image className="w-60 h-60 cursor-pointer hover:rotate-4 hover:scale-105 transition-all duration-[.30s]" src={food.image} alt="Food Image"/>
                            </Link>
                        </div>
                        <div className="flex flex-col justify-between rounded-b-xl h-60 pt-23 pb-4 px-5 bg-components-background">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-xl">{food.title}</h3>
                                    <p className="text-md w-40">{food.description}</p>
                                </div>
                                <p className="text-xl text-secondary">{food.rate}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2">
                                    <Image className="w-5 h-5" src={star} alt="stars" />
                                    <Image className="w-5 h-5" src={star} alt="stars" />
                                    <Image className="w-5 h-5" src={star} alt="stars" />
                                </div>
                                <p className="text-3xl">${food.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}