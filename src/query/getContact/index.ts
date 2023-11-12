import { gql } from "@apollo/client";

const GET_CONTACT = gql`
  query GET_CONTACT {
    contact {
        created_at
        first_name
        id
        last_name
        phones {
            number
        }
    }
}`;

export default GET_CONTACT;