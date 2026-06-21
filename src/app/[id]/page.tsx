import { Foods } from "../components/foods";
import { notFound } from "next/navigation";
import { Button } from "../components/button";
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
            <div className="flex items-center justify-start font-inria-sans">
                <div className="bg-primary relative w-70 h-110 rounded-l-3xl">
                </div>
                    <Image src={food.image} alt={food.title} className="w-100 h-100 absolute left-34"/>
                <div className="bg-components-background gap-10 h-110 rounded-r-3xl pl-45 pr-10 flex items-start flex-col justify-center">
                    <div>
                        <h1 className="text-7xl">{food.title}</h1>
                        <p className="text-2xl">{food.description}</p>
                    </div>
                    <p className="text-7xl">${food.price}</p>
                    <div className="flex items-center justify-between w-full gap-20">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-2">
                                <Image className="w-5 h-5" src={star} alt="stars" />
                                <Image className="w-5 h-5" src={star} alt="stars" />
                                <Image className="w-5 h-5" src={star} alt="stars" />
                            </div>
                            <p className="text-2xl">{food.rate}</p>
                        </div>
                        <Button title="Add to cart"/>
                    </div>
                </div>
            </div>
            <FoodsMenu currentId={food.id} />
        </>
    )
}