'use client';

import classes from './Switcher.module.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from '@/app/(hooks)/useDarkSide/useDarkSide';
import { useEffect, useState } from 'react';
import {type mainTheme} from '@/app/(hooks)/useDarkSide/useDarkSide';


const Switcher:React.FC = () => {

    const [theme, setTheme] = useDarkSide();

    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);


    const toggleDarkMode = (checked:boolean) => {
        setTheme((value)=>{
            return value === 'light' ? 'dark' : 'light'
        });
        setIsDarkMode(checked);
    };

    useEffect(()=>{
        if (theme === 'dark'){
            setIsDarkMode(true)
        } else {
            setIsDarkMode(false);
        }
    }, [theme]);

    

    return <div title={isDarkMode ? 'Click for light mode' : 'Click for dark mode'}>
            <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={30}
            />
        </div>


}


export default Switcher;