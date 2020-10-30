import { useState } from 'react';
import Link from 'next/link';
import { Button, Avatar } from '@windmill/react-ui';
import { useAuth } from 'context/authContext';
import tw, { styled } from 'twin.macro';

const ButtonWrap = tw.button`block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900`;
const DropDown = styled.div`
  ${tw`transition ease-out duration-300 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg`}
  ${({ isOpen }) => isOpen && tw`hidden`}
`;

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(true);
  const AuthLinks = (
    <div className='flex'>
      <Link href='/login'>
        <a>
          <span className='rounded-md'>
            <button
              type='button'
              className='inline-flex justify-center w-full px-4 py-2 text-sm uppercase leading-5 font-medium text-gray-300 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150'
              id='options-menu'
              aria-haspopup='true'
              aria-expanded='true'
            >
              <div className='flex justify-center items-center'>LOGIN</div>
            </button>
          </span>
        </a>
      </Link>
      <Link href='/signup'>
        <a>
          <span className='rounded-md'>
            <button
              type='button'
              className='border rounded-md hover:bg-gray-700 inline-flex justify-center w-full px-4 py-2 text-sm uppercase leading-5 font-medium text-gray-300 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150'
              id='options-menu'
              aria-haspopup='true'
              aria-expanded='true'
            >
              <div className='flex justify-center items-center'>SIGN UP</div>
            </button>
          </span>
        </a>
      </Link>
    </div>
  );

  const renderDropDown = (
    <DropDown className='z-40' isOpen={isOpen}>
      <div className='rounded-md bg-white shadow-xs'>
        <div
          className='py-1'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'
        >
          <ButtonWrap role='menuitem'>Account settings</ButtonWrap>
          <form>
            <ButtonWrap
              onClick={() => {
                logout(), setIsOpen(!isOpen);
              }}
              type='submit'
              role='menuitem'
            >
              Sign out
            </ButtonWrap>
          </form>
        </div>
      </div>
    </DropDown>
  );

  return (
    <div className='flex justify-between items-center py-4 px-6 text-gray-300 border-b-2 border-gray-600'>
      <Link href='/'>
        <a className='tracking-widest font-bold select-none'>PH TOURS</a>
      </Link>
      <div>
        <img className='h-10 w-10' src='/aircraft.png' alt='icon' />
      </div>
      <div className='relative inline-block text-left'>
        {user ? (
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className='hover:bg-gray-800 focus:outline-none'
            layout='link'
          >
            <Avatar
              className='mr-2'
              size='small'
              src={`${process.env.PROD_URL}/img/users/${user.photo}`}
              alt='profile'
            />
            <div className='flex text-gray-300 hover:text-gray-600'>
              <span>{user.name.toUpperCase()}</span>
              <svg
                className='-mr-1 ml-2 h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </Button>
        ) : (
          AuthLinks
        )}
        {renderDropDown}
      </div>
    </div>
  );
};

export default Navbar;
