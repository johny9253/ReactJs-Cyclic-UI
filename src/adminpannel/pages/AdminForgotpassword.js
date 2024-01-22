import React from 'react'
import CustomInput from '../components/CustomInput'

const AdminForgotpassword = () => {
  return (
    <div className='py-5' style={{ background: "#001529", minHeight:"100vh"}}>
      <br/><br/><br/>
      <div className='py-4 w-25 bg-white rounded-3 mx-auto p-4'>
      <img src='images/ecomupdatedlogo.png' className='img-fluid adminlogo mb-2 rounded mx-auto d-block' alt='logo' />
        <h3 className='text-center'>Reset Password</h3>
        <p className='text-center'>Please enter your registred email to  get reset password mail</p>
        <form action=''>
          <CustomInput type='text' label='Email address' id='email' />          
          <button className='border-0 px-3 py-2 mt-2 text-white text-center fw-bold w-100' style={{ background: "#F06331" }} type='submit'>
            Send Link
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminForgotpassword