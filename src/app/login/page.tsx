import Link from 'next/link'
import React from 'react'
 const LoginPage = () => {
  return (
    <div>
<div className="hero min-h-screen bg-base-200">
  <div>  <h3 style={{
    justifyContent:'center'
  }}>Please Login</h3></div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <h5 style={{
            margin:'5px'
          }}> Don't have an accounts? 
            <Link style={{
              color:'blue'
            }} href='/register'>Please Register</Link>
          </h5>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}
export default LoginPage