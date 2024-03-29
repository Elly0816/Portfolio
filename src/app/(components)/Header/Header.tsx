'use client';

import { ReactElement, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import classes from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {type navItem, staticNav} from "@/app/(utilities)/NavItems";



function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({Switcher}:{Switcher:React.FC}):ReactElement {

    const [navigation, setNavigation] = useState<navItem[]>(staticNav);

  

    function navSelect(item:navItem|undefined = undefined){
        if (item){
            const newNav = navigation.map((thing)=>{
                if (thing.name === item.name){
                    thing.current = true;
                } else {
                    thing.current = false;
                }
                return thing;
            });
            setNavigation(newNav);
        } else {
            const newNav = navigation.map((thing)=>{
                thing.current = false;
                return thing;
            });
            setNavigation(newNav);
        }
    }


  return (
    <Disclosure as="nav" className={`bg-gray-800 header fixed top-0 right-0 left-0 z-50`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                    <button title='intro'>
                      <Link href={'/#intro'}
                        onClick={()=>{
                            navSelect();
                        }}
                      >
                        <Image
                            className="h-8 w-auto lg:block"
                            src="/Logo.png"
                            alt="Your Company"
                            width={300}
                            height={200}
                            />
                      </Link>
                    </button>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        onClick={()=>{
                            navSelect(item);
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
                  {/* <div className=''> */}
                    <Switcher/>
                  {/* </div> */}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  onClick={()=>{
                    navSelect(item);
                  }}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
