import qs from 'qs';
import axios from 'axios';

export type PaymentType = {
  appointmentId: string;
  appointmentName: string;
  price: string;
  paymentId?: string;
  paymentMethod?: string;
  email?: string;
  name?: string;
  createToast?: any;
  clientSecret?: string;
  done: any;
};

const token =
  'Bearer sk_test_51J8hJ1HOUefBe0xwQGnhxP5vTD5KfnnR7MJDQh0JdM5o6rJ46Z7XsCUZ7HL5jy8FCalrXqDEmxqL8zAgQBhnLWim00LbEy0JdS';
const publicKey =
  'pk_test_51J8hJ1HOUefBe0xw2JCZmcGDGPgR8fwuGChF0HKgCGqjmIRjcgVrybQhXOwI9XXJ3MuZPKrPANlcpYNMIKAhmB2T001QhHT6nh';
const account = 'acct_1J8hJ1HOUefBe0xw';

const type = 'card';
const cardNumber = '4242424242424242';
const cardCVC = '424';
const cardExpMonth = '04';
const cardExpYear = '24';

const confirmPayment = ({ name, email, paymentId, clientSecret, paymentMethod, createToast, done }: PaymentType) => {
  const data = qs.stringify({
    receipt_email: email,
    payment_method: paymentMethod,
    key: publicKey,
    _stripe_account: account,
    // client_secret: clientSecret,
  });
  const configBody: any = {
    method: 'post',
    url: `https://api.stripe.com/v1/payment_intents/${paymentId}/confirm`,
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: data,
  };

  axios(configBody).then((response: any) => {
    createToast({ message: 'Thanh toán thành công!' });
    done();
  });
};

const paymentIntent = (payment: PaymentType) => {
  const { price, appointmentId, appointmentName, email } = payment;
  const data = qs.stringify({
    amount: price,
    currency: 'eur',
    'payment_method_types[]': type,
    'metadata[appointment_id]': appointmentId,
    'metadata[type]': 'appointment',
    'metadata[product_name]': appointmentName,
    receipt_email: email,
  });
  const configBody: any = {
    method: 'post',
    url: 'https://api.stripe.com/v1/payment_intents',
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: data,
  };

  axios(configBody).then((response: any) => {
    confirmPayment({ ...payment, clientSecret: response.data.client_secret, paymentId: response.data.id });
  });
};

const createPaymentMethod = (payment: PaymentType) => {
  var axios = require('axios');
  var qs = require('qs');
  var data = qs.stringify({
    type: 'card',
    'card[number]': cardNumber,
    'card[cvc]': cardCVC,
    'card[exp_month]': cardExpMonth,
    'card[exp_year]': cardExpYear,
    _stripe_account: account,
    key: publicKey,
  });
  var config = {
    method: 'post',
    url: 'https://api.stripe.com/v1/payment_methods',
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: data,
  };

  axios(config)
    .then((response: any) => {
      const data = response.data;
      paymentIntent({ ...payment, paymentMethod: data.id });
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export const pay = (payment: PaymentType) => {
  createPaymentMethod(payment);
};
