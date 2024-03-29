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


export interface projectTheme {
    theme: ['bg-slate-100', 'text-gray-900',  'shadow-black', 'border-black']|['dark:bg-gray-900', 'dark:text-white', 'shadow-white', 'border-white']
}


const useDarkSide:()=>[mainTheme['theme'], Dispatch<SetStateAction<mainTheme['theme']>>] = () => {


    // const [theme, setTheme] = useState<mainTheme['theme']>(null as unknown as mainTheme['theme']);
    // const [theme, setTheme] = useState<mainTheme['theme']>((typeof window !== 'undefined') ? localStorage.getItem('theme') as mainTheme['theme'] : 'dark');
    const [theme, setTheme] = useState<mainTheme['theme']>((typeof window !== 'undefined') && localStorage.getItem('theme') as mainTheme['theme'] ?  localStorage.getItem('theme') as mainTheme['theme']: 'dark');
    
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

    const projectTheme = useMemo(():projectTheme['theme'][] => {
        if (theme === 'dark'){
            return [['bg-slate-100', 'text-gray-900',  'shadow-black', 'border-black'], ['dark:bg-gray-900', 'dark:text-white', 'shadow-white', 'border-white']]
        } else {
            return [['dark:bg-gray-900', 'dark:text-white', 'shadow-white', 'border-white'], ['bg-slate-100', 'text-gray-900',  'shadow-black', 'border-black']]
        }
    }, [theme]);






    useEffect(()=>{
        const root = window.document.documentElement.getElementsByTagName('body')[0];
        const header = window.document.documentElement.getElementsByClassName('header')[0];
        const projects = window.document.documentElement.getElementsByClassName('project');        
        root.classList.remove(...colorTheme[0]);
        header.classList.remove(...headerTheme[0]);
        for (let i=0; i<projects.length; i++){
            projects[i].classList.remove(...projectTheme[0]);
        };
        root.classList.add(...colorTheme[1]);
        header.classList.add(...headerTheme[1]);
        for (let i=0; i<projects.length; i++){
            projects[i].classList.add(...projectTheme[1]);
        };
        localStorage.setItem('theme', theme);
        // console.log('theme: ', theme, 'colorTheme: ', colorTheme[1]);
    }, [theme, colorTheme, headerTheme, projectTheme]);


    

    return [theme, setTheme];
};



export default useDarkSide;