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
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('CTA title is required'),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      validation: (Rule) => Rule.required().error('CTA subtitle is required'),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => Rule.required().error('CTA button text is required'),
    }),
  ],
})
