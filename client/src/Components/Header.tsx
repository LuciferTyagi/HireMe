const Header: React.FC = () => {
    return (
        <header className="w-full border-b">
                 <nav className="max-w-[1440px] mx-auto bg-red-300 py-4 flex justify-between px-28 font-clash tracking-tighter text-3xl font-medium mt-24">
                        <span className="">Yagyansh Tyagi.</span>
                        <ul className="flex gap-11">
                             <li><a href="/" className="">Home</a></li>
                             <li><a href="/" className="">About</a></li>
                             <li><a href="/" className="">Works</a></li>
                             <li><a href="/" className="">Contact</a></li>
                        </ul>
                 </nav>
        </header>
    )
}

export default Header
