import Link from "next/link"

export function Header() {
    return(
        <header className="flex items-center justify-between flex-wrap gap-4 sm:gap-6">
            <h1 className="text-secondary font-bilderberg text-xl sm:text-2xl lg:text-3xl">RESNOOD</h1>
            <nav className="w-full sm:w-auto">
                <ul className="flex gap-4 sm:gap-12 lg:gap-20 text-xs sm:text-sm lg:text-sm-3 font-inria-sans flex-wrap sm:flex-nowrap justify-start sm:justify-end">
                    <Link href="/">
                        <li className="cursor-pointer hover:text-secondary transition-colors duration-200 whitespace-nowrap">Home</li>
                    </Link>
                    <li className="cursor-pointer hover:text-secondary transition-colors duration-200 whitespace-nowrap">Menu</li>
                    <li className="cursor-pointer hover:text-secondary transition-colors duration-200 whitespace-nowrap">About</li>
                </ul>
            </nav>
        </header>
    )
}