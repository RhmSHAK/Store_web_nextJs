
export const  products = [
    {
        id: 1,
        name: "Product 1",
        price: 10.99
    },
    {
        id: 2,
        name: "Product 2",
        price: 15.99
    }
];

import  product  from "../../data/shop.json"

export async function GET(request) {

    // return Response.json({
    //     status: "success",
    //     message: "API is working",
        
    // })
    return Response.json(product)
}