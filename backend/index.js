const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { config } = require("dotenv");

console.log("Starting backend server...");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

config();

console.log(process.env.CHAT_ENGINE_KEY);

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get or create user in on Chat Engine
  try {
    const r = await axios.put(
      `https://api.chatengine.io/users/`,
      { username, secret: username, first_name: username },
      {
        headers: {
          "PRIVATE-KEY": process.env.CHAT_ENGINE_KEY,
        },
      }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    console.log(e);
    res.status(e.status).json(e.response.data);
  }
});

app.listen(3001);
