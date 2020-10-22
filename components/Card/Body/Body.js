import React from 'react';
import dayjs from 'dayjs';

import { FlagIcon, LocationIcon, StartDateIcon, UserGroupIcon } from 'icons';
import { BodyHeading, BodySummary, BodyWrapper } from './Body.style';
import Details from './Details';

const Body = ({ tour }) => {
  return (
    <BodyWrapper>
      <BodyHeading>
        {tour.difficulty.toUpperCase()} {tour.duration}-DAY TOUR
      </BodyHeading>
      <BodySummary>{tour.summary}</BodySummary>
      <div className='py-2 my-2'>
        <div className='flex justify-between items-center'>
          <Details details={tour.startLocation.description}>
            <LocationIcon className='w-4 h-4 mr-1 text-gray-500' />
          </Details>
          <Details details={dayjs(`${tour.startDates[0]}`).format('MMM YYYY')}>
            <StartDateIcon className='w-4 h-4 mr-1 text-gray-500' />
          </Details>
        </div>
        <div className='flex justify-between items-center mt-2'>
          <Details details={tour.locations.length} message='stops'>
            <FlagIcon className='w-4 h-4 mr-1 text-gray-500' />
          </Details>
          <Details details={tour.maxGroupSize} message='people'>
            <UserGroupIcon className='w-4 h-4 mr-1 text-gray-500' />{' '}
          </Details>
        </div>
      </div>
    </BodyWrapper>
  );
};

export default Body;
