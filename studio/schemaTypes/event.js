import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Event title is required'),
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
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
      description: 'If no image is uploaded a default category-specific image will be used',
    }),
    defineField({
      name: 'eventDateTime',
      title: 'Event Date & Time',
      type: 'datetime',
      validation: (Rule) => Rule.required().error('Event date and time is required'),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required().error('Event location is required'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required().error('Event category is required'),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'maxParticipants',
      title: 'Max Participants',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'whatToBring',
      title: 'What to Bring',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'hostName',
      title: 'Host Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Event host name is required'),
    }),
    defineField({
      name: 'hostBio',
      title: 'Host Bio',
      type: 'text',
    }),
    defineField({
      name: 'hostAvatar',
      title: 'Host Avatar',
      type: 'string',
    }),
  ],
})
