import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'mymeal-studio',

  projectId: 'xtayjuwp',
  dataset: 'production',

  CORS: [
    'https://my-meal100.netlify.app/'
  ],

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
