import { MdOutlineCategory } from "react-icons/md";
import { slugWithType } from "../../lib/slugWithType";

export default {
  name: 'category',
  title: 'Category',
  icon: MdOutlineCategory,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    slugWithType('category', 'title'),
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
