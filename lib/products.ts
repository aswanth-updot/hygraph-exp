import hygraphClient, { gql } from "./hygraph-client";
import { Product } from "./types";

export async function allProducts(categoryId?: string) {
    const query = gql`query GetAllProducts($where: ProductWhereInput) {
      products(where: $where)
      {
        productName
        id
        slug
        thumbnail{
          url
        }
        price
        quantity
        productCategories{
         name
         id
        }
        description{
          html
        }
      }
    }
      `;
    const variables = {
        where: categoryId
            ? { productCategories_some: { id: categoryId } }
            : undefined,
    };

    try {
        const { products } = await hygraphClient.request(query, variables) as { products: Product[]; };
        return products;
    } catch (error) {
        console.log(error);
    }
}

export async function getProductBySlug(slug: string, preview = true) {
    const query = gql`
    query GetSingleProduct($slug: String!, $stage: Stage!) {
      product(where: {slug: $slug}, stage: $stage) {
        productName
        id
        slug
        thumbnail{
          url
        }
        price
        quantity
        productCategories{
         name
         id
        }
        description{
          html
        }
      }
}

      `;
    try {
        if (preview) hygraphClient.setHeader('Authorization', `Bearer ${process.env.HYGRAPH_DEV_AUTH_TOKEN}`);

        let { product } = await hygraphClient.request(query, { slug, stage: preview ? 'DRAFT' : 'PUBLISHED' }) as { product: Product; };

        return product;
    } catch (error) {
        console.log(error);
    }
}