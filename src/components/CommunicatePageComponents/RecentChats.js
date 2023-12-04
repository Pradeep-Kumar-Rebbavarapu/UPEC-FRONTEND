"use client";
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
export default function RecentChats() {
    
    const [recentEvents, setRecentEvents] = useState([
        { event: "Dev Hackathon", date: new Date(2023, 11, 3) }, 
        { event: "Enosium Hackathon", date: new Date(2023, 11, 3) },
        { event: "Inter IIT'23", date: new Date(2023, 11, 3) },
      ]);
      
  return (
    <div className='bg-white p-2 border border-gray-200 w-1/4'>
      <div className="w-full flex border border-gray-200 p-2">
        <img src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="" className="w-16 h-16 rounded-full mx-auto" />
        <div className="border border-gray-200 flex rounded-full px-4 justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.6 3 4 10.6 4 20 C 4 29.4 11.6 37 21 37 C 24.354553 37 27.47104 36.01984 30.103516 34.347656 L 42.378906 46.621094 L 46.621094 42.378906 L 34.523438 30.279297 C 36.695733 27.423994 38 23.870646 38 20 C 38 10.6 30.4 3 21 3 z M 21 7 C 28.2 7 34 12.8 34 20 C 34 27.2 28.2 33 21 33 C 13.8 33 8 27.2 8 20 C 8 12.8 13.8 7 21 7 z"></path>
            </svg>
                Search or start a new chat
        </div>
      </div>
      <div className="border border-gray-200">
      <div className="w-full max-w-md p-4 bg-white text-[#5E5873]">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-[#5E5873]">Direct Chat</h5>
                <Link href="#" className="text-sm font-medium text-[#0075FF] hover:underline">
                    View all
                </Link>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                    {recentEvents.map((item) => (
                    <li className="py-2">
                        <div className="flex items-center">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-md font-medium text-[#5E5873] truncate hover:text-[#0075FF] hover:underline">
                                    {item.event}
                                </p>
                                <p className="text-md text-[#5E5873] truncate">
                                    {item.date.toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </li>))}
                </ul>
            </div>
        </div>
        <div className="w-full max-w-md p-4 bg-white text-[#5E5873]">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-[#5E5873]">Project Chat</h5>
                <Link href="#" className="text-sm font-medium text-[#0075FF] hover:underline">
                    View all
                </Link>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                    {recentEvents.map((item) => (
                    <li className="py-2">
                        <div className="flex items-center">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-md font-medium text-[#5E5873] truncate hover:text-[#0075FF] hover:underline">
                                    {item.event}
                                </p>
                                <p className="text-md text-[#5E5873] truncate">
                                    {item.date.toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </li>))}
                </ul>
            </div>
        </div>
        <div className="w-full max-w-md p-4 bg-white text-[#5E5873]">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-[#5E5873]">Group Chat</h5>
                <Link href="#" className="text-sm font-medium text-[#0075FF] hover:underline">
                    View all
                </Link>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                    {recentEvents.map((item) => (
                    <li className="py-2">
                        <div className="flex items-center">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-md font-medium text-[#5E5873] truncate hover:text-[#0075FF] hover:underline">
                                    {item.event}
                                </p>
                                <p className="text-md text-[#5E5873] truncate">
                                    {item.date.toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </li>))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}
