import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'EventHub',

  projectId: 'mxu32qgu',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    productionUrl: async (prev, context) => {
      const {document} = context

      if (document._type === 'event' && document.slug?.current) {
        return `http://localhost:5173/events/${document.slug.current}?preview=true`
      }

      return prev
    },
  },
})
