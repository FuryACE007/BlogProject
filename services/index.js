import { request, gql } from 'graphql-request'; //allows to create graphql queries to aloow us to fetch data from the cms

export const getPosts = async () =>{
    const query= gql`
        query MyQuery {
            
        }
    `
}