import "dotenv";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

let database;

const connect_database = async () => {
      try {
            await client.connect();
            database = client.db("Open_APIs");
            console.log("MongoDB connected");
      } catch (error) {
            console.log("MongoDB connection failed:", error);
      }
};

const get_database = () => {
      if (!database) {
            throw new Error("Database is not connected");
      }
      return database;
};

export { connect_database, get_database };
