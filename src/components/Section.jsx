import React from 'react'
import SectionEducation from './SectionEducation'
import SectionExperience from './SectionExperience'

const Section = (props) => {
    const {title} = props
  return (
    <div className='max-w-[1280px] mx-auto '>
        <h1 className='text-3xl'>{title}</h1>
        <div className='grid md:grid-flow-col xl:grid-cols-3 xl:grid-rows-1 grid-flow-row grid-rows-3 '>
            
            
        </div>
    </div>
  )
}

export default Section