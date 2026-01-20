import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'team',
  title: 'Team Section',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('First name is required'),
    }),
    defineField({
      name: 'surname',
      title: 'Surname',
      type: 'string',
      validation: (Rule) => Rule.required().error('Surname is required'),
    }),
    defineField({
      name: 'initials',
      title: 'Initials',
      type: 'string',
      validation: (Rule) => Rule.required().error('Initials are required'),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required().error('Role is required'),
    }),
    defineField({
      name: 'description_sv',
      title: 'Bio/Description (Svenska)',
      type: 'text',
      validation: (Rule) => Rule.required().error('Description is required'),
    }),
    defineField({
      name: 'description_en',
      title: 'Bio/Description (English)',
      type: 'text',
      validation: (Rule) => Rule.required().error('Description is required'),
    }),
  ],
})
