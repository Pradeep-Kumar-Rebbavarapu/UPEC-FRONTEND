import ProfileCard from "@/components/HomePageComponents/ProfileCard"
import PostCard from "@/components/HomePageComponents/PostCard"
import RecentChatCard from "@/components/HomePageComponents/recentChatCard"
import RecentEvents from "@/components/HomePageComponents/RecentEvents"

export default function Home() {
  return (
    <div className="flex flex-row p-2 sm:p-5 h-screen lg:text-md text-xs">
      <ProfileCard/>
      <div className="flex flex-col w-[90%] lg:w-1/2 mx-auto">
      <PostCard/>
      <PostCard/>
      <PostCard/>
      </div>
      <div className="hidden lg:flex flex-col w-1/4 justify-center items-center">
          <RecentEvents/>
          <RecentChatCard/>
      </div>
    </div>
  )
}
