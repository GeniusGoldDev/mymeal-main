// schemas/restaurant.js

export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the restaurant',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      description: 'The city where the restaurant is located',
    },
    {
      name: 'cuisine',
      title: 'Cuisine',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The cuisines offered by the restaurant (e.g., Italian, Indian, etc.)',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'The rating of the restaurant (e.g., 4.5, 5.0)',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The image of the restaurant',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
      description: 'The website of the restaurant',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'The phone number of the restaurant',
    },
  ],
};
