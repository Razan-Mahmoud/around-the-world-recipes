import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

export default function ContactUs() {

  let validate = Yup.object({
    name: Yup.string().required().min(2,"Minimum number of characters is 2").max(10,"Maximum number of character is 10"),
    phone: Yup.string().required().matches(/^(010|011|012|015)[0-9]{8}$/,"Enter a valid phone number"),
    email: Yup.string().email("Enter a valid email address").required(),
    password: Yup.string().required().matches(/^[a-zA-Z0-9!@#$%^&*()_-]{3,16}$/, "Enter a valid password"),
    rePassword: Yup.string().required().oneOf([Yup.ref("password")], "Passwords don't match."),
    message: Yup.string().required()
  })

  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
      age: "",
      message: ""
    },
    onSubmit: (vals)=>{
console.log(vals);
    },
    validationSchema:validate,
  })
  return (
   <>
   <div className="container my-3">
   <h2>Contact us:</h2>
   <form onSubmit={formik.handleSubmit}>
    <div className="row ">
      <div className="col-md-6">
      <div className='my-2'>
  <label htmlFor="name">Name: </label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name='name' id='name' className='form-control ' placeholder='Enter your name'/>
{formik.touched.name && formik.errors.name ? <p className='text-danger '>{formik.errors.name}</p> : null}
  </div>
      </div>

      <div className="col-md-6">
      <div className='my-2'>
  <label htmlFor="phone">Phone: </label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange}  name='phone' id='phone' className='form-control ' placeholder='Enter your phone'/>
{formik.touched.phone && formik.errors.phone ? <p className='text-danger'>{formik.errors.phone}</p> : null}
  </div>
      </div>


      <div className="col-md-6">
      <div className='my-2'>
  <label htmlFor="email">Email: </label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" name='email' id='email' className='form-control ' placeholder='Enter your email'/>
{formik.touched.email && formik.errors.email ? <p className='text-danger '>{formik.errors.email}</p> : null}
  </div>
      </div>
      <div className="col-md-6">
      <div className='my-2'>
  <label htmlFor="password">password: </label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name='password' id='password' className='form-control ' placeholder='Enter your password'/>
{formik.touched.password && formik.errors.password ? <p className='text-danger '>{formik.errors.password}</p> : null}
  </div>
      </div>
      <div className="col-md-6">
      <div className='my-2'>
  <label htmlFor="rePassword">Re-Enter your password: </label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name='rePassword' id='rePassword' className='form-control' placeholder='Re-enter your password'/>
{formik.touched.rePassword && formik.errors.rePassword ? <p className='text-danger'>{formik.errors.rePassword}</p> : null}
  </div>
      </div>
      <div className="col-md-6">
      <div className='my-2'>
  <label htmlFor="age">age: </label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} type="age" name='age' id='age' className='form-control ' placeholder='Enter your age'/>
{formik.touched.age && formik.errors.age ? <p className='text-danger '>{formik.errors.age}</p> : null}
  </div>
      </div>
      <div className="col-md-6">
      <div className='my-2'>
  <label htmlFor="message">Enter your message: </label>
<textarea onBlur={formik.handleBlur} onChange={formik.handleChange} type="message" name='message' id='message' className='form-control ' />
{formik.touched.message && formik.errors.message ? <p className='text-danger '>{formik.errors.message}</p> : null}
  </div>
      </div>
      
      <div className="col-md-6 mt-3">
      <button disabled={!formik.isValid} type='submit' className='btn w-100 btn-success submitBtn '>Submit</button>
      </div>
    </div>
    </form>
   </div>
   </>
  )
}
