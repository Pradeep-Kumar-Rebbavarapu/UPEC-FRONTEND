"use client";
import Link from 'next/link';
import React from 'react'
import { useState } from 'react'

export default function PostCard(){
  const [name, setName] = useState("John Doe");
  const [image, setImage] = useState("https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp");
  const [tagline, setTagline] = useState("Web Developer");
  const [postHeading, setPostHeading] = useState("Web Design templates Selection")
  const [postDescription, setPostDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua")
  const [tags, setTags] = useState(["#WebDevelopment"])
  return (
<article className="my-5 break-inside rounded-md bg-white flex flex-col bg-clip-border shadow-xl text-[#5E5873] h-max w-full sm:w-[90%] mx-auto">
        <div className="flex items-center p-3 justify-between bg-white rounded-t-md">
          <div className="flex">
            <Link className="inline-block" href="#">
              <img className="rounded-full max-w-none w-12 h-12 xl:w-16 xl:h-16" src={image}/>
            </Link>
            <div className="flex flex-col mx-2 justify-center">
              <div className="flex">
                <a className="inline-block lg:text-lg sm:text-sm text-xs font-bold" href="#">{name}</a>
              </div>
              <div className="text-slate-500">
                {tagline}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center">
            <Link className="flex" href="#">
              <img className="max-w-full rounded-l-lg"
                src="DanielKim_0-1650897476639.png" />
            </Link>
          </div>
        </div>
        <h2 className=" text-md xs:text-lg sm:text-2xl xl:text-3xl font-bold m-5">
          {postHeading}
        </h2>
        <div className="mx-5">
          <p>
            {postDescription}
          </p>
        </div>
        <div className="p-2 sm:p-4 flex flex-wrap items-center">
          <span className="bg-[#EBF5FB] xl:px-5 p-1 sm:py-2 sm:px-2 rounded-full m-1 sm:m-2 text-xs xl:text-sm">
              {tags}
          </span>
          <span className="bg-[#EBF5FB] xl:px-5 p-1 sm:py-2 sm:px-2 rounded-full m-1 sm:m-2 text-xs xl:text-sm">
              {tags}
          </span>
          <span className="bg-[#EBF5FB] xl:px-5 p-1 sm:py-2 sm:px-2 rounded-full m-1 sm:m-2 text-xs xl:text-sm">
              {tags}
          </span>
          <span className="bg-[#EBF5FB] xl:px-5 p-1 sm:py-2 sm:px-2 rounded-full m-1 sm:m-2 text-xs xl:text-sm">
              {tags}
          </span>
          <span className="bg-[#EBF5FB] xl:px-5 p-1 sm:py-2 sm:px-2 rounded-full m-1 sm:m-2 text-xs xl:text-sm">
              {tags}
          </span>
          <span className="bg-[#EBF5FB] xl:px-5 p-1 sm:py-2 sm:px-2 rounded-full m-1 sm:m-2 text-xs xl:text-sm">
              {tags}
          </span>
        </div>
      </article>
  )
}
