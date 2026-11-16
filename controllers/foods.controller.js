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

export default get_foods;
