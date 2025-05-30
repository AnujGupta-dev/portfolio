import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from './ui/text-generate-effect';
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from './MagicButton';

const Hero = () => {
    return (
        <div className='pb-20 pt-36 h-screen flex items-center justify-center relative'>    
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>
            {/* Background grid effect */}
            <div className=" flex h-full w-full items-center justify-center bg-white dark:bg-gray-950 absolute top-0 left-0">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
              
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-gray-950"></div>

            </div>

            <div className='flex justify-center relative my-20 z-10 '>
                <div className='max-w-[89w] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <p className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 '>
                        Dynamic Web Magic with Next.js
                    </p>

                    <TextGenerateEffect  className="text-center text-[40px] md:text-5xl lg:text-6xl" words='Transforming concepts into seameless User Experiences' />

                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'> Hi, I&apos;m Anuj , a full stack Web Developer </p>

                    <a href="#about">
                       <MagicButton title='Show my work  ' icon={<FaLocationArrow fontSize={'1rem'}/>} position="right" />
                       
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero