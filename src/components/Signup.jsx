import React, { useContext } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate,useLocation} from "react-router-dom";
import {useForm} from "react-hook-form";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/'

  const {createUser,login} = useContext(AuthContext);

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email,password).then((result) => {
      //signed up
      const user = result.user;
      alert('Account creation successfully done')
      document.getElementById('my_modal_5').close()
      navigate(from,{replace: true})
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  }

  return (
    <div>
       
        <div className='pt-20 bg-black'>
            <div className="modal-box max-w-md w-full mx-auto flex items-center align-center justify-center ">
              <div className="modal-action justify-center flex-col mt-0">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body" method="dialog">
                  <h3 className="font-bold text-lg">Please Signup</h3>
                   {/* email */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span> 
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      {...register("email")}
                      autoComplete="username" 
                    />
                  </div>
    
                  {/* password */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      {...register("password")}
                      autoComplete="current-password" 
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
    
                  {/* error */}
                  <div className="form-control mt-6">
                    <input
                      type="submit"
                      value="signup"
                      className="btn bg-green-700 text-white"
                    />
                  </div>
    
                  <p className="text-center my-2">
                    Already gotten an account ?{" "}
                    <button className="text-green-500 ml-1" onClick={() => document.getElementById('my_modal_5').showModal()}>
                      Login Now
                    </button>
                  </p>
                </form>

                <Link to='/'
                htmlFor="my_modal_5"
                onClick={() => document.getElementById("my_modal_5").close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white"
              >
                X
              </Link>
    
                <div className='text-center space-x-3 mb-5'>
                  <button className="btn btn-circle hover:bg-green-700 hover:text-white">
                    <FaGoogle/>
                  </button>
                  <button className="btn btn-circle hover:bg-green-700 hover:text-white">
                    <FaFacebookF/>
                  </button>
                  <button className="btn btn-circle hover:bg-green-700 hover:text-white">
                    <FaGithub/>
                  </button>
                </div>
              </div>
            </div>
          {/* </dialog> */}
          
        </div>
        
        <Modal/>
        
    </div>
  );
};

export default Signup;