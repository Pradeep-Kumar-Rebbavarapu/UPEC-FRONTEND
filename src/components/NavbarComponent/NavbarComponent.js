
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NavbarComponent() {
  return (
    <div>
        <nav className="fixed w-full h-20 bg-white shadow-xl">
            <div className="container flex items-center justify-between h-full px-6 mx-auto">
                <div className='flex item-center'>
                    <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={100} height={40}/>
                    </Link>
                    <div>
                        <ul className='hidden sm:flex'>
                            <Link href="/">
                                <li className='ml-6 text-lg cursor-pointer text-neutral-500 hover:text-blue-400 hover:font-medium'>Discover</li>
                            </Link>
                            <Link href="/">
                                <li className='ml-6 text-lg cursor-pointer text-neutral-500  hover:text-blue-400 hover:font-medium'>Projects</li>
                            </Link>
                            <Link href="/">
                                <li className='ml-6 text-lg cursor-pointer text-neutral-500  hover:text-blue-400 hover:font-medium'>Communicate</li>
                            </Link>
                            <Link href="/">
                                <li className='ml-6 text-lg cursor-pointer text-neutral-500  hover:text-blue-400 hover:font-medium'>AI Assistance</li>
                            </Link>
                        </ul>
                    </div>

                </div>
                <div className='flex items-center'>
                    {/* If logged in */}
                    {/* <Link href="/">
                        <button className='px-6 py-2 mr-6 text-lg text-white bg-blue-500 rounded-full hover:bg-blue-600'>Login</button>
                    </Link>
                    <Link href="/">
                        <button className='px-6 py-2 text-lg text-white bg-blue-500 rounded-full hover:bg-blue-600'>Sign Up</button>
                    </Link> */}

                    {/* Signed In User with user icon and name*/}
                    <div className='flex items-center'>
                        {/* react icon to show user avator */}
                        <div className='w-10 h-10 bg-red-300 rounded-full flex items-center justify-center'>
                            <span className='text-white'>JD</span>
                        </div>
                        <p className='ml-2 text-lg text-neutral-500'>John Doe</p>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
