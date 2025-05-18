import { lexicalEditor, FixedToolbarFeature, UploadFeature } from '@payloadcms/richtext-lexical'
import { RichTextAdapterProvider } from 'payload'

export const editor: RichTextAdapterProvider<any, any, any> = lexicalEditor({
  admin: {
    placeholder: 'Write content here...',
  },
  features: ({ defaultFeatures }) => [
    ...defaultFeatures.filter((data) => ['upload'].includes(data.key)),
  ],
})
