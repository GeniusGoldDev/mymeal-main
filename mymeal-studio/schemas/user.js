

// schemas/user.js

export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'firebaseUid',
      title: 'Firebase UID',
      type: 'string',
      readOnly: true, // This field will be automatically populated and should be read-only
    },
  ],
};
