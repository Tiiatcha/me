import React from 'react'

import {CgWorkAlt} from 'react-icons/cg'

const Card = (props) => {
    const {title,data} = props
    const listItems = data.map((item) =>
        <li>Employer: {item.employer} - {item.role}</li>
    );
  return (
    <div className='bg-white border border-gray-200 rounded-lg p-6'>
        <CgWorkAlt size={40} className='text-blue-400' />
        <h1 className='text-3xl'>{title}</h1>
        <ul>
            {listItems}
        </ul>
    </div>
  )
}

export default Card