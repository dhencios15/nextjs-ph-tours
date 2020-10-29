import { useAuth } from 'context/authContext';
import Link from 'next/link';
import React from 'react';

const TourCallToAction = ({ days, onBookedTour }) => {
  const { isAuthenticated } = useAuth();

  return (
    <section className='text-gray-300 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto py-10 px-16 border rounded-lg shadow-lg'>
          <div className='flex flex-col md:mr-auto'>
            <h1 className='flex-grow sm:pr-16 text-2xl font-medium title-font text-sky-blue'>
              WHAT ARE YOU WAITING FOR?
            </h1>
            <h3>
              {days} days. 1 adventure. Infinite memories. Make it yours today!
            </h3>
          </div>
          {isAuthenticated ? (
            <button
              onClick={() => onBookedTour()}
              className='flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0'
            >
              BOOK TOUR NOW
            </button>
          ) : (
            <Link href='/login' passHref>
              <a className='flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded mt-10 sm:mt-0'>
                LOGIN TO BOOK TOUR
              </a>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default TourCallToAction;
