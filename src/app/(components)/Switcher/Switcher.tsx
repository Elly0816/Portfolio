'use client';

import classes from './Switcher.module.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from '@/app/(hooks)/useDarkSide/useDarkSide';
import { useEffect, useState } from 'react';
import {type mainTheme} from '@/app/(hooks)/useDarkSide/useDarkSide';


const Switcher:React.FC = () => {

    const [theme, setTheme] = useDarkSide();

    const [darkSide, setDarkSide] = useState(theme === 'dark' ? true : false
    );


    const toggleDarkMode = (checked:boolean) => {
        setTheme((value)=>{
            return value === 'light' ? 'dark' : 'light'
        });
        setDarkSide(checked);
    };

    

    return <div title={darkSide ? 'Click for light mode' : 'Click for dark mode'}>
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={30}
            />
        </div>


}


export default Switcher;