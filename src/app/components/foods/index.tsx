import food1 from '@/assets/food1 1.png'
import food2 from '@/assets/food2 1.png'
import food3 from '@/assets/food3 1.png'
import { StaticImageData } from 'next/image'

export interface Foods {
    id: number,
    image: StaticImageData,
    title: string,
    description: string,
    rate: number,
    price: number,
}

export const Foods: Foods[] = [
    { 'id':1, 'image':food1, 'title':'Noodles', 'description':'with dried shrimps', 'rate':8.1, 'price':12 },
    { 'id':2, 'image':food2, 'title':'Seafood Soup', 'description':'soup with seafood and pork', 'rate':9.2, 'price':15 },
    { 'id':3, 'image':food3, 'title':'King Shrimp Noodle', 'description':'noodie soup with king shrimp', 'rate':9.8, 'price':19 }
]