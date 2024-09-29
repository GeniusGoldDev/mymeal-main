// schemas/login.js

export default {
    name: 'login',
    title: 'Login',
    type: 'document',
    fields: [
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule) => Rule.required().email(),
      },
      {
        name: 'password',
        title: 'Password',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
    ],
  };
  