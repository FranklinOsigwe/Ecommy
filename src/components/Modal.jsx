import React, { useContext, useState } from "react";
import { FaFacebook, FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link , useLocation, useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {signUpWithGmail,login} = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  
    const from = location.state?.from?.pathname || '/';

  
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email,password)
    login(email,password).then((result) => {
      const user = result.user;
      alert('Login Successfully')
      document.getElementById('my_modal_5').close()
      navigate(from, {replace: true})
    }).catch((error) => {
      const errorMessage = error.message;
      setErrorMessage('Provide a correct email and password')
    })
  }

  // google signIn
  const handleLogin = () => {
    signUpWithGmail().then((result) => {
      const user = result.user;
      alert('Login Successfully')
      navigate(from, {replace: true})
    }).catch((error) => console.log(error))
  }

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-middle ssm:modal-middle ">
        <div className="modal-box">
          <div className="modal-action justify-center flex-col mt-0">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body"
              method="dialog"
            >
              <h3 className="font-bold text-lg">Please Login</h3>
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
                  autoComplete="current-password"
                  {...register("password")}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* error */}
                  {
                    errorMessage ? <p className="text-red-700 text-xs italic">{errorMessage}</p> : ''
                  }


              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="login"
                  className="btn bg-green-700 text-white"
                />
              </div>

              <p className="text-center my-2">
                you do not have an account ?{" "}
                <Link to="/signup" className="text-green-500 ml-1">
                  Signup Now
                </Link>
              </p>

              <button
                htmlFor="my_modal_5"
                onClick={() => document.getElementById("my_modal_5").close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white"
              >
                X
              </button>
            </form>

            <div className="text-center space-x-3 mb-5">
              <button className="btn btn-circle hover:bg-green-700 hover:text-white" onClick={handleLogin}>
                <FaGoogle />
              </button>
              <button className="btn btn-circle hover:bg-green-700 hover:text-white">
                <FaFacebookF />
              </button>
              <button className="btn btn-circle hover:bg-green-700 hover:text-white">
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
