import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client"

export function getApolloClient(): ApolloClient<NormalizedCacheObject> {
  const client = new ApolloClient({
    uri: "https://tf1-interview.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    ssrMode: true,
  })

  return client
}
