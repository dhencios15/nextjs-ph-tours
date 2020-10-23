const Header = ({ imageCover, name }) => {
  return (
    <div className='block relative h-48'>
      <img
        alt='ecommerce'
        className='object-cover shadow-lg object-center w-full h-full block opacity-75 duration-500 hover:opacity-100'
        src={`http://localhost:3000/img/tours/${imageCover}`}
      />
      <h1 className='absolute bottom-0 right-0 font-bold text-2xl text-gray-100 bg-gray-700 p-2 rounded-md'>
        {name}
      </h1>
    </div>
  );
};

export default Header;
