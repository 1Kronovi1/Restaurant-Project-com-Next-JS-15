import { FoodsMenu } from "../foodsMenu"

export function Menu() {
    return(
        <section className="flex flex-col gap-6 sm:gap-8 lg:gap-15 font-inria-sans">
            <h2 className="font-inria-serif text-2xl sm:text-3xl lg:text-4xl leading-tight">Top List - Our mainstay menu</h2>
            <FoodsMenu />
        </section>
    )
}