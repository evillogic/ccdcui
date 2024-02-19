import { MongoClient } from "mongodb";

// MongoDB connection URI
const uri = "mongodb://localhost:27017";
// Database name
const dbName = "ccdcMongo";

// Interface representing the document structure
interface MyDocument {
    name: string;
    value: number;
    // Add other fields as needed
}

// Function to insert a document
async function insertDocument(doc: MyDocument, collectionName: string = "none") {
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        
        // Insert the document into the collection
        const result = await collection.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } catch (error) {
        console.error("An error occurred while inserting the document:", error);
    } finally {
        await client.close();
    }
}

// Example usage
const myDoc: MyDocument = {
    name: "example",
    value: 42
};

//insertDocument(myDoc).catch(console.error);
