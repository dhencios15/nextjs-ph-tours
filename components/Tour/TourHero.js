import { LocationIcon, TimeIcon } from 'icons';
import Details from 'components/Card/Body/Details';

const TourHero = ({ tour }) => {
  return (
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
  );
};

export default TourHero;
