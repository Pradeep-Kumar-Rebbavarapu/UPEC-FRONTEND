import React from 'react'
import ProjectCard from '@/components/ProjectPageComponents/ProjectCard'

export default function Projects() {
  return (
    <div className='bg-[#F7F7F7] text-[#D6DCE8]'>
      <div className='shadow-lg m-4 p-4 bg-white rounded-md'>
        <h1 className="text-4xl font-bold">Current Projects</h1>
        <div className="flex flex-col items-center justify-start">
          <img src="noDataFoundGif.3a5ff8c8.gif" alt="" />
          <div className="font-bold text-3xl text-[#D6DCE8]">No Projects Yet</div>
        </div>
      </div>
      <div className='shadow-lg m-4 p-4 bg-white rounded-md'>
        <h1 className="text-4xl font-bold">Recommended Projects</h1>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  )
}
