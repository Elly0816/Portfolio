import Image from "next/image";
import { Inter } from "next/font/google";
// import { Fragment } from "react";
import Intro from "./(components)/Intro/Intro";
import Projects from "./(components)/Projects/Projects";
import Contact from "./(components)/Contact/Contact";
import Footer from "./(components)/Footer/Footer";
import About from "./(components)/About/About";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
    return (
        <>
            <Intro />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
