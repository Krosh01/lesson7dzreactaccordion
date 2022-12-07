import React from 'react'
import BasicSelect from './select'
import SelectPrice from './selectPrice'

const CatalogFilter = () => {
  return (
    <div className='filter'>
      <div className='filter__select'>
        <BasicSelect/>
      </div>
      <div className='filter__select'>
        <SelectPrice/>
      </div>
      <div className='filter__select'>
        <BasicSelect/>
      </div>
      <div className='filter__select'>
        <BasicSelect/>
      </div>
    </div>
  )
}

export default CatalogFilter