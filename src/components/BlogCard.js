import React from 'react'
import { Link } from 'react-router-dom'
import  moment  from 'moment'
function BlogCard(props) {
    const { data } = props
    return (
        <>
            {
                data?.map((item, index) => {
                    return (
                        <div key={index} className='blog-card position-relative'>
                            <div className='card-image'>
                                <img src={item?.images[0]?.url} alt='blog' className='img-fluid w-100' />
                            </div>
                            <div className='blog-content'>
                                <p className='date'>{moment(item?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                                <h5 className='title'> {item?.title}</h5>
                                <p className='desc' dangerouslySetInnerHTML={{ __html: item?.description.substr(0, 50) + '...' }}></p>
                                <Link to={`${item?._id}`} className='button'>Read More</Link>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default BlogCard