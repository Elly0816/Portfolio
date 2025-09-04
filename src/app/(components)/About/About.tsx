"use client";
import { Shrikhand, Catamaran } from "next/font/google";
import { Fragment } from "react";
import classes from "./about.module.css";

const shrik = Shrikhand({
    subsets: ["latin"],
    weight: "400",
    style: "normal",
});

const cat = Catamaran({
    subsets: ["latin"],
    weight: "600",
    style: "normal",
});

const About: React.FC = () => {
    return (
        <Fragment>
            <div
                id="about"
                className={`${shrik.className} ${classes.about} md:text-6xl text-2xl flex flex-col items-center justify-center py-20 px-7`}
            >
                <div>
                    <h1>About Me</h1>
                </div>

                <div
                    className={`${cat.className} md:text-2xl text-sm w-2/3 text-start py-10`}
                >
                    <p>
                        I&apos;m passionate about solving real-world problems
                        through technology. With experience in HTML, CSS,
                        JavaScript, React.
                        {/* Node.js, Python, and MongoDB,  */} I create digital
                        experiences that are both functional and delightful. I
                        believe in writing scalable code, learning continuously,
                        and collaborating with others to build meaningful
                        products. When I&apos;m not coding, I&apos;m probably
                        exploring new frameworks or leveling up my skills
                        through courses and challenges.
                    </p>
                </div>
            </div>
            <hr />
        </Fragment>
    );
};

export default About;
