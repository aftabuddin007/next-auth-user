import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

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
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password", placeholder: "******" },
      secretCode: { label: "secret code", type: "number", placeholder:'enter code'}
    
    },
    async authorize(credentials, req) {
    const {username,password,secretCode}=credentials;
     const user = userList.find((u)=>u.name == username);
     if(!user) return null;
     const isPasswordOk = user.password==password;
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
