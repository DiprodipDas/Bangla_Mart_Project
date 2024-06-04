"use client";
import { Login } from "@/constant/Login";
import { useLoginMutation } from "@/redux/API/baseApi";
import Link from "next/link";
import React from "react";
const LoginPage = () => {
  const [setLogin, { data, isLoading, isError, error }] = useLoginMutation();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: Login = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    setLogin(data);
    if (isError) {
      alert(error.data.data);
      console.log(error);
    }
  };
  if (isLoading) return <p>loading...</p>;
  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div>
          {" "}
          <h3
            style={{
              justifyContent: "center",
            }}
          >
            Please Login
          </h3>
        </div>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form onSubmit={handleLogin} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                name='email'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
                className='input input-bordered'
                required
              />
              <label className='label'>
                <a href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button type='submit' className='btn btn-primary'>
                Login
              </button>
              {isError && error && (
                <div className='text-red-500'>
                  {error && error?.data && typeof error.data === "object"
                    ? error.data.data
                    : ""}
                </div>
              )}
              <h5
                style={{
                  margin: "5px",
                }}
              >
                {" "}
                Dont have an accounts?
                <Link
                  style={{
                    color: "blue",
                  }}
                  href='/register'
                >
                  Please Register
                </Link>
              </h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
