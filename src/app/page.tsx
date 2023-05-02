import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment } from 'react';
import Intro from './(components)/Intro/Intro';

const inter = Inter({ subsets: ['latin'] });



const Home:React.FC = ()=>{


  return <Fragment>
    <Intro/>
  </Fragment>
}

export default Home;