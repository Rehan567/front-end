import React from 'react'
import Topic from '../topic/Topic'
import "./All.scss"
const All = ({ topics, setTopics }) => {
    return (
        <div className='All'>
            <div className='rec'>
                <h3>Recommended Topics </h3>
            </div>
            {
                topics.map(({ id, title, keyword, category }) => {

                    return <Topic id={id}  title={title} topics={topics} setTopics={setTopics} keywords={keyword} key={id}></Topic>

                })
            }
        </div>

    )
}

export default All