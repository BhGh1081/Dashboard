export interface menuItem {
    title: string,
    href: string
}

export type productType = {
    id: number,
    title: string,
    price: number,
    quantity: number,
    total: number,
    discountPercentage: number,
    discountedTotal: number,
    thumbnail: string
}
export type cartType = {
    id: number
    products: productType[];
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number
}

export type authType = {
    error: {
        email?: string[],
        password?: string[]
    }
}