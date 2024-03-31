import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div 
    style={{backgroundImage: 'url(/bg-4.jpg)'}}
    className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
        {Projects.map((project,index) => ( 
          <ProjectCard key={index} image={project.src} title={project.title} text={project.text} link={project.link}/>
          ))}
      </div>
    </div>
  )
}

export default Page
