import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutStory',
  title: 'About Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Story Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required().error('Story content is required'),
    }),
    defineField({
      name: 'image',
      title: 'Story Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          description: 'Add descriptive alt text for accessibility',
          type: 'string',
          title: 'Alt text',
        },
      ],
      validation: (Rule) => Rule.required().error('Image is required'),
    }),
  ],
})
