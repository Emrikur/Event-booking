import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamSection',
  title: 'Team Heading',
  type: 'document',
  fields: [
    defineField({
      name: 'title_sv',
      title: 'Section Title (Svenska)',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'title_en',
      title: 'Section Title (English)',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
  ],
})
