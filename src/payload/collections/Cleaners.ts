import type { CollectionConfig } from 'payload/types'

const Cleaners: CollectionConfig = {
  slug: 'cleaners',
  admin: {
    useAsTitle: 'firstname',
    defaultColumns: ['firstname', 'secondname', 'isActive', 'email'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'firstname',
      label: 'Firstname or Business',
      type: 'text',
      required: true,
    },
    {
      name: 'secondname',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Contact Email Address',
      required: true,
    },
    {
      name: 'telefon',
      type: 'text',
    },
    {
      name: 'address',
      type: 'text',
    },
    {
      name: 'plz',
      type: 'text',
    },
    {
      name: 'city',
      type: 'text',
    },
  ],
}

export default Cleaners
