npm init -y
npm install express cors openai

import express from "express";
import cors from "cors";
import OpenAI from "openai";
 
const app = express();
app.use(cors());
app.use(express.json());
 
const client = new OpenAI({
  apiKey: "YOUR_OPENAI_API_KEY"
});
 
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;
 
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful chatbot like ChatGPT." },
      { role: "user", content: userMessage }
    ]
  });
 
  res.json({
    reply: response.choices[0].message.content
  });
});
 
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
 
