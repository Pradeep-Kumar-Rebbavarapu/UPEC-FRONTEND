import React from 'react'
import RecentChats from '@/components/CommunicatePageComponents/RecentChats'
import MainChatCard from '@/components/CommunicatePageComponents/MainChatCard'

export default function Projects() {
  return (
    <div className='bg-[#F7F7F7] text-[#D6DCE8] flex m-5'>
        <RecentChats/>
        <MainChatCard/>
    </div>
  )
}
