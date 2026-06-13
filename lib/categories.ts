import hygraphClient, { gql } from "./hygraph-client";
import { ProductCategories } from "./types";

export async function allCategories() {
    const query = gql`query GetAllCategories {
       productCategories{
         name
         id
       }
    }
      `;

    try {
        const { productCategories } = await hygraphClient.request(query) as { productCategories: ProductCategories[]; };
        return productCategories;
    } catch (error) {
        console.log(error);
    }
}