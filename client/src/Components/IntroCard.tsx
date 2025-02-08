import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMotionValue , useTransform , motion , useTime } from "motion/react"
const IntroCard: React.FC = () => {
const x  = useMotionValue(0)
const y  = useMotionValue(0)
const rotateX  = useTransform(y, [-100 , 100] , [30 , -30]);
const rotateY  = useTransform(x, [-100 , 100] , [-30 , 30]);
const time = useTime();
const rotate = useTransform(time , [0,3000] , [0,360],{
    clamp:false,
})
const rotatingBg = useTransform(rotate , (r) =>{
    return `conic-gradient(from ${r}deg , #bdc3c7, #2c3e50)`
})
  return (
    <div className="relative w-full h-full bg--300 flex items-center justify-center font-[inter]">
    <div className="absolute top-8 left-1/2  transform -translate-x-1/2">
       <h1 className="relative z-10 text-3xl bg-gradient-to-br from-zinc-500 to-white font-semibold  text-white p-3 rounded-lg">Grab The Card</h1>
        <motion.div 
        style={{background: rotatingBg}}
        className="absolute -inset-[2px] rounded-lg bg-yellow-300"/>
    </div>
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"/>
      <motion.div 
         style={{x,y,rotateX , rotateY , z:100}}
         drag
         dragElastic={0.18}
         dragConstraints={{top:0 , left:0 , right:0, bottom:0}}
         whileTap={{cursor: 'grabbing'}}
         className="bg--400  w-[259px] h-[349px]  flex justify-end pt-[97px] cursor-grab">
                <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className="relative  w-full rounded-lg flex flex-col justify-end pb-5 px-6 bg-gradient-to-br bg-white">
                     <motion.div 
                      style={{x,y,rotateX , rotateY , z:1000 , boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}
                     className="absolute rounded-full size-36 overflow-hidden bottom-[70%] left-1/2 transform -translate-x-1/2"><img src="/images/me.jpg" className=""/></motion.div>
                     <div className="Introduction flex flex-col  items-center gap-5">
                          <h1 className="text-2xl font-semibold text-zinc-700">Yagyansh Tyagi</h1>
                          <h4 className="text-base text-zinc-500 ">Front-End Developer</h4>
                          <motion.div 
                           style={{x,y,rotateX , rotateY , z:1000}}
                           
                          className="flex gap-3">
                               <button style={{boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}} className="rounded-full flex items-center justify-center size-8"><a href="/" className=""><FontAwesomeIcon icon={faLinkedin} className="size-5"/></a></button>
                               <button style={{boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}} className="rounded-full flex items-center justify-center size-8"><a href="/" className=""><FontAwesomeIcon icon={faGithub}   className="size-5"/></a></button>
                               <button style={{boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}} className="rounded-full flex items-center justify-center size-8"><a href="/" className=""><FontAwesomeIcon icon={faXTwitter} className="size-5"/></a></button>
                          </motion.div>
                     </div>
                </div>
         </motion.div>
    </div>
  )
}

export default IntroCard
