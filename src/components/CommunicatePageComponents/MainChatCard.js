"use client";
import React from 'react'
import { useState } from 'react';
import SenderChatCard from './SenderChatCard';
import RecieverChatCard from './RecieverChatCard';

export default function MainChatCard() {
  return (
    <div className='border border-gray-200 bg-white w-3/4 h-screen'>
        <div className="w-full flex items-start justify-start p-2 border border-gray-200">
            <img src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="" className="w-16 h-16 rounded-full" />
            <div className="flex flex-col px-4 justify-center items-start text-gray-600">
                <h2 className="text-xl">Ronie Ray</h2>
                <h3 className="text-lg">Last active at: 3rd Nov 2023, 7:08PM</h3>
            </div>
        </div>
        <div className="h-full">
            <SenderChatCard/>
            <RecieverChatCard/>
            <SenderChatCard/>
        </div>
        <div className="flex justify-center items-center border border-gray-200 p-4">
            <div className="mx-4 border border-gray-200 h-10 w-full rounded-lg"></div>
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17.5" cy="17.5" r="16.5" fill="#FDFDFD" stroke="#00B2FF" stroke-width="2"/>
            <path d="M18.7071 7.29289C18.3166 6.90237 17.6834 6.90237 17.2929 7.29289L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18 9.41421L23.6569 15.0711C24.0474 15.4616 24.6805 15.4616 25.0711 15.0711C25.4616 14.6805 25.4616 14.0474 25.0711 13.6569L18.7071 7.29289ZM19 28V8H17V28H19Z" fill="#00B2FF"/>
            </svg>
        </div>
    </div>
  )
}
