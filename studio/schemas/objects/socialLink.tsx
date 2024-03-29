import { ReactElement } from "react";
import * as React from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin, FaRegQuestionCircle, FaSnapchat, FaYoutube } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";

interface IconArrayProps {
  [key: string]: ReactElement;
}
export default {
  title: "Social Link",
  name: "socialLink",
  type: "object",
  fields: [
    {
      title: "Platform",
      name: "platform",
      type: "string",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Facebook", value: "facebook" },
          { title: "Twitter", value: "twitter" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "Instagram", value: "instagram" },
          { title: "SnapChat", value: "snapchat" },
          { title: "Youtube", value: "youtube" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      title: "Url",
      name: "url",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "platform",
    },
    prepare: ({
      title,
    }: {
      title: string;
    }): { title: string; media: ReactElement } => {
      const iconArray: IconArrayProps = {
        facebook: <GrFacebook />,
        twitter: <AiFillTwitterCircle />,
        linkedin: <FaLinkedin />,
        instagram: <AiFillInstagram />,
        snapchat: <FaSnapchat />,
        youtube: <FaYoutube />
      };

      return {
        title: title
          ? title.charAt(0).toUpperCase() + title.slice(1)
          : "Please choose a link",
        media: title ? iconArray[title] : <FaRegQuestionCircle />,
      };
    },
  },
};
