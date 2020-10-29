import { Fragment } from 'react';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
import { getTour } from 'services/tourServices';
import { SpinnerIcon } from 'icons';
import {
  TourCallToAction,
  TourDescription,
  TourHero,
  TourImages,
  TourReviews,
} from 'components/Tour';
import { bookTour } from 'services/bookServices';

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

  const handleBookedTour = async () => {
    await bookTour(tour.id);
  };

  return (
    <Fragment>
      <NextSeo
        title={`Phtours | ${tour.name}`}
        description='Then with a short description here.'
      />
      <div className='min-h-screen'>
        <TourHero tour={tour} />
        <TourDescription tour={tour} />
        <TourImages images={tour.images} />
        <MapContainer
          coordinates={tour.startLocation.coordinates}
          locations={tour.locations}
        />
        <TourReviews reviews={tour.reviews} />
        <TourCallToAction
          days={tour.duration}
          onBookedTour={handleBookedTour}
        />
      </div>
    </Fragment>
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
