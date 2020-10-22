import Link from 'next/link';
import { Button, Avatar } from '@windmill/react-ui';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-6 text-gray-300 border-b-2 border-gray-600'>
      <Link href='/'>
        <a className='tracking-widest font-bold select-none'>PH TOURS</a>
      </Link>
      <div>
        <img className='h-10 w-10' src='/aircraft.png' alt='icon' />
      </div>
      <div className='relative inline-block text-left'>
        <Button className='hover:bg-gray-800 focus:outline-none' layout='link'>
          <Avatar
            className='mr-2'
            size='small'
            src='https://robohash.org/ddd?set=set4'
            alt='profile'
          />
          <div className='flex text-gray-300 hover:text-gray-600'>
            <span>NAME</span>
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
      </div>
    </div>
  );
};

export default Navbar;
