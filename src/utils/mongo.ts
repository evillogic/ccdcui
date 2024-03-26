import { MongoClient, ObjectId } from "mongodb";
import { Team, Host, Service, Template } from "./types";

// Database name
const dbName = "ccdcMongo";

// Adjusted MongoDB connection URI to include authentication details properly
const uri = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOSTNAME}:27017/${dbName}?authSource=admin`;
console.log(uri);


// Generic function to handle documents from any collection
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

// Generic function to delete a document from any collection
async function deleteDocument(collectionName: string, document: Object) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        const result = await collection.deleteOne(collectionName);
        return result;
    } catch (error) {
        console.error(`An error occured while deleting a document from ${collectionName}:`, error);
        return null;
    } finally {
        await client.close();
    }
}

// Specific functions for fetching teams, hosts, and services
export async function fetchTeams(query: Object = {}) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection<Team>("teams");
        const teams = await collection.find(query).toArray();
        return teams; // Return the fetched teams
    } catch (error) {
        console.error(`An error occurred while fetching teams:`, error);
        return []; // Return an empty array in case of error
    } finally {
        await client.close();
    }
}

export async function fetchHosts(query: Object = {}) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection<Host>("hosts");
        const hosts = await collection.find(query).toArray();
        return hosts; // Return the fetched hosts
    } catch (error) {
        console.error(`An error occurred while fetching hosts:`, error);
        return []; // Return an empty array in case of error
    } finally {
        await client.close();
    }
}

export async function fetchServices(query: Object = {}) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection<Service>("services");
        const services = await collection.find(query).toArray();
        return services; // Return the fetched services
    } catch (error) {
        console.error(`An error occurred while fetching services:`, error);
        return []; // Return an empty array in case of error
    } finally {
        await client.close();
    }
}

export async function fetchReports(query: Object = {}) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection<Report>("reports");
        const reports = await collection.find(query).toArray();
        return reports;
    } catch (error) {
        console.error(`An error occured while fetching reports:`, error);
        return [];
    } finally {
        await client.close();
    }
}

export async function fetchTemplates(query: Object = {}) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection<Template>("templates");
        const templates = await collection.find(query).toArray();
        return templates;
    } catch (error) {
        console.error(`An error occured while fetch templates:`, error);
        return [];
    } finally {
        await client.close();
    }
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

export async function insertReport(report: Object) {
    return await insertDocument("reports", report);
}

export async function insertTemplate(template: Object) {
    return await insertDocument("templates", template);
}

// Functions to delete types in the database
export async function deleteReport(report: Object) {
    return await deleteDocument("reports", report);
}

export async function deleteTemplate(template: Object) {
    return await deleteDocument("templates", template);
}

// Example usage - uncomment and adjust the query as needed
// fetchTeams().then(console.log).catch(console.error);
// fetchHosts({ team: new ObjectId("someTeamId") }).then(console.log).catch(console.error);
// fetchServices({ host: new ObjectId("someHostId") }).then(console.log).catch(console.error);
