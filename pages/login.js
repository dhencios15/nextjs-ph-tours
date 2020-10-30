import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';

import { InputField, loginSchema } from 'utils/authValidation';
import { useAuth } from 'context/authContext';

const Login = () => {
  const { login, loading, error } = useAuth();
  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    login(data);
    reset();
  };

  return (
    <div className='container mx-auto my-10 w-3/4 md:w-1/3 rounded-md shadow-xl overflow-hidden transform'>
      <div className='bg-gray-900 p-4 lg:px-10 lg:py-5 overflow-hidden'>
        <form onSubmit={handleSubmit(onSubmit)} className='my-4 py-4'>
          <h1 className=' text-gray-300 font-bold mb-5'>
            LOG INTO YOUR ACCOUNT
          </h1>
          {error && <p className=' text-red-500 -mt-5 mb-2 text-sm'>{error}</p>}
          <div className='mb-4'>
            <label
              className='block text-gray-400 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email address
            </label>
            <InputField
              errors={errors.email?.message || error}
              id='email'
              type='text'
              placeholder='you@example.com'
              name='email'
              defaultValue='user@test.com'
              ref={register}
            />
            <p className='text-red-500 text-xs italic'>
              {errors.email?.message}
            </p>
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-400 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <InputField
              errors={errors.password?.message || error}
              id='password'
              type='password'
              placeholder='**********'
              name='password'
              defaultValue='test1234'
              ref={register}
            />
            <p className='text-red-500 text-xs italic'>
              {errors.password?.message}
            </p>
          </div>
          <div className='flex items-center justify-between'>
            <button
              disabled={loading}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              {loading ? 'LOADING...' : 'LOGIN'}
            </button>
            <Link href='#' passHref>
              <a className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
                Forgot Password?
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
