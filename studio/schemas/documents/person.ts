import { MdPerson } from 'react-icons/md'

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'figure',
    },

  ],
}
