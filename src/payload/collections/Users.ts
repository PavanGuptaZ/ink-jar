import { validateWithZod } from '@/utils/functions/zodValidator'
import type { CollectionConfig, HookOperationType } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'username',
    meta: {
      title: 'Users',
      description: 'Users are the people who create content on your site.',
    },
  },
  auth: {
    loginWithUsername: {
      requireEmail: false,
      requireUsername: true,
      allowEmailLogin: false,
    },
  },
  timestamps: true,
  fields: [
    {
      name: 'username',
      type: 'text',
      label: 'Username',
      unique: true,
      required: true,
      validate: (value: any) => validateWithZod('userName', value),
      admin: {
        description: 'Username is a unique identifier for the user.',
      },
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
      unique: true,
      required: true,
      validate: (value: any) => validateWithZod('phoneNumber', value),
    },
  ],
}
