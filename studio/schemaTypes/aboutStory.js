import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutStory',
  title: 'About Story',
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
      name: 'subheading_sv',
      title: 'Subheading (Svenska)',
      type: 'string',
    }),
    defineField({
      name: 'subheading_en',
      title: 'Subheading (English)',
      type: 'string',
    }),
    defineField({
      name: 'content_sv',
      title: 'Story Content (Svenska)',
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
      name: 'content_en',
      title: 'Story Content (English)',
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
