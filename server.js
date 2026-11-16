import "dotenv/config";
import express from "express";
import cors from "cors";
import { connect_database } from "./config/database.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

await connect_database();

app.get("/api/v1/", (req, res) => {
      res.send("Open APIs server is running");
});

// local development
if (process.env.NODE_ENV !== "production") {
      app.listen(port, () => {
            console.log(`server is running on port ${port}`);
      });
}

export default app;
