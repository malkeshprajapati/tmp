const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  kudosCount: { type: Number, default: 0 },
});

const KudosSchema = new mongoose.Schema({
  sender: String,
  recipient: String,
  message: String,
  reason: String,
  timestamp: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);
const Kudos = mongoose.model("Kudos", KudosSchema);

app.post("/user", async (req, res) => {
  const { email, name } = req.body;
  const user = new User({ email, name });
  await user.save();
  res.status(201).send(user);
});

app.get("/user/all", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
});

app.get("/user/exists", async (req, res) => {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ message: "Username is required" });
  }

  try {
    const user = await User.findOne({ name: username });

    if (user) {
      return res.status(200).json({ exists: true });
    } else {
      return res.status(404).json({ exists: false });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

app.post("/kudos", async (req, res) => {
  const { sender, recipient, message, reason } = req.body;

  try {
    const recipientUser = await User.findOne({ name: recipient });

    if (!recipientUser) {
      return res.status(404).send({ message: "Recipient not found" });
    }

    recipientUser.kudosCount += 1;
    await recipientUser.save();

    const kudos = new Kudos({ sender, recipient, message, reason });
    await kudos.save();

    res.status(201).send({ message: "Kudos sent!", kudos });
  } catch (error) {
    res.status(500).send({ message: "Error sending kudos", error });
  }
});

app.get("/kudos/all", async (req, res) => {
  try {
    const kudos = await Kudos.find();
    res.send(kudos);
  } catch (error) {
    console.error("Error fetching kudos:", error);
    res.status(500).send({ message: "Error fetching kudos" });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
