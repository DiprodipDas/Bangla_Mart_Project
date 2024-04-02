import Link from 'next/link'
import React from 'react'

function registerPage() {
  return (
    <div>

<div className="hero min-h-screen bg-base-200">

    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="name" placeholder="name" className="input input-bordered" required />
        </div>
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
          <h5 style={{
            margin:'5px'
          }}> Already have an accounts? 
            <Link style={{
              color:'blue'
            }} href='/login'>Please Login</Link>
          </h5>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default registerPage