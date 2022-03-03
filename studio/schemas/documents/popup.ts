import { MdLocationOn } from 'react-icons/md'

export default {
  name: "popup",
  title: "Popup Shop",
  type: "document",
  icon: MdLocationOn,
  fieldsets: [{ name: "location", title: "Location" }],
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "streetAddress",
      title: "Street Address",
      fieldset: "location",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => Rule.required(),
      fieldset: "location",
    },
    {
      name: "state",
      title: "State",
      fieldset: "location",
      validation: (Rule) => Rule.required(),
      type: "string",
    },
    {
      name: "zipcode",
      title: "Zipcode",
      type: "string",
      fieldset: "location",
    },
    {
      name: "openingHours",
      title: "Opening Hours",
      type: "openingHours",
    },
  ],
};
