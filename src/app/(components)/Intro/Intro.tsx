'use client'
import { Shrikhand } from "next/font/google";
import { Fragment, useEffect, useRef } from "react";
import Typewriter from 'typewriter-effect';
import classes from 'Intro.module.css';
//Introduce yourself 

const font = Shrikhand({ 
    subsets: ['latin'],
    weight: '400',
    style: 'normal'
});

const Intro:React.FC = () => {
    
    

    return <Fragment>
                <div id="intro" className={`${font.className}${' '} text-6xl subpixel-antialiased px-7 py-7`}>
                    <Typewriter
                        onInit={(typewriter)=>{
                            typewriter.typeString('<h1>Hi!</h1>')
                            .typeString('<h1>\n</h1>')
                            .typeString("<h1>I'm Eleazar</h1>")
                            .typeString('<h1>\n</h1>')
                            .typeString("<h1>You can call me Elly</h1>")
                            .typeString('<h1>\n</h1>')
                            .typeString("<h1>I'm a FullStack Web Developer</h1>")
                            .typeString('<h1>\n</h1>')
                            .pauseFor(2000)
                            .changeDelay('natural')
                            .start();
                        }}
                    />
                </div>
            </Fragment> 
    
    
}



export default Intro;