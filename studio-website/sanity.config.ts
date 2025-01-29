import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

const plugins = [structureTool()]

if (process.env.NODE_ENV === 'development') {
  const {visionTool} = await import('@sanity/vision')
  plugins.push(visionTool())
}

const config = defineConfig({
  name: 'default',
  title: 'Your Project Name',

  projectId: 'your-project-id',
  dataset: 'production',

  plugins,

  schema: {
    types: schemaTypes,
  },
})

export default config