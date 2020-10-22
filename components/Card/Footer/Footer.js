import Link from 'next/link';
import { FooterWrapper, TypoPrice } from './Footer.style';

const Footer = ({ price, ratingsAverage, ratingsQuantity, id }) => {
  return (
    <FooterWrapper>
      <div>
        <p>
          <TypoPrice>&#8369; {price}</TypoPrice> per person
        </p>
        <p>
          {ratingsAverage} ratings ({ratingsQuantity})
        </p>
      </div>
      <button className='border border-gray-500 rounded-lg text-sm text-gray-100 bg-gray-800 hover:bg-gray-600 transform duration-500 hover:-translate-y-1'>
        <Link href='/tour/[id]' as={`/tour/${id}`}>
          <a className='p-4'>DETAILS</a>
        </Link>
      </button>
    </FooterWrapper>
  );
};

export default Footer;
