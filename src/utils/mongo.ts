import { MongoClient, ObjectId } from "mongodb";

// Database name
const dbName = "ccdcMongo";

// Adjusted MongoDB connection URI to include authentication details properly
const uri = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOSTNAME}:27017/${dbName}?authSource=admin`;
console.log(uri);



// Generic function to fetch documents from any collection
async function fetchDocuments(collectionName: string, query: Object = {}) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        const documents = await collection.find(query).toArray();
        return documents; // Return the fetched documents
    } catch (error) {
        console.error(`An error occurred while fetching documents from ${collectionName}:`, error);
        return []; // Return an empty array in case of error
    } finally {
        await client.close();
    }
}

// Generic function to insert a document into any collection
async function insertDocument(collectionName: string, document: Object) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        const result = await collection.insertOne(document);
        return result; // Return the result of the insertion
    } catch (error) {
        console.error(`An error occurred while inserting a document into ${collectionName}:`, error);
        return null; // Return null in case of error
    } finally {
        await client.close();
    }
}

// Specific functions for fetching teams, hosts, and services
export async function fetchTeams(query: Object = {}) {
    return await fetchDocuments("teams", query);
}

export async function fetchHosts(query: Object = {}) {
    return await fetchDocuments("hosts", query);
}

export async function fetchServices(query: Object = {}) {
    return await fetchDocuments("services", query);
}

// Specific functions for inserting teams, hosts, and services
export async function insertTeam(team: Object) {
    return await insertDocument("teams", team);
}

export async function insertHost(host: Object) {
    return await insertDocument("hosts", host);
}

export async function insertService(service: Object) {
    return await insertDocument("services", service);
}

// Example usage - uncomment and adjust the query as needed
// fetchTeams().then(console.log).catch(console.error);
// fetchHosts({ team: new ObjectId("someTeamId") }).then(console.log).catch(console.error);
// fetchServices({ host: new ObjectId("someHostId") }).then(console.log).catch(console.error);
