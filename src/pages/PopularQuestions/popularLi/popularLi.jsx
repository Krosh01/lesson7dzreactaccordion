import React, { useState } from 'react'

const PopularLi = ({item}) => {

    const [show, showState] = useState(false)

  return (
    <li className='popualarQue__content_first-accordion_item'>
        <h2 className='popualarQue__content_first-accordion_title'>{item.title} <span className={show ? 'popualarQue__content_first-accordion_minus' : 'popualarQue__content_first-accordion_plus' } onClick={() => {showState(!show)}}>{show ? '-' : '+'}</span></h2>
        {show && <p className='popualarQue__content_first-accordion_p'>
            {item.content}
        </p>}
    </li>
  )
}

export default PopularLi