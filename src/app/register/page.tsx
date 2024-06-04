"use client";
import { Register } from "@/constant/Register";
import { useRegisterUserMutation } from "@/redux/API/baseApi";
import Link from "next/link";
import React from "react";

function registerPage() {
  const [setRegister, { data, isLoading, isError }] = useRegisterUserMutation();
  const handleRegister = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data: Register = {
      name: e.currentTarget.userName.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    setRegister(data);
    if (isError) {
      alert(error.data.data);
      console.log(error);
    }
  };
  if (isLoading) return <p>loading...</p>;
  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form onSubmit={handleRegister} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Full Name</span>
              </label>
              <input
                name='userName'
                type='text'
                placeholder='name'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                name='email'
                type='email'
                placeholder='email'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                name='password'
                type='password'
                placeholder='password'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control mt-6'>
              <button type='submit' className='btn btn-primary'>
                Register
              </button>
              <h5
                style={{
                  margin: "5px",
                }}
              >
                {" "}
                Already have an accounts?
                <Link
                  style={{
                    color: "blue",
                  }}
                  href='/login'
                >
                  Please Login
                </Link>
              </h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default registerPage;
