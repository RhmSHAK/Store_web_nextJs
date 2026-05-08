import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

 const  productCollection=  connect("productData");


export async function GET(request, { params }) {

    const { id } = await params;
    
    const  query = { _id: new ObjectId(id) };

    const singleProduct = await productCollection.findOne(query);

    return Response.json(singleProduct)

}


export async function DELETE(request, { params }) {

    const { id } = await params;
    const  query = { _id: new ObjectId(id) };
    const deleteProduct = await productCollection.deleteOne(query);
    return Response.json(deleteProduct)
}

export async function PATCH(request, { params }) {

    const { id } = await params;
    const  query = { _id: new ObjectId(id) };

     const { title, price } = await request.json();

    const newData={
        $set: {
            title,
            price
        }
    }

    
    const updateProduct = await productCollection.updateOne(query, newData);
    return Response.json(updateProduct)
}
