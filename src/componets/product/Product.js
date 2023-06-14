import React from 'react'
import "./Product.scss"
import Topic from '../topic/Topic'
const Product = ({ topics, setTopics }) => {
    return (
        <div className='Product'>
            <div className='rec'>
                <h3>Recommended Topics </h3>
            </div>
            {
                topics.map(({ id, title, keyword, category }) => {
                    if (category === "product") {
                        return <Topic id={id} title={title} topics={topics} setTopics={setTopics} keywords={keyword} key={id}></Topic>
                    }
                })
            }
        </div>

    )
}

export default Product