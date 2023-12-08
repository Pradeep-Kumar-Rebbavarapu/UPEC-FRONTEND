"use client";
import ProfileCard from "@/components/HomePageComponents/ProfileCard"
import PostCard from "@/components/HomePageComponents/PostCard"
import RecentChatCard from "@/components/HomePageComponents/recentChatCard"
import RecentEvents from "@/components/HomePageComponents/RecentEvents"
import { useEffect, useState } from "react"

// import data.json and use its data to map the postcards

import data from "./data.json"

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getRandomElements = (array, count) => {
  const shuffledArray = shuffleArray([...array]);
  return shuffledArray.slice(0, count);
};

export default function Home() {

  const [randomElements, setRandomElements] = useState([]);

  useEffect(() => {
    setRandomElements(getRandomElements(data, 10));
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleRefresh = () => {
    setRandomElements(getRandomElements(data, 10));
  };

  return (
    <div className="flex flex-row p-2 sm:p-5 h-screen lg:text-md text-xs">
      <ProfileCard/>
      <div className="flex flex-col w-[90%] lg:w-1/2 mx-auto">
        {/* Use any 10 of the posts from the data.json to show random posts where the data is simple array consisting post details in each element*/}
        {randomElements.map((post) => (
          <PostCard key={post.id} post={post}/>
        ))}
      </div>
      <div className="hidden lg:flex flex-col w-1/4 justify-center items-center">
          <RecentEvents/>
          <RecentChatCard/>
      </div>
    </div>
  )
}
