import dayjs from 'dayjs';
import { Avatar } from '@windmill/react-ui';
import { getTour } from 'services/tourServices';
import dynamic from 'next/dynamic';
import {
  LocationIcon,
  SpinnerIcon,
  TimeIcon,
  StartDateIcon,
  DifficultyIcon,
  UserGroupIcon,
  StarIcon,
} from 'icons';
import Details from 'components/Card/Body/Details';

const Tour = ({ tour }) => {
  const MapContainer = dynamic(() => import('components/Map'), {
    ssr: false,
  });

  if (!tour)
    return (
      <div className='flex justify-center items-center mt-10'>
        <SpinnerIcon className='animate-spin text-gray-400 h-64 w-64' />
      </div>
    );
  return (
    <div className='min-h-screen'>
      <section className='relative bg-gray-700 border-b-2 border-dashed border-opacity-25'>
        <div
          className='h-screen/1.5 bg-cover bg-center flex'
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
      <div className='flex-row md:flex text-gray-300'>
        <div className='flex justify-center items-center py-6 w-full'>
          <div className='p-4 lg:w-1/2'>
            <h2 className='font-bold title-font tracking-widest mb-4 text-2xl text-center sm:text-left  text-blue-300'>
              QUICK FACTS
            </h2>
            <nav className='flex flex-col sm:items-start sm:text-left text-center items-center -mb-1'>
              <a className='mb-5'>
                <Details
                  details={`NEXT DATE - ${dayjs(tour.startDates[0]).format(
                    'MMM YYYY'
                  )}`}
                >
                  <StartDateIcon className='w-5 h-5 mr-2 text-blue-300' />
                </Details>
              </a>
              <a className='mb-5'>
                <Details
                  details={`DIFFICULTY - ${tour.difficulty
                    .charAt(0)
                    .toUpperCase()}${tour.difficulty.slice(1)}`}
                >
                  <DifficultyIcon className='w-5 h-5 mr-2 text-blue-300' />
                </Details>
              </a>
              <a className='mb-5'>
                <Details details={`PARTICIPANTS - ${tour.maxGroupSize} People`}>
                  <UserGroupIcon className='w-5 h-5 mr-2 text-blue-300' />
                </Details>
              </a>
              <a className='mb-5'>
                <Details details={`RATING - ${tour.ratingsAverage} / 5`}>
                  <StarIcon className='w-5 h-5 mr-2 text-blue-300' />
                </Details>
              </a>
            </nav>
            <h2 className='font-bold title-font tracking-widest mb-4 text-2xl text-center sm:text-left mt-5  text-blue-300'>
              YOUR TOUR GUIDES
            </h2>
            <nav className='flex flex-col justify-center sm:items-start sm:text-left text-center items-center -mb-1'>
              {tour.guides.map((guide) => (
                <a className='mb-5' key={guide._id}>
                  <Details
                    key={guide.id}
                    details={`${
                      guide.role === 'lead-guide' ? 'LEAD GUIDE' : 'TOUR GUIDE'
                    } - ${guide.name}`}
                  >
                    <Avatar
                      className='w-5 h-5 mr-2 border border-blue-300 transform hover:scale-150'
                      src={`http://localhost:3000/img/users/${guide.photo}`}
                      alt='profile'
                    />
                  </Details>
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className='flex justify-center items-center py-6 bg-gray-700 w-full'>
          <div className='p-4 lg:w-1/2'>
            <h2 className='font-bold title-font tracking-widest mb-4 text-2xl text-center sm:text-left text-blue-300'>
              ABOUT {tour.name.toUpperCase()}
            </h2>
            <nav className='flex flex-col sm:items-start sm:text-left text-center text-lg items-center -mb-1'>
              {tour.description}
            </nav>
          </div>
        </div>
      </div>
      <div className='flex-row md:flex divide-y md:divide-x divide-gray-800'>
        {tour.images.map((image, i) => (
          <div
            key={i}
            className='h-screen/3 w-full bg-cover bg-center'
            style={{
              backgroundImage: `url(http://localhost:3000/img/tours/${image}`,
            }}
          ></div>
        ))}
      </div>
      <MapContainer
        coordinates={tour.startLocation.coordinates}
        locations={tour.locations}
      />
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
