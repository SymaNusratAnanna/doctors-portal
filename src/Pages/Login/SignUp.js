// import { updateProfile } from 'firebase/auth';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser,gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

      const [token] = useToken(user|| gUser)
      const navigate = useNavigate();

    let signInError;

    if( loading || gLoading || updating){
      return <Loading></Loading>

    }
    if(error|| gError||updateerror)
    {
      signInError=<p className='text-red-500'><span>{error?.message || gError?.message || updateerror?.message}</span></p>
    }
    // if(gUser){
    //     console.log(gUser);
    // }

    if(token){
      navigate('/appointmentpage');
    }
    const onSubmit =  async data => { 
        console.log(data);
      await createUserWithEmailAndPassword(data.email,data.password);
      await updateProfile({displayName:data.name});
      console.log('update done');
      // navigate('/appointmentpage')
    }
    return (
        <div>
               <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 class= 'text-center text-2xl font-bold'>Sign Up</h2>


    
  </div>

  <form onSubmit={handleSubmit(onSubmit)}>
  <div className="form-control w-full max-w-xs">

  <label className="label">
  {errors.email?.type === 'required' &&   <span className="label-text-alt text-red-500">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' &&   <span className="label-text-alt text-red-500">{errors.email.message}</span>}
   
  
  </label>
</div>
  <div className="form-control w-full max-w-xs">
  
  <label className="label">
    <span className="label-text">What is your Name?</span>
 
  </label>
  <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" 
  {...register("name",{
    required: {
      value: true,
      message: 'Name is Required'
    },
  
    
 })} 
 />
  
  <label className="label">
    <span className="label-text">What is your email?</span>
 
  </label>
  <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" 
  {...register("email",{
    required: {
      value: true,
      message: 'Email is Required'
    },
  
    pattern: {
      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,

    message: 'Provide a valid email'

}
 })} 
 />
  
  <label className="label">
  {errors.name?.type === 'required' &&   <span className="label-text-alt text-red-500">{errors.name.message}</span>}
 
   
  
  </label>
</div>
<div className="form-control w-full max-w-xs">
  
  <label className="label">
    <span className="label-text">What is your password?</span>
 
  </label>
  <input type="password" placeholder="Your password" className="input input-bordered w-full max-w-xs" 
  {...register("password",{
    required: {
      value: true,
      message: 'password is Required'
    },
  
    minLength: {
      value: 6,
      message: 'Must be 6 characters or longer'
    }
 })} 
 />
  <label className="label">
  {errors.password?.type === 'required' &&   <span className="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type === 'minLength' &&   <span className="label-text-alt text-red-500">{errors.password.message}</span>}
   
  
  </label>
</div>
    {signInError}
      
      <input className='btn w-full max-w-xs text-white' type="submit" value="Sign up" />
    </form>
    <p>Already have an account? <Link className='text-secondary' to="/login">Please Login</Link></p>
  <div className="divider">or</div>
  <button onClick={()=> signInWithGoogle()} 
  className="btn btn-primary">Continue with google</button>
</div>
        </div> 
        </div>
    );
};

export default SignUp;