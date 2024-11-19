import ConnectDB from "@/lib/connectDB";
import { UserModal } from "@/lib/models/UserModal";

export async function POST(req){
 await ConnectDB();

 try {
    let obj = await req.json();

    let newUser = await new UserModal({ ...obj });
    newUser = await newUser.save();

   return Response.json({
        error : false,
        msg : 'User Registered Succesfully',
        user : newUser,
    }, {status : 201})
 } 
  catch (e) {
    return Response.json({
        error : true,
        msg : 'Something Went Wrong',
    }, {status : 400})
 }
    
}

export async function GET(req){
    await ConnectDB();

    const users = await UserModal.find();
    return Response.json(
    {
      error : false,
      msg : 'Users Fetched Succesfully',
      users,
    }, {status : 200}
);
}

export async function PUT(req){}
export async function DELETE(req){}
