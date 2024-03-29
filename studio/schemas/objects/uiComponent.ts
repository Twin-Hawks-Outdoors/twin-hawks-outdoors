import { BsCalendar2Event } from "react-icons/bs";

import { CgComponents } from "react-icons/cg";
import { GrContact } from "react-icons/gr";
export default {
  type: "object",
  name: "uiComponentRef",
  title: "UI Component",
  icon: CgComponents,
  fields: [
    {
      description: "This is for adding a reference to specific UI components.",
      type: "string",
      name: "name",
      title: "Render Component",
      options: {
        list: [
          { title: "Contact Form", value: "contactForm" },
          { title: "Upcoming Events", value: "eventList" },
          { title: "All Products", value: "productList" },
          { title: "Newsletter Signup", value: "newsletterSignup" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
  ],
  preview: {
    select: {
      title: "name",
    },
    prepare({ title, subtitle }) {
      const media = title === "eventList" ? BsCalendar2Event : GrContact;

      return {
        title: title,
        media,
      };
    },
  },
};
