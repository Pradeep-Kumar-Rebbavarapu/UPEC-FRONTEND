"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';

export default function ProfileCard() {
    const [name, setName] = useState("John Doe");
    const [image, setImage] = useState("https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp");
    const [tagline, setTagline] = useState("Web Developer");
    const [rating, setRating] = useState(4.95)
    const [institute, setInstitute] = useState("Indian Institute of Technology")
    const [mobile_no, setMobile_no] = useState("+977 9955221114")
    const [email, setEmail] = useState("john@exmaple.com")
    const [skill, setSkill] = useState(["HTML ","CSS ","JavaScript "])
  return (
<div className="">

</div>
  )
}