import React from 'react'
import { ImHome } from 'react-icons/im';
import { Link } from 'react-router-dom'

export const AdminBreadCrum = (props) => {
    const { title } = props;
    return (
        <div className='breadcrum mb-0 py-4'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12 --bs-secondary-bg'>
                        <p className='text-start mb-0 fw-bold d-flex align-items-center justify-content-start fs-5'>
                            <Link to='/admin' className='' style={{color:'#F06331'}}>
                               <div className='d-flex align-items-center'>
                               <ImHome className='mt-0 fs-6'/> Home &nbsp;
                               </div>
                            </Link>
                             / {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminBreadCrum