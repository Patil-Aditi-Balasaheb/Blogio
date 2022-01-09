import React from 'react'

function LatestBlog(props) {
    return (
        <a className='blogcard' href={'/detail/' + props.blogId}>
            <div className='row'>
                <div className='col-12 col-lg-8 col-md-8'>
                    <img className="blogCardImg" src={props.img} alt='scenary' />
                </div> 
                <div className="col-12 col-lg-4 col-md-4">
                    <div className="row">
                        <div className="col-12">
                            <h1>
                                {props.title} 
                            </h1>
                        </div>
                        <div className="col-12">
                            <h4>
                                Blog Description 
                            </h4>
                            <h6>
                                {props.content}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default LatestBlog
