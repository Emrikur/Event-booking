import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamSection',
  title: 'Team Heading',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
  ],
})
