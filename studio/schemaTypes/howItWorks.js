import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'howItWorks',
  title: 'How it Works',
  type: 'document',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      description: 'Upload an icon image (SVG recommended)',
      validation: (Rule) => Rule.required().error('Icon is required'),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().error('Description is required'),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order (1, 2, 3...)',
      validation: (Rule) => Rule.required().integer().min(1).error('Order is required'),
    }),
  ],
})
