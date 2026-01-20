import { dbConnect } from "@/provider/dbConnect";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";
const userList = [
    {name:'abc',password:'1234'},
    {name:'xyz',password:'5678'},
]




export const authOptions = {
  providers: [
     CredentialsProvider({
    //  sign in form 
    name: 'Sign in with name password',
   
    credentials: {
      email: { label: "email", type: "email", placeholder: "enter email" },
      password: { label: "Password", type: "password", placeholder: "******" },
      
    
    },
    async authorize(credentials, req) {
    const {email,password}=credentials;
    //  const user = userList.find((u)=>u.name == username);
    const user = await (await dbConnect('users')).findOne({email})
     if(!user) return null;
     const isPasswordOk = await bcrypt.compare(password,user.password)
     if(isPasswordOk){
      return user;
     } 



        //   my own login logic
      return null
    }
  })
    // ...add more providers here
  ],
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
