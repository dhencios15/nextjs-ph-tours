const Details = ({ details, children, message }) => {
  return (
    <div className='flex text-gray-300 text-sm font-light text-left items-center'>
      <span>{children}</span> {details} {message}
    </div>
  );
};

export default Details;
