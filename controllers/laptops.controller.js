import { ObjectId } from "mongodb";
import { get_database } from "../config/database.js";

const get_laptops = async (req, res) => {
      try {
            const database = get_database();
            const laptops_collection = database.collection("laptops");

            const result = await laptops_collection.find().toArray();
            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to get laptops",
                  error: error.message,
            });
      }
};

const get_single_laptop = async (req, res) => {
      try {
            const database = get_database();
            const laptops_collection = database.collection("laptops");

            const id = req.params.id;
            const query = { _id: new ObjectId(id) };

            const result = await laptops_collection.findOne(query);
            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to get laptop",
                  error: error.message,
            });
      }
};

export { get_laptops, get_single_laptop };
