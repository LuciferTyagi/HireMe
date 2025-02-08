import { faMoon, faX } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const Header: React.FC = () => {
const[showMobileMenu , setShowMobileMneu] = useState(false);
    return (
        <header className="w-full border-b pt-10 bg-yellow-200">
                
                 <nav style={{boxShadow: "0px 1px 20px 0px rgba(222, 222, 222, 0.56)"}} className="Desktop-Navbar hidden lg:flex items-center  justify-between py-7 px-10 rounded-lg max-w-[1440px] mx-auto bg-white text-[#41424C] text-3xl  ">
                        <div className="bg--100 relative leading-3">
                        <span className="font-pacifico ">yagyansh.</span>
                        <img src="/images/arrow.png" alt="arrow" className="absolute  left-[90%]"/>
                        </div>
                        <ul className="flex gap-11 font-tajawal">
                             <li><a href="/" className="">About</a></li>
                             <li><a href="/" className="">Works</a></li>
                             <li><a href="/" className="">Contact</a></li>
                        </ul>
                 </nav>

                 <nav style={{boxShadow: "0px 1px 20px 0px rgba(222, 222, 222, 0.56)"}} className="Mobile-Navbar lg:hidden w-full mx-auto bg-white rounded-lg py-2 flex justify-between items-center px-4  tracking-tighter  font-medium ">
                       <span className="text-2xl font-pacifico">Yagyansh Tyagi.</span>
                       <button onClick={() => setShowMobileMneu(true)} className="flex items-center"><FontAwesomeIcon icon={faBars} className="size-5"/></button>
                       {showMobileMenu && (
                           <div className="absolute inset-0 w-full h-screen bg-white px-4">
                                 <div className="Tools flex justify-between items-center mt-6">
                                      <span className="text-2xl font-pacifico">Yagyansh Tyagi.</span>
                                      <div className="flex gap-4">
                                            <button><FontAwesomeIcon icon={faMoon} className="size-5 "/></button>
                                            <button onClick={() => setShowMobileMneu(false)}><FontAwesomeIcon icon={faX} className="size-5"/></button>
                                      </div>
                                 </div>
                                 
                                 <ul className="flex flex-col gap-1 text-[26px] mt-4 ml-3 font-tajawal">
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
