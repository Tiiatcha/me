import React from 'react'
import {TbSchool} from 'react-icons/tb'


const Card = (props) => {
    const {title,data} = props
    const listItems = data.map((item) =>
        <li>{item.school}</li>
    );
  return (
    <div className='bg-white border border-gray-200 rounded-lg p-6'>
        <TbSchool size={40} className='text-blue-400' />
        <h1 className='text-3xl'>{title}</h1>
        <ul>
            {listItems}
        </ul>
    </div>
  )
}

export default Card