import { MongoClient } from "mongodb";

const mongodbConnectUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.iekg0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

function isInvalidParams({ email, name, message }) {
  return (
    !email ||
    !email.includes("@") ||
    !name ||
    name.trim() === "" ||
    !message ||
    message.trim() === ""
  );
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (isInvalidParams({ email, name, message })) {
      res.status(422).json({
        message: "Invalid input"
      });
      return;
    }

    const newMessage = {
      email,
      name,
      message
    };
    let client;
    try {
      client = await MongoClient.connect(mongodbConnectUrl);
    } catch (err) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("message").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: "Storing message filed!" });
      return;
    }

    client.close();
    res.status(201).json({
      message: "Successfully stored message!",
      data: newMessage
    });
  }
}
