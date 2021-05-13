import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Characters from './components/Characters';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Characters />
        </ApolloProvider>
    );
}

export default App;
