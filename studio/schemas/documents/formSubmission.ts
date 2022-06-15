export default {
  name: "formSubmission",
  title: "Form Submissions",
  type: "document",
  fields: [
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
      subtitle: "message"
    },
    prepare: ({ title, email, subtitle }) => ({
      title: `${title} - ${email}`,
      subtitle: subtitle,
    })
  }
};
