import axios from 'axios'
import React, { Component } from 'react'

export class BlogDetail extends Component {

    /*
    // class states
    constructor() {
        super();
        this.state = {
            x: "My State Propety",
        };
    }
    */

    state = {
        blogDetail: ""
    }

    // same like useEffect in function based component, in class based component we use componentDidMount
    componentDidMount() {
        const { id } = this.props.match.params
        const url = `https://floran-blog-api.herokuapp.com/${id}`

        const fetchBlogDetail = () => {
            axios.get(url).then(
                (res) => {
                    this.setState({
                        blogDetail: res.data
                    })
                }
            ).catch(
                err => console.log(err)
            )
        }

        fetchBlogDetail()
    }

    render() {   
        let blogDetail = this.state.blogDetail

        if(!blogDetail) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='container mx-auto mt-5'>
                    <div className="row">
                        <div className="col-12 text-center">
                        <h1 className='detailHeader'>{blogDetail.title}</h1>
                        </div>
                        <div className="col-12 text-center">
                            <img className="detailImg" src={blogDetail.image} alt="scenary" />
                        </div>
                        <div className="col-12">
                            <p className='detailParagraph'>
                                {blogDetail.description}
                            </p>
                        </div>
                    </div>
                </div>
            ) 
        }
    }
}

export default BlogDetail
