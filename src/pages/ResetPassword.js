import React from 'react'
import { BreadCrum } from '../components/BreadCrum'
import { Meta } from '../components/Meta'
const ResetPassword = () => {
  return <>
  <Meta title={"Reset Password"} />
        <BreadCrum title='Reset Password' />
        <div className='login-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center nb-3'>Reset Your Password</h3>
                            <p className='text-center mt-2 mb-3'>We will send you an email to reset your password</p>
                            <form action='' className='d-flex flex-column gap15'>
                              <div className='mt-1'>
                                  <input type='password' name='password' placeholder='Password' className='form-control' />
                              </div>
                              <div className='mt-1'>
                                  <input type='password' name='Confirm password' placeholder='Confirm Password' className='form-control' />
                              </div>

                                <div>
                                    <div className='mt-3 d-flex justify-content-center flex-column align-items-center gap15'>
                                        <button className='button border-0' type='submit'>Ok</button>                                        
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>
}

export default ResetPassword