import path from 'path'
import type { CollectionConfig } from 'payload/types'

export const Contracts: CollectionConfig = {
  slug: 'contracts',
  upload: {
    staticDir: path.resolve(__dirname, '../../../contracts'),
    mimeTypes: ['application/pdf'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'relatedClient',
      type: 'relationship',
      relationTo: 'clients',
      hasMany: false,
      required: true,
    },
    {
      name: 'relatedEvent',
      type: 'relationship',
      relationTo: 'events',
      hasMany: true,
      required: true,
    },
  ],
}
