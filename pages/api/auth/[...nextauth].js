import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

export default NextAuth({
    providers:[
        AzureADProvider({
            clientId: "65d13d38-76b9-4566-aa55-25ea6edab93d",
            clientSecret: "bEI7Q~b0hZpS0_N2Ngs9sTKXkE0kvD~6DWP8y",
            tenantId: "99c7da52-56fc-49ca-aa95-8f7fb09c995e"
        }) 
    ]
})