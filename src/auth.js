import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import ConnectDB from "./lib/connectDB";
import UserModal from "./lib/models/UserModal";



 async function handleLogin(obj){
  await ConnectDB();
  console.log("connect dtod db")
  const user = await UserModal.findOne({email : obj.email})
  console.log("user=>",user)
  if (user) {
    return user;
  }else{
    let newUser = await UserModal(obj);
    newUser = await newUser.save();
    return newUser;
  }
 }


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],

  callbacks: {
    async signIn({ account, profile }) {
      try {
        if (account.provider === "google") {
             console.log('account=>',account);
             console.log('profile=>',profile);
           
           let object = {
             firstName: profile.given_name,
             lastName: profile.family_name,
             email: profile.email,
             picture: profile.picture,
           }  
           const user = await handleLogin(object) 
        }
        return true 
        
      } catch (error) {
        console.log('error', error)
        return false;
      }
    },
  },

})
