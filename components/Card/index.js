import { memo } from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Card = ({ tour }) => {
  return (
    <div className='lg:w-1/4 md:w-1/2 p-4 w-full transform hover:shadow-2xl duration-500 hover:-translate-y-2'>
      <div className='border border-gray-600 hover:border-gray-500 rounded-md shadow-2xl overflow-hidden'>
        <Header imageCover={tour.imageCover} name={tour.name} />
        <Body tour={tour} />
        <Footer
          price={tour.price}
          ratingsAverage={tour.ratingsAverage}
          ratingsQuantity={tour.ratingsQuantity}
          id={tour.id}
        />
      </div>
    </div>
  );
};

export default memo(Card);
