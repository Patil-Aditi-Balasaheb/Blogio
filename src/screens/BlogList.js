import axios from 'axios';
import React, { useState } from 'react'
import BlogCard from '../component/BlogCard';
import LatestBlog from '../component/LatestBlog'

function BlogList() {

    const [blog, setBlog] = useState("")
    const [latestBlog, setLatestBlog] = useState("")
    
    /*
    const articles = [
        {
            title: "My First Dynamic Card",
            content: "This is dynamic content",
            img: "https://images.unsplash.com/photo-1605377033918-4aa53706582e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1862&q=80",
        },
        {
            title: "My Second Dynamic Card",
            content: "This is dynamic content",
            img: "https://images.unsplash.com/photo-1566450653303-2614cbb292ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        },
        {
            title: "My Third Dynamic Card",
            content: "This is dynamic content",
            img: "https://images.unsplash.com/photo-1489832049190-666d39b40b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            title: "My Fourth Dynamic Card",
            content: "This is dynamic content",
            img: "https://images.unsplash.com/reserve/MjHaFa2zRbGxu3AvRAsG_toscana2.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        },
        {
            title: "My Fifth Dynamic Card",
            content: "This is dynamic content",
            img: "https://images.unsplash.com/photo-1530804458434-67fe207c3a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
    ];
    */

    const BASE_URL = "https://floran-blog-api.herokuapp.com/"
    // hook
    React.useEffect(() => {
        // console.log("Inside the useEffect")
        axios.get(BASE_URL).then(
            (res) => {
                // console.log(res.data)
                setBlog(res.data.reverse())
                setLatestBlog(res.data.shift())
            }
        ).catch(
            err => console.log(err)
        )
    },[])

    // console.log("Blog key value", blog)
    // console.log("Latest Blog key value", latestBlog)
    
    /*
    return (        
            <div className='container mx-auto mt-5'>
                <LatestBlog />
                <div className='row mt-5'>
                    {blog.map((article) => {
                        return (
                            <BlogCard title={article.title} content={article.content} img={article.img} />
                        )
                    }
                    )}
                </div>
            </div>
    )*/

    if(blog) {
        return (        
            <div className='container mx-auto mt-5'>
                <LatestBlog blogId={latestBlog.id} title={latestBlog.title} content={latestBlog.description} img={latestBlog.image} />
                <div className='row mt-5'>
                    {
                        blog.map((value, index) => (
                            <BlogCard blogId={value.id} title={value.title} content={value.description} img={value.image} />
                        ))
                    }
                </div>
            </div>
        )
    } else {
        return "Loading"
    }
}

export default BlogList;
