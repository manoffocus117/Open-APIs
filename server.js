import "dotenv/config";
import express from "express";
import cors from "cors";
import { connect_database } from "./config/database.js";
import foods_routes from "./routes/foods.routes.js";
import laptops_routes from "./routes/laptops.routes.js";
import smartphones_routes from "./routes/smartphones.routes.js";
import furniture_routes from "./routes/furniture.routes.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

await connect_database();

app.get("/", (req, res) => {
      res.send("Open APIs server is running");
});

app.use("/api/v1/foods", foods_routes);
app.use("/api/v1/laptops", laptops_routes);
app.use("/api/v1/smartphones", smartphones_routes);
app.use("/api/v1/furniture", furniture_routes);

// local development
if (process.env.NODE_ENV !== "production") {
      app.listen(port, () => {
            console.log(`server is running on port ${port}`);
      });
}

export default app;
