export interface Product {
    id: string;
    productName: string;
    slug: string;
    thumbnail: {
        url: string;
    };
    description: {
        html: string;
    };
    price: string;
    quantity: string;
    productCategories: ProductCategories[];
}

export interface ProductCategories {
    id: string;
    name: string;
}