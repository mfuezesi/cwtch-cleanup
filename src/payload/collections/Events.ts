import type { CollectionConfig } from 'payload/types'
import richText from '../fields/richText'
import { slateEditor } from '@payloadcms/richtext-slate'

const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'dateFrom',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'eee / dd-MM-yy / HH:mm',
        },
      },
    },
    {
      name: 'dateTo',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'eee / dd-MM-yy / HH:mm',
        },
      },
    },
    {
      name: 'status', // required
      type: 'radio', // required
      options: [
        // required
        {
          label: 'Canceled',
          value: 'canceled',
        },
        {
          label: 'Request',
          value: 'request',
        },
        {
          label: 'Approved',
          value: 'approved',
        },
        {
          label: 'Invoice',
          value: 'invoice',
        },
        {
          label: 'Paid',
          value: 'paid',
        },
      ],
      defaultValue: 'request', // The first value in options.
      admin: {
        //layout: 'horizontal',
        position: 'sidebar',
      },
    },
    {
      name: 'isPrivate',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'showKitchen',
      label: 'Client wanna see kitchen before.',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'needsInstructions',
      label: 'Client needs instructions.',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'relatedClient',
      type: 'relationship',
      relationTo: 'clients',
      hasMany: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'relatedCleaner',
      type: 'relationship',
      relationTo: 'cleaners',
      hasMany: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'relatedMember',
      type: 'relationship',
      relationTo: 'members',
      hasMany: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'notes',
      type: 'richText',
      editor: slateEditor({
        admin: {
          elements: ['link'],
        },
      }),
    },
    {
      name: 'relatedContract',
      type: 'upload',
      relationTo: 'contracts',
    },
    {
      name: 'price',
      type: 'number',
      admin: {
        step: 1,
        position: 'sidebar',
      },
      access: {
        read: ({ req }) => req.user,
      },
    },
  ],
}

export default Events
