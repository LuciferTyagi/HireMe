import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import IntroCard from "./IntroCard";
const Hero: React.FC = () => {
  return (
    <section className="Hero-Section bg--200 w-full h- ">
             <div className="max-w-[1440px] mx-auto bg--300 h- pl-[65px] pr-[109px] pt-[148px]">
                   <div className="border rounded-lg w-full h- grid grid-cols-2 gap-36">
                        <div className="Card-1 flex flex-col px-14 py-8 border-[1px] border-black rounded-lg">
                              <div className="Introduction flex flex-col items-start gap-10">
                                    <p className="text-[40px] font-medium leading-tight">Hey, I’m Yagyansh Tyagi, a frontend developer specializing in React.js. I convert Figma designs into reusable, pixel-perfect React.js code.</p>
                                    <p className="text-base">I care a lot about writing clean and efficient code, ensuring seamless UI development, and enjoy creating user-centric, interactive, and visually precise web experiences.</p>
                               </div>

                                <div className="Skills flex gap-4 my-10">
                                    <div><img src="/images/react.png"        className="size-14"/></div>
                                    <div><img src="/images/tailwind-css.svg" className="size-14"/></div>
                                    <div><img src="/images/redux.svg"        className=""/></div>
                                    <div><img src="/images/javascript.svg"   className=""/></div>
                                </div>

                               <div className="Contacts flex gap-6 mt-20">
                                    <button className="bg-black text-white rounded-full p-2.5 font-medium"><a href="/contact" className="">Contact me</a></button>
                                    <button><a href="/" className="rounded-full border-[1px] flex items-center justify-center p-2 border-black"><FontAwesomeIcon icon={faLinkedin} className="size-6"/></a></button>
                                    <button><a href="/" className="rounded-full border-[1px] flex items-center justify-center p-2 border-black"><FontAwesomeIcon icon={faGithub}   className="size-6"/></a></button>
                               </div>
                        </div>

                        <div className="card-2 border-[1px] border-black rounded-lg">
                             <IntroCard/>
                        </div>

                        <div className="h-[600px]  border-[1px] border-black rounded-lg object-fill">
                         <img src="/images/foody.png" className=" " alt=""/>
                        </div>

                   </div>
             </div> 
    </section>
  )
  };

export default Hero;
