import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const plugins = [structureTool()]

if (process.env.NODE_ENV === 'development') {
  plugins.push(visionTool())
}

export default defineConfig({
  name: 'default',
  title: 'Your Project Name',

  projectId: 'your-project-id',
  dataset: 'production',

  plugins,

  schema: {
    types: schemaTypes,
  },
})