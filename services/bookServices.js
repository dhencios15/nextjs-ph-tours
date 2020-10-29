import api from './Api';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_CwzbTc8IpQF13fbnh25dMeEe00qb7TWFb7');

const bookTour = async (tourId) => {
  try {
    const stripe = await stripePromise;

    const res = await api.get(`bookings/checkout-session/${tourId}`);
    await stripe.redirectToCheckout({
      sessionId: res.data.session.id,
    });
  } catch (error) {
    console.log(error.res);
    return error.res;
  }
};

export { bookTour };
