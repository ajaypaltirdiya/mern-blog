
import { Button, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link,useNavigate } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const SignUp = () => {
  const navigate = useNavigate()
  const [loading,setLoading] = useState(false)
  const [errorMessage,setErrorMessage] = useState();
  const {register,handleSubmit,formState:{errors}} = useForm({defaultValues:{username:'',email:'',password:''}});

  const submitForm = async(data) => {

    try {
      setLoading(true)
      const response = await fetch('/api/auth/signup',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(data)
      })

      const resData = await response.json();
      
      if(resData.status){
        navigate('/')
        console.log('signupRes..',resData);
      }else{
        setLoading(false)
        setErrorMessage(resData.message)
      }

    } catch (error) {
     
        console.log(error)
    }
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className='text-center my-4 font-bold text-3xl mt-[-35px]'>Sign up</h1>
      <form onSubmit={handleSubmit(submitForm)} className="flex w-full max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Your name" />
        </div>
        <TextInput {...register('username', {required:'Username is required ',maxLength:25})} id="username" type="text" placeholder="ex.John doe" />
        {errors.username && <span className='text-sm text-red-600 mt-1'>{errors.username.message}</span>}

      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput {...register('email',{required:'Email is required'})} id="email1" type="email" placeholder="name@flowbite.com"  />
        {errors.email && <span className='text-sm text-red-600 mt-1'>{errors.email.message}</span>}

      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" {...register('password',{required:'Passsword is required'})} type="password"  />
        {errors.password && <span className='text-sm text-red-600 mt-1'>{errors.password.message}</span>}

      </div>
      
      <Button gradientDuoTone="purpleToBlue" disabled={loading} type="submit">{loading ? <><Spinner aria-label="Default status example" /> Submitting</> :'Sign Up'}</Button>
    </form>
    <div className="mt-4">
      {errorMessage && <h4 className='text-center text-red-400 font-bold'>{errorMessage}</h4>}
    </div>
    <div className="mt-4">
      <span>Already have an account? <Link to="/sign-in" className='font-bold text-pink-900'>Sign In</Link></span>
    </div>
    </div>
  )
}

export default SignUp