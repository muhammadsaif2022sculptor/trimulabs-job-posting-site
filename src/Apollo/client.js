import { ApolloClient, InMemoryCache } from '@apollo/client';


// reference https://www.apollographql.com/docs/react/get-started
const client = new ApolloClient({
    uri: 'https://api.graphql.jobs/',
    cache: new InMemoryCache(),
  });

  export default client