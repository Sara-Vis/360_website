// import { Button } from "flowbite-react";
// import { LuPhone } from "react-icons/lu";

// function CallButton(){
//     return(
//             <div className="flex justify-center mt-20">
//                 <Button as="a" href="tel:+393339764390" color="[#d6bea6]" className="sticky top-20 bg-[#b5855a] text-white text-2xl px-10 py-8 shadow-xl hover:scale-105">
//                     <LuPhone className="mr-3 h-7 w-7" />
//                     CHIAMA ORA
//                 </Button>
//             </div>
//     )
// }

// export default CallButton

import { useEffect, useState, useRef } from "react"
import { LuPhone } from "react-icons/lu"

export default function CallButton() {
  const [isFloating, setIsFloating] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()

      // trigger a bit later (smoother)
      setIsFloating(rect.top < -100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Original button */}
      <div ref={ref} className="flex justify-center mt-16 px-4">
        {!isFloating && (
          <a
            href="tel:+393339764390"
            className="bg-[#b5855a] text-white text-base md:text-xl px-6 md:px-8 py-4 md:py-5 rounded-xl shadow-xl hover:scale-105 transition flex items-center gap-2"
          >
            <LuPhone className="h-5 w-5 md:h-7 md:w-7" />
            CHIAMA ORA
          </a>
        )}
      </div>

      {/* Floating button */}
      <a
        href="tel:+393339764390"
        className={`
          fixed bottom-4 right-4 md:bottom-6 md:right-6
          bg-[#b5855a] text-white
          px-4 md:px-6 py-3 md:py-4
          rounded-full shadow-2xl
          flex items-center gap-2
          z-50
          transition-all duration-300
          ${isFloating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
        `}
      >
        <LuPhone className="h-5 w-5" />
        <span className="hidden sm:inline">CHIAMA ORA</span>
      </a>
    </>
  )
}