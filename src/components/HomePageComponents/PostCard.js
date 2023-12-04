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
<article className="=xmb-4 m-5 break-inside rounded-md bg-white flex flex-col bg-clip-border shadow-xl basis-1/2 text-[#5E5873] h-full">
        <div className="flex items-center p-3 justify-between bg-white rounded-t-md">
          <div className="flex">
            <Link className="inline-block mr-4" href="#">
              <img className="rounded-full max-w-none w-14 h-14" src={image}/>
            </Link>
            <div className="flex flex-col">
              <div className="flex items-center">
                <a className="inline-block text-lg font-bold mr-2" href="#">{name}</a>
              </div>
              <div className="text-slate-500">
                {tagline}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between">
            <Link className="flex" href="#">
              <img className="max-w-full rounded-l-lg"
                src="DanielKim_0-1650897476639.png" />
            </Link>
          </div>
        </div>
        <h2 className="text-3xl font-bold m-5">
          {postHeading}
        </h2>
        <div className="mx-5">
          <p>
            {postDescription}
          </p>
        </div>
        <div className="py-4">
          <Link className="inline-flex items-center" href="#">
            <span className="bg-[#EBF5FB] px-5 py-2 rounded-full mx-2 text-sm">
                {tags}
            </span>
            <span className="bg-[#EBF5FB] px-5 py-2 rounded-full mx-2 text-sm">
                {tags}
            </span>
            <span className="bg-[#EBF5FB] px-5 py-2 rounded-full mx-2 text-sm">
                {tags}
            </span>
          </Link>
        </div>
      </article>
  )
}
