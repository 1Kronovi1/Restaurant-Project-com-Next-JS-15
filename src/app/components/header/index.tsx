import Link from "next/link"

export function Header() {
    return(
        <header className="flex items-center justify-between">
            <h1 className="font-bilderberg text-3xl">RESNOOD</h1>
            <nav>
                <ul className="flex gap-20 text-sm-3 font-inria-sans">
                    <Link href="/">
                        <li className="cursor-pointer">Home</li>
                    </Link>
                    <li className="cursor-pointer">Menu</li>
                    <li className="cursor-pointer">About</li>
                </ul>
            </nav>
        </header>
    )
}