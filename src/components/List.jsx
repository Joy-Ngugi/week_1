import React from 'react'

function List({data}) {
  return (
    <div>
        <img className="w-full h-96 object-cover" src={data.image.src} alt={data.title}/>
    <div className="p-4">
        <h3 className="text-4xl font-serif  font-bold text-gray-900 mb-2"> {data.title}</h3>
        <p className="text-2xl font-serif" > {data.author}</p>
       
      </div> 
    </div>
  )
}

export default List