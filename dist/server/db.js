"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const loadEnvironment_1 = require("../loadEnvironment");
/*  const uri: string | undefined = `mongodb+srv://naveen75way:${ATLAS_PASS}@cluster0.g2gxloe.mongodb.net/?retryWrites=true&w=majority`
 */ /* console.log(envPath) */
/* const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}); */
/* const connect = async function() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log("CONNECTION SUCCESS!")

        const database = client.db('SOCIAL_DB')
        const collection = database.collection('social')
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

export default connect */
/* class Database {
    // Database instance
    private static instance: Database;
    private db: Db | null = null;

    constructor() { }
    // Function to establish connection
    async connect(dbName: string) {
        try {
            const uri: string | undefined = `mongodb+srv://naveen75way:${ATLAS_PASS}@cluster0.g2gxloe.mongodb.net/?retryWrites=true&w=majority`
            const client = new MongoClient(uri,{
                serverApi: {
                    version: ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
                }
            });
            await client.connect();
            this.db = client.db(dbName);
            console.log('Connected to MongoDB');
        } catch (err) {
            console.log('Database connection error')
        }
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    getDb() {
        if (!this.db) {
            throw new Error("Database not connected")
        }
        return this.db;
    }
} */
function connectToDatabase(databaseName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const uri = `mongodb+srv://naveen75way:${loadEnvironment_1.ATLAS_PASS}@cluster0.g2gxloe.mongodb.net/?retryWrites=true&w=majority`;
            const client = new mongodb_1.MongoClient(uri, {
                serverApi: {
                    version: mongodb_1.ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
                }
            });
            yield client.connect();
            const db = client.db('SOCIAL_DB');
            console.log('Connected to MongoDB');
            return db;
        }
        catch (error) {
            console.error(`Error connecting to MongoDB: ${error}`);
            throw new Error('Unable to connect to the database');
        }
    });
}
exports.default = connectToDatabase;
