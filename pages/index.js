import Card from 'components/Card';
import { SpinnerIcon } from 'icons';
import { getAllTours } from 'services/tourServices';

export default function Home({ tours }) {
  if (!tours)
    return (
      <div className='flex justify-center items-center mt-10'>
        <SpinnerIcon className='animate-spin text-gray-400 h-64 w-64' />
      </div>
    );

  return (
    <main className='flex flex-wrap -m-4 container px-5 py-12 mx-auto'>
      {tours.map((tour) => (
        <Card key={tour.id} tour={tour} />
      ))}
    </main>
  );
}

export const getStaticProps = async () => {
  const tours = await getAllTours();
  return {
    // revalidate: 10,
    props: { tours },
  };
};
