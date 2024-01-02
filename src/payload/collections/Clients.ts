import type { CollectionConfig } from 'payload/types'
import richText from '../fields/richText'

const Clients: CollectionConfig = {
  slug: 'clients',
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

export default Clients
