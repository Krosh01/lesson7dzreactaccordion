import React, { useContext, useState } from 'react'
import { CustomContext } from '../../../utils/context'

const SideBarItem = ({text, value}) => {

  const [show, ShowState] = useState(false)

  const {category, changeCategory} = useContext(CustomContext)

  return (
    <li className='sideBar__menu__lead'>
      <div className='sideBar__menu__lead-block'>
      <p onClick={() => changeCategory(value)} className={`sideBar__menu-item ${category === text ? 'active' : ''}`}>{text}</p>
      <span onClick={() => ShowState(!show)} className={show ? 'sideBar__menu-accordion' : 'sideBar__menu-accordion-active'}>{show ? '-' : '+'}</span>
      </div>
      { show && <p className='sideBar__menu-show'>lorem</p>}
      { show && <p className='sideBar__menu-show'>lorem</p>}
      { show && <p className='sideBar__menu-show'>lorem</p>}
      { show && <p className='sideBar__menu-show'>lorem</p>}
      { show && <p className='sideBar__menu-show'>lorem</p>}
    </li>
    
  )
}

export default SideBarItem