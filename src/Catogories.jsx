import React from 'react'

const Catogories = ({categories,filterItems}) => {
  return (

    <div className='btn-container'>

        {categories.map((catogory,index)=>{
            const currIndex=index;
           

            return <button key={catogory} className='btn' onClick={()=>filterItems(catogory)}>{catogory}</button>
        })}
      
    </div>
  )
}

export default Catogories
