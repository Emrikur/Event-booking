export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
