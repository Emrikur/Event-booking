import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutMission',
  title: 'About Mission',
  type: 'document',
  fields: [
    defineField({
      name: 'title_sv',
      title: 'Title (Svenska)',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'title_en',
      title: 'Title (English)',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'description_sv',
      title: 'Description (Svenska)',
      type: 'text',
      validation: (Rule) => Rule.required().error('Description is required'),
    }),
    defineField({
      name: 'description_en',
      title: 'Description (English)',
      type: 'text',
      validation: (Rule) => Rule.required().error('Description is required'),
    }),

  ],
})
