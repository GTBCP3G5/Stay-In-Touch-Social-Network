import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
    query getPosts {
        posts {
           _id
           postText
           postAuthor
           createdAt 
        }
    }
`