import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloclient = new ApolloClient({
  uri: 'https://api.goldsky.com/api/public/project_clzhsxd1aulmx01zzbhjb8f9y/subgraphs/friendtech-sepolia/1.0/gn',
  cache: new InMemoryCache(),
});

export default apolloclient;

//  http://localhost:8000/subgraphs/name/PariMutuelBetting

//https://api.goldsky.com/api/public/project_clzhsxd1aulmx01zzbhjb8f9y/subgraphs/name-mode-testnet/version/gn