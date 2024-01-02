import type { CollectionConfig } from 'payload/types'
import richText from '../fields/richText'

const Members: CollectionConfig = {
  slug: 'members',
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
      type: 'text',
    },
    {
      name: 'secondname',
      type: 'text',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
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
    {
      name: 'dateJoin',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyy',
        },
      },
    },
    {
      name: 'dateLeft',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyy',
        },
      },
    },
  ],
}

export default Members
