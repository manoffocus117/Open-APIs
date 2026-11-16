import { get_database } from "../config/database.js";

const get_laptops = async (req, res) => {
      try {
            const database = get_database();
            const laptops_collection = database.collection("laptops");

            const result = await laptops_collection.find().toArray();
            res.send(result);
      } catch (error) {}
};

export default get_laptops;
