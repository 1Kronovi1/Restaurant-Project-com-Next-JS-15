import { FoodsMenu } from "../foodsMenu"

export function Menu() {
    return(
        <section className="flex flex-col gap-15 font-inria-sans">
            <h2 className="font-inria-serif text-4xl">Top List - Our mainstay menu</h2>

            <FoodsMenu />
        </section>
    )
}