import hygraphClient, { gql } from "./hygraph-client";
import { FoodCategory } from "./types";

export async function allCategories() {
    const query = gql`query GetAllCategories {
       foodCategories{
         name
         id
         slug
         image{
           url
         }
       }
    }
      `;

    try {
        const { foodCategories } = await hygraphClient.request(query) as { foodCategories: FoodCategory[]; };
        return foodCategories;
    } catch (error) {
        console.log(error);
    }
}

export async function getCategoryBySlug(slug: string) {
    const query = gql`
    query GetCategory($slug: String!) {
      foodCategory(where: {slug: $slug}) {
        name
        id
        slug
        image{
          url
        }
        description{
          html
        }
      }
}

      `;
    try {
        hygraphClient.setHeader('Authorization', `Bearer ${process.env.HYGRAPH_DEV_AUTH_TOKEN}`);
        const { foodCategory } = await hygraphClient.request(query, { slug, stage: 'PUBLISHED' }) as { foodCategory: FoodCategory; };
        return foodCategory;
    } catch (error) {
        console.log(error);
    }
}