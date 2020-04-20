import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
 
const httpLink = createHttpLink({
    //uri: "http://192.168.43.185:3001/graphql"
    uri: "http://187.237.158.13/graphql"
})

const wsLink = new WebSocketLink({
    //uri: "ws://127.0.0.1:3000/graphql",
    uri: "ws://187.237.158.13/graphql",
    options: {
        reconnect: true
    }
})

const link = split(
    ({query}) => {
        const definition = getMainDefinition(query)
        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        )
    },
    wsLink, httpLink
)

const authMiddlware = setContext((_,{headers}) => {
    const token = localStorage.getItem('token')
    return {
        headers: {
            ...headers,
            authorization: token ? `${token}`: "No autorizado"
        }
    }
})

const defaultOptions = {
    watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore"
    },
    query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all"
    }
}

const cache =  new InMemoryCache()

export const apolloClient = new ApolloClient({
    link: authMiddlware.concat(link),
    cache,
    defaultOptions,
    connectToDevTools: true
})
