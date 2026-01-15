import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'document',
  fields: [
    defineField({
      name: 'pageId',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          {title: 'Host Event (Home)', value: 'host-event'},
          {title: 'Join Community (About)', value: 'join-community'},
        ],
      },
      validation: (Rule) => Rule.required().error('Page is required'),
    }),
    defineField({
      name: 'title_en',
      title: 'Title (English)',
      type: 'string',
      validation: (Rule) => Rule.required().error('CTA title is required'),
    }),
    defineField({
      name: 'title_sv',
      title: 'Title (Swedish)',
      type: 'string',
      validation: (Rule) => Rule.required().error('CTA title is required'),
    }),
    defineField({
      name: 'subtitle_en',
      title: 'Subtitle (English)',
      type: 'text',
      validation: (Rule) => Rule.required().error('CTA subtitle is required'),
    }),
    defineField({
      name: 'subtitle_sv',
      title: 'Subtitle (Svenska)',
      type: 'text',
      validation: (Rule) => Rule.required().error('CTA subtitle is required'),
    }),
    defineField({
      name: 'buttonText_en',
      title: 'Button Text (English)',
      type: 'string',
      validation: (Rule) => Rule.required().error('CTA button text is required'),
    }),
    defineField({
      name: 'buttonText_sv',
      title: 'Button Text (Svenska)',
      type: 'string',
      validation: (Rule) => Rule.required().error('CTA button text is required'),
    }),
  ],
})
