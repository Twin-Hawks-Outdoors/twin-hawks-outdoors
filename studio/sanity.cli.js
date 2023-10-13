import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "rur2issm",
    dataset: "development",
  },
  graphql: [
    {
      playground: true,
      tag: "experiment",
      id: "schema-development",

    },
  ],
});

