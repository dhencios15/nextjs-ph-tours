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
      <section class='relative bg-gray-700'>
        <div
          class='h-screen/1.5 bg-center flex'
          style={{
            backgroundImage: `url(http://localhost:3000/img/tours/${tour.imageCover}`,
          }}
        >
          <div class='relative container mx-auto p-4 flex justify-center items-center z-10'>
            <div className='text-gray-100 bg-gray-900 py-4 px-5 rounded border-gray-300 bg-opacity-75 border shadow-lg overflow-hidden'>
              <div class='content float-left my-5'>
                <div class='heading mb-3 text-2xl md:text-4xl font-bold uppercase'>
                  {tour.name}
                </div>
                <div class='text leading-normal flex justify-between border-t-2 pt-4'>
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
      <div>{tour.description}</div>
      <div>{tour.description}</div>
      <div>{tour.description}</div>
      <div>{tour.description}</div>
      <div>{tour.description}</div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const tour = await getTour(params.id);
  return {
    props: { tour },
    // revalidate: 10,
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default Tour;
