export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      name: 'items',
      title: 'Ordered Items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'foodItem' }] }],
    },
    {
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Pending', 'Processing', 'Delivered'],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
