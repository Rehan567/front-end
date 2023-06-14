import React, { useState } from 'react'
import { MuiChipsInput } from 'mui-chips-input'
import nextId from "react-id-generator";
import "./ADDTOPICS.scss"

const ADDTOPICS = ({ setTopics }) => {

    const [formData, setFormData] = useState(
        {
            id: "",
            title: "",
            keyword: [],
            category: "custom",
            content: "",
            tone: "",
            img: ""
        }
    )

    const handelField = (e) => {

        setFormData((pre) => {
            return {
                ...pre,
                [e.target.name]: e.target.value,

            }
        })
    }
    const handelOnSubmit = (e) => {
        e.preventDefault()
        //workspace
        setTopics((pre) => {
            return [
                ...pre,
                {
                    ...formData,
                    id: nextId()
                },

            ]
        })
        console.log(formData);

        setFormData({
            id: "",
            title: "",
            keyword: [],
            category: "custom"
        })



    }
    const handleChange = (newChips) => {
        setFormData((pre) => {
            return {
                ...pre,
                keyword: newChips
            }
        })

    }
    return (
        <div className='ADDTOPICS'>
            <div className="container">
                <form onSubmit={(e) => handelOnSubmit(e)}>
                    <label htmlFor="titel">Title</label>
                    <input name="title" id='titel' value={formData.title} type="text" placeholder='Enter title' onChange={(e) => handelField(e)} />
                    <label className='mar' htmlFor="keywords">KeyWords</label>
                    {/* css -ye bilkul bekar dikh raha h */}
                    <MuiChipsInput id='keywords' value={formData.keyword} onChange={(newChips) => handleChange(newChips)} />
                    <button className='button'>Submit</button>
                </form>
            </div>

        </div >
    )
}

export default ADDTOPICS