import { ObjectId } from "mongodb";
import { get_database } from "../config/database.js";

const get_phones = async (req, res) => {
      try {
            const database = get_database();
            const phones_collection = database.collection("smartphones");

            const result = await phones_collection.find().toArray();
            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to get phones",
                  error: error.message,
            });
      }
};

const get_single_phone = async (req, res) => {
      try {
            const database = get_database();
            const phones_collection = database.collection("smartphones");

            const id = req.params.id;
            const query = { _id: new ObjectId(id) };

            const result = await phones_collection.findOne(query);
            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to get laptop",
                  error: error.message,
            });
      }
};

export { get_phones, get_single_phone };
