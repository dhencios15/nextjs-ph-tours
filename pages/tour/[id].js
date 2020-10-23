import Details from 'components/Card/Body/Details';
import { LocationIcon, SpinnerIcon, TimeIcon } from 'icons';
import { getTour } from 'services/tourServices';

const Tour = ({ tour }) => {
  if (!tour)
    return (
      <div className='flex justify-center items-center mt-10'>
        <SpinnerIcon className='animate-spin text-gray-400 h-64 w-64' />
      </div>
    );
  return (
    <div className='min-h-screen'>
      <section className='relative bg-gray-700'>
        <div
          className='h-screen/1.5 bg-center flex'
          style={{
            backgroundImage: `url(http://localhost:3000/img/tours/${tour.imageCover}`,
          }}
        >
          <div className='relative container mx-auto p-4 flex justify-center items-center z-10'>
            <div className='text-gray-100 bg-gray-900 py-4 px-5 rounded border-gray-300 bg-opacity-75 border shadow-lg overflow-hidden'>
              <div className='content float-left my-5'>
                <div className='heading mb-3 text-2xl md:text-4xl font-bold uppercase'>
                  {tour.name}
                </div>
                <div className='text leading-normal flex justify-between border-t-2 pt-4'>
                  <Details details={`${tour.duration} DAYS`}>
                    <TimeIcon className='w-4 h-4 mr-1 text-gray-500' />
                  </Details>
                  <Details details={tour.startLocation.description}>
                    <LocationIcon
                      isSolid={true}
                      className='w-4 h-4 mr-1 text-gray-500'
                    />
                  </Details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='flex text-gray-300'>
        <div className='flex justify-center items-center py-6 w-full'>
          <div className='p-4 lg:w-1/4 sm:w-1/2 w-full'>
            <h2 className='font-bold title-font tracking-widest mb-4 text-xl text-center sm:text-left'>
              QUICK FACTS
            </h2>
            <nav className='flex flex-col sm:items-start sm:text-left text-center items-center -mb-1'>
              <a className='mb-2'>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                First Link
              </a>
              <a className='mb-2'>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Second Link
              </a>
              <a className='mb-2'>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Third Link
              </a>
              <a className='mb-2'>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Fourth Link
              </a>
              <a className='mb-2'>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Fifth Link
              </a>
            </nav>
          </div>
        </div>
        <div className='flex justify-center items-center py-6 bg-gray-700 w-full'>
          <ul>
            <li>22</li>
            <li>22</li>
            <li>22</li>
            <li>22</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const tour = await getTour(params.id);
  return {
    props: { tour },
    revalidate: 10,
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default Tour;
