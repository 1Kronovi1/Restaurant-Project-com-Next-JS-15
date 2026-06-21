type ButtonProps = {
    title: string,
}

export function Button({ title }: ButtonProps) {
    return(
        <button className='cursor-pointer hover:scale-[1.04] transition-all rounded-full text-2xl font-inria-sans bg-primary text-white px-6 py-3'>
            {title}
        </button>
    )
}