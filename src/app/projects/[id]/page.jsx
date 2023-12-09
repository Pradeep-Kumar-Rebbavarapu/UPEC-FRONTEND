'use client'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React from 'react'
import axios from 'axios'
import EachProjectCard from '@/components/ProjectPageComponents/EachProjectCard'
import WorkflowCard from '@/components/ProjectPageComponents/WorkflowCard'
import parse from 'html-react-parser';
export default function EachProject({ params }) {
    console.log(params)
    const router = useRouter()
    console.log(router)
    const EachProject = useQuery({
        queryKey: ["EachProject"],
        queryFn: () => {
            return fetchEachProject(params.id)
        }
    })
    console.log(EachProject)
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <EachProjectCard ele={EachProject?.data}/>
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{EachProject?.data?.title}
                        </h1>
                        <p class="mb-8 leading-relaxed">{EachProject?.data?.description}</p>
                        <div class="flex justify-center">
                            {EachProject?.data?.workflow==null && (
                                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>{
                                }}>Generate Workflow</button>
                            )}
                            {(EachProject?.data?.Learning_resources==null | EachProject?.data?.Learning_resources?.length===0) && (
                                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Generate Learning Resources</button>
                            )}
                            
                        </div>
                    </div>
                    
                </div>
                <div className='mx-10 my-10 text-black'>
                    <h1 className='text-center font-bold text-black my-10 text-3xl'>Workflow For Talents</h1>
                        {parse(EachProject.data?EachProject?.data?.workflow?.description:"")}
                </div>

                <div className='mx-10 my-10 text-black'>
                    <h1 className='text-center font-bold text-black my-10 text-3xl'>Learning Resources For Talents</h1>
                    <div id="learning_resources">
                        {parse(EachProject.data?EachProject?.data?.Learning_resources:"")}
                    </div>
                </div>

                <div className='mx-10 my-10 text-black'>
                    <h1 className='text-center font-bold text-black my-10 text-3xl'>Project Management for Talents</h1>
                        {parse(EachProject.data?EachProject?.data?.workflow?.description:"")}
                </div>
            </section>
            <style jsx>
                {`
                 #learning_resources  a{
                    color:blue;
                    margin:10px 10px;
                 }
                `}
            </style>
        </div>
    )
}


const fetchEachProject = async (id) =>{
    return axios.get(`http://127.0.0.1:8000/api/v1/__get__each__project__/${id}`).then((response)=>{
        return response.data
    }).catch((error)=>{
        return []
    })
}