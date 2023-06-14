import React from 'react'
import Topic from '../topic/Topic'
import "./Icp.scss"
const Icp = ({ topics, setTopics }) => {
    return (
        <div className='Icp'>
            <div className='rec'>
                <h3>Recommended Topics </h3>
            </div>
            {
                topics.map(({ id, title, keyword, category }) => {
                    if (category === "icp") {
                        return <Topic id={id} title={title} topics={topics} setTopics={setTopics} keywords={keyword} key={id}></Topic>
                    }
                })
            }
        </div>

    )
}

export default Icp