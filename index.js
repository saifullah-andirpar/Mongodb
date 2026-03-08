const express = require ('express')
const cors = require ('cors')
const mongoose = require ('mongoose')

const app = express()
app.use(express.json())
app.use(cors())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mizi:12345@cluster0.mjrj1il.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  await client.connect ()
  const db = client.db ('Test')
  const productCollection = db.collection('Product')

  app.get('/details',async(req,res)=>{
    const id = req.query.id
    const id2 = req.query.id2 
    console.log (id)
    console.log (id2)
    const data = await productCollection.find().toArray()
    res.send(data)
  })
}
run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('Hello')
})

PORT = process.env.PORT || 5003

app.listen(PORT,()=>{
    console.log (`running form ${PORT}`)
})

mongoose.connect ("mongodb+srv://mizi:12345@cluster0.mjrj1il.mongodb.net/Test")

const userSchema = new mongoose.Schema ({
    name:String,
    age:Number
})

const userModel = new mongoose.model ('Product', userSchema, "Product")

({
    name:'Khaled',
    age:50
})
userModel.save()