"use client";
import React from 'react'
import { useState } from 'react';

export default function SenderChatCard() {
  return (
    <div className='flex items-center p-5'>
      <img src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="" className="w-16 h-16 rounded-full" />
      <div className="text-gray-600 p-5 rounded-lg shadow-lg mx-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil sint aliquid assumenda cupiditate doloremque porro ut architecto nemo neque harum, cumque odio dolorum praesentium voluptates et? Assumenda facilis aliquam dolore odio cupiditate quam, fugit nostrum! Aspernatur adipisci laudantium in deserunt blanditiis, odio fugit dolorem atque vitae voluptatem quae! Aliquid, suscipit.</div>
    </div>
  )
}
