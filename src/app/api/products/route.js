// import  product  from "../../../data/shop.json"
// import { products } from "../route"

import { connect } from "@/app/lib/dbConnect";

 const  productCollection=  connect("productData");

export async function GET(request) {
   
    const allProducts = await productCollection.find().toArray();

    return Response.json(allProducts)
}

export async function POST(request) {
  try {

    const data = await request.json();

    const result = await productCollection.insertOne(data);

    return Response.json({
      success: true,
      message: "Product added successfully",
      insertedId: result.insertedId,
    });

  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}