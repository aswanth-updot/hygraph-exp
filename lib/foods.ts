import { gql } from "graphql-request";
import hygraphClient from "./hygraph-client";
import { Food } from "./types";

export async function allFood(categorySlug?: string) {
    const query = gql`query GetAllFood($where: FoodWhereInput) {
      foods(where: $where)
      {
        name
        id
        slug
        image{
          url
        }
        foodCategories{
         name
         id
         slug
        }
        heroDescription{
          html
        }
        shortDescription
      }
    }
      `;
    const variables = {
        where: categorySlug
            ? { foodCategories_some: { slug: categorySlug } }
            : undefined,
    };

    try {
        const { foods } = await hygraphClient.request(query, variables) as { foods: Food[]; };
        return foods;
    } catch (error) {
        console.log(error);
    }
}

export async function getFoodBySlug(slug: string) {
    const query = gql`
    query GetFood($slug: String!) {
      food(where: {slug: $slug}) {
        name
        id
        slug
        image{
          url
        }
        foodCategories{
         name
         id
         slug
        }
        heroDescription{
          html
        }
        shortDescription
      }
}

      `;
    try {
        hygraphClient.setHeader('Authorization', `Bearer ${process.env.HYGRAPH_DEV_AUTH_TOKEN}`);
        const { food } = await hygraphClient.request(query, { slug, stage: 'PUBLISHED' }) as { food: Food; };
        return food;
    } catch (error) {
        console.log(error);
    }
}