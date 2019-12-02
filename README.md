1. Prerequisite
    - To Learn About how GraphQL works follow this link – https://www.apollographql.com/docs/tutorial/schema/
    - Learn about Query and Mutation
      To get the quick overview about query and mutation check NodeJS-GraphQL documentation.

2. Changes in the react-native-template
    - There won’t be much changes to the existing template.
    - Add following packages which will be helpful for graphql
        - apollo-boost
        - graphql
        - graphql-tag
    - Now, make following changes in the template
        - Get baseUrl and set in the respective environment’s file
        - Now in apiUtils.js add these lines
    ```
    const client = new ApolloClient({
      //Assign your link with a new instance of a HttpLink linking to your graphql server.
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: Config.API_URL
      })
    });
    
    ```         
    - Now change the code of getApiClient and generateApiClient
    ```
    export const getApiClient = (type = 'configApi') => client
    export const generateApiClient = (type = 'configApi') => {
      return client;
    }
    ```
3. Now to make the graphql call to manipulate the data
    - To read data using graphql client
    ```
        client.query({
            query: gql`query GetUsers($offset: Int!, $limit: Int!){
                users(offset: $offset, limit: $limit) {
                    id
                    name
                    payments {
                        id
                        name
                    }
                }
            }`,
            variables: {
              offset,
              limit
            }
          }).catch((error) => {
            console.log(error);
            return error;
          });

    ```
    - In GraphQL, Query is used to read data and Mutation to modify the data.
    - Query and Mutation is nothing but graphql funtions.
    - So here GetUsers is a query function in graphql, pass parameters as per graphql query (To check the graphql docs run graphql playground, it will have the required parameters and relationships)
    - Now, here we cannot pass the parameters to gql. So, to pass the parameters there is a separate block for it, variables. Make sure variables have the exact same name and order as Query function (in our case GetUsers)
    - GraphQL have 7 network status
        - Each networkStatus is explained here - https://github.com/apollographql/apollo-client/blob/master/packages/apollo-client/src/core/networkStatus.ts
4. Query is to read the data.
5. Now Mutation, Mutation is to modify data (create/update/delete).
6. Usage of mutation is same as query
    - Example
    ```
        export const createUser = (name, email, password) => {
          return client.mutate({
            mutation: gql`mutation CreateUser($name: String!, $email: String!, $password: String!){
                createUser(name: $name, email: $email, password: $password) {
                    id
                    name
                    orders {
                        id
                        name
                        complains {
                            id
                            name
                        }
                    }
                    addresses {
                        id
                        name
                        pincode
                    }
                    payments {
                        id
                        name
                    }
                }
            }`,
            variables: {
              name,
              email,
              password
            }
          }).catch((error) => {
            console.log(error);
            return error;
          });
        }

    ```
    - Here variable rules are same, but in mutation you have to define what you want in return. Here I have mentioned the fields which I need after the creation of the user.
    - In Mutation client won’t return networkStatus, we have to decide based on the response.data.
7. You can find all the mutation and queries documentation in graphql playground.
8. That’s it, everything else remains same. Saga, reduxsauce, react-redux everything is same. We are just replacing axios or any api client with graphql client.

