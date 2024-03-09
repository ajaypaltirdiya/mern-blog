import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';

const SignIn = () => {
  const {register,handleSubmit,formState:{errors}} = useForm({defaultValues:{email:'',password:''}});

  const submitForm = (data) => console.log('data...',data)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className='text-center my-4 font-bold text-3xl mt-[-35px]'>Sign In</h1>

      <form onSubmit={handleSubmit(submitForm)} className="flex w-full max-w-md flex-col gap-4">

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput {...register('email',{required:"Email Address is required"})} id="email1" type="email" placeholder="name@flowbite.com"  />
        {errors.email && <span className='text-sm text-red-600 mt-1'>{errors.email.message}</span>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" {...register('password',{required:"Password is required"})} type="password"  />
        {errors.password && <span className='text-sm text-red-600 mt-1'>{errors.password.message}</span>}
      </div>
      
      <Button gradientDuoTone="purpleToBlue" type="submit">Submit</Button>
    </form>
    <div className="mt-4">
      <span>{`Don't`} have an account? <Link to="/sign-up" className='font-bold text-pink-900'>Sign Up</Link></span>
    </div>
    </div>
  )
}

export default SignIn