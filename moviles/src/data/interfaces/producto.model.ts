export interface Producto {
    id: number,

    //Con el "?" permite que sea nulo
    title?: string,
    price: number,
    description: string,
    category: string,
    image: string,
}