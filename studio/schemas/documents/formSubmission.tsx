import * as React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
export default {
  name: "formSubmission",
  title: "Form Submissions",
  type: "document",
  fields: [
    {
      name: 'isResolved',
      title: 'Is Resolved?',
      type: 'boolean',
      initialValue: false
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      readOnly: true,
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      readOnly: true
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
      readOnly: true
    },
    {
      name: "message",
      title: "Message",
      type: "text",
      readOnly: true
    },
  ],

  preview: {
    select: {
      title: "name",
      email: "email",
      subtitle: "_createdAt",
      status: "isResolved"
    },
    prepare: ({ title, email, subtitle , status}) => {
      const date = new Date(subtitle)

      console.log(status)
      const EMOJIS = {
        isResolved: <AiFillCheckCircle style={{fontSize: '1.5rem', fill: 'green'}} />,
        unResolved: <MdOutlineMarkEmailUnread style={{fontSize: '1.5rem', fill: 'red', fontWeight:'bold'}} />,
      };
      return {
        title: `${title} - ${email}`,
        subtitle: `Submitted on: ${date.toLocaleDateString()}`,
        media: status ?  EMOJIS['isResolved']: EMOJIS['unResolved']
      }
    }
  }
};
