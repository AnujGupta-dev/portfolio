'use client'
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./backgroundgradientAnimation.";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from '../MagicButton';


export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-7xl grid-cols-1 gap-4  md:grid-cols-6 lg:grid-cols-5 min-h-screen",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode; 
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const [copied, setCopied] = useState(false);

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

      const handleCopy = () => {
        const text = "anujguptaaj123@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
      };

    return (
        <div className={cn(
                "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2]  dark:bg-black dark:shadow-none overflow-hidden relative h-full",
                className,)}

            style={{
                background: ' rgb(2,0,36)',
                backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(170,14,157,1) 75%, rgba(146,0,255,1) 100%)'
            }}>
            {/* {image part} */}
            <div className={`${id === 6 && "flex justify-center "}  `}>
                <div className="w-full h-full absolute top-0 left-0">
                    {img && (
                        <img src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center ")} /> )}
                </div>
            </div>

            <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80" } `}>
                {spareImg && (
                    <img
                        src={spareImg}
                        alt={spareImg}
                        className="object-cover object-center w-full h-full"
                    />
                )}
            </div>

            {id === 6 && (
                <BackgroundGradientAnimation>

                </BackgroundGradientAnimation>
            )}  

            <div className={cn(
                    titleClassName,
                    `group-hover/bento:translate-x-2 transition duration-200 relative lg:h-full md:h-full min-h-40 flex flex-col px-5 lg:p-10
                     ${id===2 && 'lg:pt-0'}`
                )}>
                <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                    {description}
                </div>
                <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
                    {title}
                </div>
                {id === 2 && <GlobeDemo />}

                {id === 3 && (
                    <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2  md:-right-6 md:opacity-50">
                        <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                            {['React.js','Next.js','JavaScript','Java','C++'].map((item, i) => (
                                <span
                                    key={i}
                                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                >
                                    {item}
                                </span>
                            ))}
                            <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                        </div>
                        <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                            <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                            {['React.js','Next.js','JavaScript','Java','C++'].map((item, i) => (
                                <span
                                    key={i}
                                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                {id === 6 && (
                    <div className="mt-5 relative flex flex-col items-center justify-center">
                        <div
                            className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                                }`}
                        >
                            <Lottie options={defaultOptions} height={200} width={400} />
                        </div>

                        <MagicButton
                            title={copied ? "Email is Copied!" : "Copy my email address"}
                            icon={<IoCopyOutline />}
                            position="left"
                            handleClick={handleCopy}
                            otherClasses="!bg-[#161A31]"
                        />
                    </div>
                )}
            </div>
    </div >
    );
};
