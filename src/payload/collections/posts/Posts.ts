import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Post',
    plural: 'Posts',
  },
  timestamps: true,
  admin: {
    group: 'Content',
    description: 'Posts are the main content of your blog.',
    useAsTitle: 'title',
    meta: {
      title: 'Posts',
      description: 'Posts are the main content of your blog.',
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      admin: {
        description: 'The Headline of the post.',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'content',
              type: 'richText',
              label: 'Content',
              required: true,
              admin: {
                description: 'The content of the post.',
              },
            },
          ],
        },
        {
          label: 'Category and Tags',
          fields: [
            {
              name: 'category',
              type: 'relationship',
              relationTo: 'categories',
              required: true,
              admin: {
                description: 'The category of the post.',
                allowCreate: false,
              },
            },
            {
              name: 'tag',
              type: 'text',
              label: 'Tag',
              hasMany: true,
              required: true,
              admin: {
                description: 'Type the tag and press enter.',
              },
            },
          ],
        },
        {
          label: 'Image',
          fields: [
            {
              name: 'image',
              label: 'Featured Image',
              type: 'upload',
              relationTo: 'media',
              // required: true,
              admin: {
                description: 'The  featured image of the post.',
              },
            },
          ],
        },
      ],
    },
  ],
}
