import ProfileCard from "@/components/HomePageComponents/ProfileCard"
import PostCard from "@/components/HomePageComponents/PostCard"
import RecentChatCard from "@/components/HomePageComponents/recentChatCard"
import RecentEvents from "@/components/HomePageComponents/RecentEvents"

export default function Home() {
  return (
    <div className="flex flex-row p-5 h-screen">
      <ProfileCard/>
      <div className="flex flex-col w-max">
      <PostCard/>
      <PostCard/>
      <PostCard/>
      </div>
      <div className="flex flex-col basis-2/5 justify-center items-center">
          <RecentEvents/>
          <RecentChatCard/>
      </div>
    </div>
  )
}
