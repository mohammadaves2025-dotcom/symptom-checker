import React from 'react'

const Concern = ({text1 ,text2}) => {
  return (
    <div className='flex flex-col items-center justify-center '>
      <h1 className='text-xl font-bold'>{text1}</h1>
      <h1 className='text-md mt-3'>{text2}</h1>
    </div>
  )
}

export default Concern
