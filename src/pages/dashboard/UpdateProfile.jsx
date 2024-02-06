import {useForm} from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import {useLocation, useNavigate} from 'react-router-dom'
import { useContext } from 'react';


const UpdateProfile = () => {
    const {updateuserProfile} = useContext(AuthContext )
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
       const name = data.name;
       const photoURL = data.photoURL;
       updateuserProfile(name, photoURL).then(() => {
            navigate(from, {replace: true})
       }).catch((error) => {

       })
    }
    
  return (
    <div className='w-full flex justify-center items-center px-5 py-10 md:px-10 md:py-20 lg:px-20 lg:py-40'> 
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <h3 className='font-bold'>Update your Profile</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="your name"
              className="input input-bordered"
              {...register("name")}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Photo</span>
            </label>
          
            <input type="text" {...register("photoURL")} placeholder='photoURL' className='input input-bordered'/>
            {/* uploading image */}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-700 text-white">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
