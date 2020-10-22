import { getTour } from 'services/tourServices';

const Tour = ({ tour }) => {
  return <div>{tour.name}</div>;
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
