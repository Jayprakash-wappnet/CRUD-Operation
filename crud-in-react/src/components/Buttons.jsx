import React from 'react'

const Buttons = ({onClick, children}) => {
  return (
    <div>
      <button className='bg-indigo-700 text-white py-2 px-6 my-10 rounded hover:bg-indigo-300' onClick={onClick}>{children}</button>
    </div>
  )
}

export default Buttons
