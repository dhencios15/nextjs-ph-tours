const TourImages = ({ images }) => {
  return (
    <div className='flex-row md:flex divide-y md:divide-x divide-gray-800'>
      {images.map((image, i) => (
        <div
          key={i}
          className='h-screen/3 w-full bg-cover bg-center'
          style={{
            backgroundImage: `url(http://localhost:3000/img/tours/${image}`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default TourImages;
