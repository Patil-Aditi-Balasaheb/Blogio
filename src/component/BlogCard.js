import React from 'react'

function BlogCard(props) {
    return (
        <div className='col-lg-4 col-md-6 col-12 d-flex' onClick={(event) => console.log(event.target.value)}>
            <div className="card">
                <a className="blogcard" href={'/detail/' + props.blogId}>
                    <img src={props.img} className="card-img-top" alt="scenary"/>
                    <div className="card-body row">
                        <div className='col-12'>
                            <h1 className="card-title">{props.title}</h1>
                        </div>
                        <div className='col-12'>
                            <p className="card-text">{props.content}</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default BlogCard
