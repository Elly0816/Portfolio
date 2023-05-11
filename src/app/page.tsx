import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment } from 'react';
import Intro from './(components)/Intro/Intro';
import Projects from './(components)/Projects/Projects';
import Contact from './(components)/Contact/Contact';
import Footer from './(components)/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });



const Home:React.FC = ()=>{


  return <Fragment>
          <Intro/>
          <Projects/>
          <Contact/>
          <Footer/>
        </Fragment>
}

export default Home;