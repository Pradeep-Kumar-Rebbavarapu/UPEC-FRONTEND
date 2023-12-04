import React from 'react'

export default function ProjectCard() {
  return (
<div className="bg-white rounded-md shadow-lg m-4">
      <div className="md:flex px-4 max-w-4xl">
        <div className="flex-col text-[#414141] m-4">
            <span className='bg-[#28C76F] bg-opacity-10 text-[#28C76F] px-3 py-2 rounded-xl font-bold'>Open Listing</span>
          <p className="pt-4 text-2xl font-bold">Building a PEP LLM</p>
          <div className="text-md flex justify-start my-1">
            <div className="mr-2">Variable Price</div>
            <div className="mr-2">United States</div>
            <div className="mr-2">Posted 7 days ago</div>
          </div>
          <p className="hidden md:block pr-4 my-4 text-sm text-left">The project is to develop a preliminary LLM that specifically identifies Politically-Exposed- People (PEPs) and develops the basic data fields relating to a PEP.</p>
          <div className="py-3 sm:py-4 flex">
            <div className="flex items-center gap-2">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="Neil image"/>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-[#5E5873] truncate">
                        John Doe
                    </p>
                    <p className="text-sm text-[#5E5873] truncate">
                        Johndoe@gmail.com
                    </p>
                </div>
                <div class="flex items-center bg-[#FFEDE0] p-2 rounded-lg">
                    <svg class="w-4 h-4 text-[#FF9F43] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <p class="ms-2 text-sm font-bold text-[#928F8B]">4.95</p>
                </div>
            </div>
        </div>
        <div className="text-bold">
            Skills
            <div className="flex gap-x-2">
                <div className="bg-[#E3F2FD] text-[#3EA4F4] font-normal py-1 px-2 rounded-lg">Machine Learning</div>
                <div className="bg-[#E3F2FD] text-[#3EA4F4] font-normal py-1 px-2 rounded-lg">AI Engineering</div>
            </div>
        </div>
        </div>
      </div>        
    </div>
  )
}
