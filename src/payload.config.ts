// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'

import { Users } from './payload/collections/Users'
import { Media } from './payload/collections/Media'
import { env } from '@/env'
import { Posts } from './payload/collections/posts/Posts'
import { editor } from './payload/configs/editor'
import { Categories } from './payload/collections/categories/Categories'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      title: 'Ink Jar',
      description: 'A blogging platform for artists and creatives.',
      titleSuffix: ' | Ink Jar',
    },
  },
  collections: [Users, Media, Categories, Posts],
  editor,
  secret: process.env.PAYLOAD_SECRET!,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: env.DATABASE_URI,
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    s3Storage({
      bucket: env.AWS_S3_BUCKET,
      config: {
        credentials: {
          accessKeyId: env.AWS_ACCESS_KEY_ID,
          secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
        },
        region: env.AWS_REGION,
      },
      collections: {
        media: true,
      },
    }),
  ],
})
