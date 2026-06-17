export interface Food {
    id: string;
    name: string;
    slug: string;
    image: {
        url: string;
    };
    heroDescription: {
        html: string;
    };
    shortDescription: string;
    foodCategories: FoodCategory[];
}

export interface FoodCategory {
    id: string;
    name: string;
    slug: string;
    description: {
        html: string;
    };
    image: {
        url: string;
    }
}

export interface Restaurant {
    id: string;
    name: string;
    slug: string;
    image: {
        url: string;
    };
    description: {
        html: string;
        text: string;
    };
    foods: Food[];
}