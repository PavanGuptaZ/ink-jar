import { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: 'Category',
    plural: 'Categories',
  },
  timestamps: true,
  admin: {
    group: 'Content',
    description: 'Categories are used to group posts together.',
    useAsTitle: 'name',
    meta: {
      title: 'Categories',
      description: 'Categories are used to group posts together.',
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
      admin: {
        description: 'The title of the category.',
      },
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      required: true,
      admin: {
        description: 'The description of the category.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      // required: true,
      admin: {
        description: 'The image of the category.',
      },
    },
    {
      name: 'posts',
      type: 'join',
      collection: 'posts',
      on: 'category',
      hasMany: true,
      admin: {
        description: 'The posts of the category.',
        allowCreate: false,
      },
    },
  ],
}
