import * as yup from 'yup';
import tw, { styled } from 'twin.macro';

export const signUpSchema = yup.object().shape({
  name: yup.string().required('Please provide your name'),
  email: yup
    .string()
    .email('Please input valid email')
    .required('Please provide your email'),
  password: yup.string().min(8).required('Please provide your password'),
  passwordConfirm: yup.string().min(8).required('Please confirm your password'),
});
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please input valid email')
    .required('Please provide your email'),
  password: yup.string().min(8).required('Please provide your password'),
});

export const InputField = styled.input`
  ${tw`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
  ${({ errors }) => errors && tw`border-red-500`}
`;
