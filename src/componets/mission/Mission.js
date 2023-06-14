import React, { useEffect, useState } from 'react'
import Topic from '../topic/Topic.js'
import "./Mission.scss"

const Mission = ({ topics, setTopics }) => {
  console.log("mision");
  
  // useEffect(() => {
  //   console.log("topic changed", topics);
    
  // }, [topics])
  return (
    <div className='Mission'>
      <div className='rec'>
        <h3>Recommended Topics </h3>
      </div>
      {
        topics.map(({ id, title, keyword, category }) => {
          if (category === "mission") {
            return <Topic id={id} title={title} topics={topics} setTopics={setTopics} keywords={keyword} key={id}></Topic>
          }
        })
      }
    </div>

  )
}

export default Mission