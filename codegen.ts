import { CodegenConfig } from "@graphql-codegen/cli";

const contentfulSchema: CodegenConfig["schema"] = [
  {
    ["https://beta.pokeapi.co/graphql/v1beta"]: {},
  },
];

const commonPlugins: Array<string> = [
  "typescript",
  "typescript-operations",
  "typescript-graphql-request",
];

const contentfulDocuments: CodegenConfig["documents"] = [
  "lib/graphql/**/*.graphql",
];

const config: CodegenConfig = {
  generates: {
    "lib/generated/graphql.ts": {
      plugins: commonPlugins,
      schema: contentfulSchema,
      documents: contentfulDocuments,
    },
    "lib/generated/schema.graphql": {
      plugins: ["schema-ast"],
      schema: contentfulSchema,
      documents: contentfulDocuments,
    },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
};

export default config;
