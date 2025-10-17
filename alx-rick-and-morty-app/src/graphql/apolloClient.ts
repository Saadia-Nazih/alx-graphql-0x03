import { ApolloClient, InMemoryCache, HttpLink} from "@apollo/client"

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql" // L'indirizzo del server
  }),
  cache: new InMemoryCache() // Una memoria per velocizzare le richieste
})

export default client;