import { ObjectId } from "mongodb";
import { get_database } from "../config/database.js";

const get_furniture = async (req, res) => {
      try {
            const database = get_database();
            const furniture_collection = database.collection("furniture");

            const result = await furniture_collection.find().toArray();
            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to get furniture's",
                  error: error.message,
            });
      }
};

const get_single_furniture = async (req, res) => {
      try {
            const database = get_database();
            const furniture_collection = database.collection("furniture");

            const id = req.params.id;
            const query = { _id: new ObjectId(id) };

            const result = await furniture_collection.findOne(query);
            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to get furniture",
                  error: error.message,
            });
      }
};

export { get_furniture, get_single_furniture };
