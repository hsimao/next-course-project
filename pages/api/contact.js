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

export default function handler(req, res) {
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

    console.log(newMessage);

    res.status(201).json({
      message: "Successfully stored message!",
      data: newMessage
    });
  }
}
