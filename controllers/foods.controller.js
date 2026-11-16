import { ObjectId } from "mongodb";
import { get_database } from "../config/database.js";

const get_foods = async (req, res) => {
      try {
            const database = get_database();
            const foods_collection = database.collection("foods");

            const result = await foods_collection.find().toArray();
            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to get foods",
                  error: error.message,
            });
      }
};

const get_single_food = async (req, res) => {
      try {
            const database = get_database();
            const foods_collection = database.collection("foods");

            const id = req.params.id;
            const query = { _id: new ObjectId(id) };

            const result = await foods_collection.findOne(query);
            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to get food",
                  error: error.message,
            });
      }
};

export { get_foods, get_single_food };
