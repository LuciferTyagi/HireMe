import { faMoon, faX } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const Header: React.FC = () => {
const[showMobileMenu , setShowMobileMneu] = useState(false);
    return (
        <header className="w-full border-b">
                 <nav className="Desktop-Navbar hidden lg:flex max-w-[1440px] mx-auto bg-red-300 py-4  justify-between px-28 font-clash tracking-tighter text-3xl font-medium mt-24">
                        <span className="">Yagyansh Tyagi.</span>
                        <ul className="flex gap-11">
                             <li><a href="/" className="">Home</a></li>
                             <li><a href="/" className="">About</a></li>
                             <li><a href="/" className="">Works</a></li>
                             <li><a href="/" className="">Contact</a></li>
                        </ul>
                 </nav>

                 <nav className="Mobile-Navbar lg:hidden w-full mx-auto bg-red-300 py-2 flex justify-between items-center px-4 font-clash tracking-tighter  font-medium mt-12">
                       <span className="text-2xl">Yagyansh Tyagi.</span>
                       <button onClick={() => setShowMobileMneu(true)} className="flex items-center"><FontAwesomeIcon icon={faBars} className="size-5"/></button>
                       {showMobileMenu && (
                           <div className="absolute inset-0 w-full h-screen bg-white px-4">
                                 <div className="Tools flex justify-between items-center mt-6">
                                      <span className="text-2xl">Yagyansh Tyagi.</span>
                                      <div className="flex gap-4">
                                            <button><FontAwesomeIcon icon={faMoon} className="size-5"/></button>
                                            <button onClick={() => setShowMobileMneu(false)}><FontAwesomeIcon icon={faX} className="size-5"/></button>
                                      </div>
                                 </div>
                                 
                                 <ul className="flex flex-col gap-1 text-[26px] mt-4 ml-3">
                                     <li><a href="/">Home</a></li>
                                     <li><a href="/">About</a></li>
                                     <li><a href="/">Works</a></li>
                                     <li><a href="/">Contact</a></li>
                                    
                                 </ul>
                           </div>
                       )}
                 </nav>
        </header>
    )
}

export default Header
