import { GraphQLClient, RequestMiddleware } from "graphql-request";

import { getSdk } from "./generated/graphql";

const requestMiddleware: RequestMiddleware = async (request) => {
  // Compress GraphQL request body preventing QUERY_TOO_BIG error
  // https://www.contentful.com/developers/docs/references/graphql/#/introduction/query-complexity-limits
  const bodyAsJSON = JSON.parse(request.body?.toString() || "");
  const body = JSON.stringify(bodyAsJSON);

  return {
    ...request,
    body,
  };
};

const graphQlClient = new GraphQLClient(
  "https://beta.pokeapi.co/graphql/v1beta",
  {
    requestMiddleware,
  }
);

export const createClient = (preview = false) => {
  return getSdk(graphQlClient);
};
