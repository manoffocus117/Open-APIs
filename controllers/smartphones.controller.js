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

export default get_phones;
