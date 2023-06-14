import React from 'react'
import Topic from '../topic/Topic.js'
import "./Custom.scss"
const Custom = ({ topics, setTopics }) => {
    return (
        <div className='Custom'>
            <div className='rec'>
                <h3>Recommended Topics </h3>
            </div>
            {
                topics.map(({ id, title, keyword, category }) => {
                    if (category === "custom") {
                        return <Topic id={id} title={title} topics={topics} setTopics={setTopics} keywords={keyword} key={id}></Topic>
                    }
                })
            }
        </div>

    )
}

export default Custom