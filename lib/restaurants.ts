import hygraphClient, { gql } from "./hygraph-client";
import { Restaurant } from "./types";

export async function allRestaurants(foodSlug?: string) {
    const query = gql`query GetAllFood($where: RestaurantWhereInput) {
      restaurants(where: $where)
      {
        name
        id
        slug
        image{
          url
        }
        description{
          html
          text
        }
        foods{
          id
          slug
          name
        }
      }
    }
      `;
    const variables = {
        where: foodSlug
            ? { foods_some: { slug: foodSlug } }
            : undefined,
    };

    try {
        const { restaurants } = await hygraphClient.request(query, variables) as { restaurants: Restaurant[]; };
        return restaurants;
    } catch (error) {
        console.log(error);
    }
}