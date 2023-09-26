import { LogoProps, defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schema from "./schemas/schema";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";


function CustomLogo(props: LogoProps) {
	return (
		<div style={{padding: 12, display: 'flex', alignItems: "center", gap: 12}}>
			<img width={75} height={75} src="/static/logo-inverted.svg" alt="" />
			<h3>Dashboard</h3>
		</div>
	)
}
export default defineConfig({
  title: "Twin Hawks Outdoors",
  projectId: "rur2issm",
  dataset: "development",
  plugins: [deskTool(),  media(), visionTool()],
  tools: (prev) => {
    if (import.meta.env.DEV) {
      return prev;
    }
    return prev.filter((tool) => tool.name !== "vision");
  },
  schema: {
    types: schema,
  },
	studio: {
		components:{
			logo: CustomLogo
		}
	},
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
			console.log({prev, creationContext})
      if (creationContext.type === "global") {
        return prev.filter(
          (templateItem) => templateItem.templateId != "siteConfig"
        );
      }
      return prev;
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === "siteConfig") {
        return prev.filter(
          ({ action }) => !["unpublish", "delete", "duplicate"].includes(action)
        );
      }
      return prev;
    },
  },
});
