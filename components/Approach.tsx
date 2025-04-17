"use client"

import React from 'react'
import { CanvasRevealEffect } from './ui/CanvasReveal';
import { MagicButton2 } from './ui/CanvasUtility';
import { Card } from './ui/CanvasUtility'
import { title } from 'process';

const Approach = () => {
    return (
        <div>
            <h1 className='text-center text-[40px] md:text-5xl lg:text-6xl font-bold'>My <span className='text-purple-800 '>approach</span></h1>
            <div>
                <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
                    <Card title="Planning & Strategy" icon={<MagicButton2 title="Phase 1" />} des="We'll collaborate to map out your website's goals, target audience,
                    and key functionalities. We'll discuss things like site structure, navigation, and content requirements.">
                        <CanvasRevealEffect
                            animationSpeed={5.1}
                            containerClassName="bg-emerald-900"
                        />
                    </Card>
                    <Card title="Development & Progress Update" icon={<MagicButton2 title="Phase 2" />}
                        des="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.">
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-gray-950"
                            colors={[
                                [236, 72, 153],
                                [232, 121, 249],
                            ]}
                            dotSize={2}
                        />
                        {/* Radial gradient for the cute fade */}
                        <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                    </Card>
                    <Card title="Development & Launch" icon={<MagicButton2 title="Phase 3" />} des="This is where the magic happens! Based on the approved design, 
                    I'll translate everything into functional code, building your website from the ground up.">
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-sky-600"
                            colors={[[125, 211, 252]]}
                        />
                    </Card>
                </div>
            </div>
        </div>
    )
}


export default Approach