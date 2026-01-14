import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'pageId',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          {title: 'Home Page', value: 'home'},
          {title: 'About Page', value: 'about'},
        ],
      },
      validation: (Rule) => Rule.required().error('Page is required'),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      validation: (Rule) => Rule.required().error('Subtitle is required'),
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          description:
            'Add descriptive alt text for accessibility. Leave empty if purely decorative.',
          type: 'string',
          title: 'Alt text',
        },
      ],
      validation: (Rule) => Rule.required().error('Background image is required'),
    }),
  ],
})
