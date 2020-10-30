import ReactStars from 'react-rating-stars-component';
import { Avatar } from '@windmill/react-ui';
const TourReviews = ({ reviews }) => {
  return (
    <div className='h-screen/2 container mx-auto overflow-y-auto my-10 text-gray-300 border py-2'>
      <div className='flex flex-wrap md:grid grid-cols-2 gap-2 md:flex-no-wrap px-2'>
        {reviews.map((review) => (
          <div
            key={review._id}
            className='p-4 md:flex-row w-full border transform hover:shadow-2xl duration-500 hover:-translate-y-2 mt-2'
          >
            <div className='flex flex-col'>
              <div className='flex justify-start items-center'>
                <Avatar
                  className='w-5 h-5 mr-2 border border-blue-300 transform hover:scale-150'
                  src={`${process.env.PROD_URL}/img/users/${review.user.photo}`}
                  alt='profile'
                  size='large'
                />
                <p className='font-medium'>{review.user.name}</p>
              </div>
              <div className='mt-4'>
                <h2 className='italic '>{review.review}</h2>
              </div>
              <ReactStars
                size={30}
                value={review.rating}
                edit={false}
                activeColor='#87b9e8'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourReviews;
