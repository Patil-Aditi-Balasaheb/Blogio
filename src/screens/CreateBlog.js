import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function CreateBlog() {

    const history = new useHistory()

    // function states
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    const url = "https://floran-blog-api.herokuapp.com/"

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    let publishBlog = async () => {
        let formData = new FormData()
        
        if(title !== "" && content !== "" && image !== "null") {
            // console.log(title)
            // console.log(content)
            // console.log(image)

            formData.append("title", title)     // append(key, value)
            formData.append("description", content)
            formData.append("image", image)

            await axios.post(url, formData, config).then(
                (res) => {
                    // console.log("Data uploaded successfully")
                    // console.log(res)
                    console.log(res)
                    setTitle("")
                    setContent("")
                    setImage(null)

                    history.push("/")
                }
            ).catch(
                err => console.log(err)
            )

        } else {
            alert("Fill the data properly")
        }
    }

    return (    
        <div className="container mx-auto mt-5">
            <div className="row">
                <div className="float-end">
                    <button className='btn btn-outline-dark' onClick={publishBlog}>Publish</button>
                </div>
                <div className="col-12 mt-4">
                    <h4>Image</h4>
                </div>
                <div className="col-12">
                    <input type="file" accept='image/*' className='form-control shadow-none' onChange={(e) => setImage(e.target.files[0])}/>
                </div>
                <div className="col-12 mt-4">
                    <h4>Title</h4>
                </div>
                <div className="col-12">
                    <input type="text" placeholder='Write Title here' className='form-control shadow-none' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="col-12 mt-4">
                    <h4>Content</h4>
                </div>
                <div className="col-12 mb-5">
                    <textarea id="blog" placeholder='Write Content here' className='form-control shadow-none' rows="3" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog
