'use client';

import classes from './useDarkSide.module.css';
import {useState, useEffect, Dispatch, SetStateAction, useMemo} from 'react';


interface Themes {
    theme: ['bg-white', 'text-black']|['dark:bg-black', 'dark:text-white']
}

interface HeaderThemes {
    theme: ['bg-slate-100', 'text-gray-900']|['dark:bg-gray-900', 'dark:text-slate-100']
}

export interface mainTheme {
    theme: 'light' | 'dark'
}


const useDarkSide:()=>[mainTheme['theme'], Dispatch<SetStateAction<mainTheme['theme']>>] = () => {


    // const [theme, setTheme] = useState<mainTheme['theme']>(null as unknown as mainTheme['theme']);
    const [theme, setTheme] = useState<mainTheme['theme']>((typeof window !== 'undefined') ? localStorage.getItem('theme') as mainTheme['theme'] : null as unknown as mainTheme['theme']);
    
    const colorTheme = useMemo(():Themes['theme'][]=>{

        if (theme === 'dark'){
            return [['bg-white', 'text-black'], ['dark:bg-black', 'dark:text-white']];
        } else {
            return [['dark:bg-black', 'dark:text-white'],['bg-white', 'text-black']];
        }
    }, [theme]);

    const headerTheme = useMemo(():HeaderThemes['theme'][]=>{
        if (theme === 'dark'){
            return [['bg-slate-100', 'text-gray-900'], ['dark:bg-gray-900', 'dark:text-slate-100']]
        } else {
            return [['dark:bg-gray-900', 'dark:text-slate-100'], ['bg-slate-100', 'text-gray-900']]
        }
    }, [theme]);





    useEffect(()=>{
        const root = window.document.documentElement.getElementsByTagName('body')[0];
        const header = window.document.documentElement.getElementsByClassName('header')[0];        
        root.classList.remove(...colorTheme[0]);
        header.classList.remove(...headerTheme[0]);
        root.classList.add(...colorTheme[1]);
        header.classList.add(...headerTheme[1]);
        localStorage.setItem('theme', theme);
        // console.log('theme: ', theme, 'colorTheme: ', colorTheme[1]);
    }, [theme, colorTheme, headerTheme]);


    

    return [theme, setTheme];
};



export default useDarkSide;