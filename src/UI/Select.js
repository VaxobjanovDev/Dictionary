import React from 'react'

const Select = ({options, defaultValue, handleChange,value}) => {
    return (
        <select value={value} onChange={e=>handleChange(e.target.value)} className="form-select mt-2 w-50">
          <option  defaultValue>{defaultValue}</option>
          {options.map((option)=>{
              return <option value={option.label}>{option.value}</option>
          })}
        </select>
    )
}

export default Select
