import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutStats',
  title: 'About Stats',
  type: 'document',
  fields: [
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'number',
            title: 'Number',
            type: 'string',
            description: 'e.g., "50K+", "98%"',
            validation: (Rule) => Rule.required().error('Number is required'),
          }),
          defineField({
            name: 'label_sv',
            title: 'Label (Svenska)',
            type: 'string',
            description: 'e.g., "Active Users", "Satisfaction Rate"',
            validation: (Rule) => Rule.required().error('Label is required'),
          }),
          defineField({
            name: "label_en",
            title: "Label (English)",
            type: "string",
            validation: (Rule) =>
              Rule.required().error("English label is required"),
          })
        ],
      }],
      validation: (Rule) => Rule.required().min(1).error('At least one stat is required'),
    }),
  ],
})
