import { Shrikhand, Catamaran } from "next/font/google";
import { Fragment } from "react";
import classes from './Intro.module.css';
import Link from 'next/link';
import Image from 'next/image';
//Introduce yourself 

const shrik = Shrikhand({ 
    subsets: ['latin'],
    weight: '400',
    style: 'normal'
});

const cat = Catamaran({
    subsets:['latin'],
    weight: '600',
    style: 'normal',
});

const dimensions:number = 50;

const Intro:React.FC = () => {
    // console.log(cat.className);
    // text-sm __className_bc5e37
    

    return <Fragment>
                <div id="intro" className={`${shrik.className} ${classes.intro} ${' '}text-start md:text-6xl subpixel-antialiased px-7 py-20 text-2xl flex items-center justify-center`}>
                    <div>
                        <h1>Hi!</h1>
                        <h3>{'\n'}</h3>
                        <h1>{"I'm Eleazar Udo"}</h1>
                        <h3>{'\n'}</h3>
                        <div className={`py-5 ${cat.className} text-sm md:text-xl`}>
                            <h3>{`A full-stack web developer and software engineer`}</h3>
                            <h3>{'\n'}</h3>
                            <h3>{`I create websites and applications that are fast, responsive and user-friendly.`}</h3>
                            <h3>{'\n'}</h3>
                            <h3>{`I work with technologies like HTML, CSS, TypeScript, React, Node.js, Python, MongoDB and more`}</h3>
                            <h3>{'\n'}</h3>
                            <h3>{`If you're looking for a reliable and skilled developer to work with,`}</h3>
                            <h3>{'\n'}</h3>
                            <h3>{`feel free to check out my portfolio or get in touch with me.`}</h3>
                        </div>
                        <div className={`flex flex-row text-current`}>
                            <Link title="Eleazar's Github" className="mx-3" href={"https://www.github.com/Elly0816"} about="Link to Eleazar's github">
                                <Image src={"/github.png"} alt={"Eleazar's Github link"} width={dimensions} height={dimensions}></Image>
                            </Link>
                            <Link title="Eleazar's linkedIn" className="mx-3" href={"https://www.linkedin.com/in/eleazarudo/"} about="Link to Eleazar's linkedin">
                                <Image src={"/linkedin.png"} alt={"Eleazar's LinkedIn link"} width={dimensions} height={dimensions}></Image>
                            </Link>
                            <Link title="Eleazar's Twitter" className="mx-3" href={"https://www.twitter.com/elly0x"}  about="Link to Eleazar's twitter">
                                <Image src={"/twitter.png"} alt={"Eleazar's Twitter link"} width={dimensions} height={dimensions}></Image>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr />

            </Fragment> 
    
    
}



export default Intro;