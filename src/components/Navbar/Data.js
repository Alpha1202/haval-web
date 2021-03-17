/* eslint-disable import/prefer-default-export */
export const navBarItems = [
  {
    name: 'SIGN UP',
    route: '/sign-up',
    primary: true,
    type: 'signup',
    obj: [
      {
        name: 'email',
        placeholder: 'E-mail address',
        size: 'full',
        type: 'input'
      },
      {
        name: 'username',
        placeholder: 'Username',
        size: 'full',
        type: 'input'
      },
      {
        name: 'password',
        placeholder: 'Password',
        size: 'full',
        type: 'input'
      },
      {
        name: 'gender',
        placeholder: 'Gender',
        size: 'half',
        type: 'input'
      },
      {
        name: 'age',
        placeholder: 'Age',
        size: 'half',
        type: 'input'
      },
      {
        name: 'country',
        placeholder: 'Country',
        size: 'half',
        type: 'dropdown'
      },
      {
        name: 'state',
        placeholder: 'State',
        size: 'half',
        type: 'dropdown'
      },
      {
        name: 'signup',
        placeholder: 'Sign up',
        // size: 'full',
        type: 'button'
      },
    ]
  },
  {
    name: 'LOG IN',
    route: '/login',
    primary: false,
    type: 'login',
    obj : [
      {
        name: 'email',
        placeholder: 'e-mail address/Username',
        size: 'full',
        type: 'input'
      },
      {
        name: 'password',
        placeholder: 'Password',
        size: 'full',
        type: 'input'
      },
      {
        name: 'login',
        placeholder: 'Log In',
        // size: 'full',
        type: 'button'
      },
    ]
  },
];
