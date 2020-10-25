import Details from 'components/Card/Body/Details';
import dayjs from 'dayjs';
import { Avatar } from '@windmill/react-ui';
import { StartDateIcon, DifficultyIcon, UserGroupIcon, StarIcon } from 'icons';

const TourDescription = ({ tour }) => {
  return (
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
  );
};

export default TourDescription;
