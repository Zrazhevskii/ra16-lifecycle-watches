import React from 'react'
import { Watch } from './Watch'
import "./Watch.css"

export const WatchItems = ({ data }) => {
    // console.log(data)
  return (
    <div className='watch-items'>
        {data.map((item) => {
            return <Watch item={item} key={item.title}/>
        })}
    </div>
  )
}
