import React, { useState } from 'react'
import "./SelectTone.scss"
import { useParams } from 'react-router-dom'
import icon from "../assets/image.png"


const SelectTone = ({ setTopics, topics }) => {
    const params = useParams()
    const i = topics.findIndex((topic) => {
        return topic.id === params.id
    })
    const [data, setData] = useState(topics[i])

    const handelOnChange = (e) => {
        setData((pre) => {
            return {
                ...pre,
                tone: e.target.value
            }
        })
    }
    const handelContent = (e) => {
        setData((pre) => {
            return {
                ...pre,
                content: e.target.value
            }
        })
    }
    const handelFile = (e) => {
        const file = e.target.files[0]
        const b = new FileReader()
        b.readAsDataURL(file)
        b.onload = () => {

            setData((pre) => {
                return {
                    ...pre,
                    img: b.result
                }
            })
        }
    }
    const handelOnSubmit = (e) => {
        e.preventDefault()
        console.log(data);
        topics.splice(i, 1, data)
        let arr = [...topics]
        setTopics(arr)
    }
    return (


        <div className='SelectTone'>
            <div className='container'>
                <form onSubmit={(e) => handelOnSubmit(e)}>
                    <textarea type="text" value={data.content} placeholder={`write your ${data.tone}`} onChange={(e) => handelContent(e)} />
                    <select name="tone" id="tone" value={data.tone} onChange={(e) => handelOnChange(e)}>
                        {/* <option value="" disabled selected hidden>Choose</option> */}
                        <option value="Informative">Informative</option>
                        <option value="Persuasive">Persuasive</option>
                        <option value="inspirational">inspirational</option>
                    </select>
                    <label htmlFor="img" className='img'> <h5>Add Image</h5><img src={icon}></img></label>

                    <input type="file" accept='image/*' id='img' onChange={(e) => handelFile(e)} />
                    <button className='submit'>Generate</button>
                </form>
            </div>

            {
                data.img ? <img src={data.img} className='outside-img'></img> : null
            }
        </div>

    )
}

export default SelectTone