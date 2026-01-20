const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.NEXT_URI;
const dbName = process.env.DB_NAME
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
export const dbConnect = async(collectionName)=>{
    try{
const Alldb = client.db(dbName)
return Alldb.collection(collectionName)
    }
    catch(e){
        console.log(e)
    }
}