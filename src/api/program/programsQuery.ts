import { gql } from "@apollo/client"

export type Program = {
  id: string
  name: string
  thumnail: {
    alt: string
    id: string
    url: string
  }
}

export const PROGRAMS_QUERY = {
  query: gql`
    query Programs {
      program(limit: 20) {
        id
        name
        thumnail {
          alt
          created_at
          id
          updated_at
          url
        }
      }
    }
  `,
}
