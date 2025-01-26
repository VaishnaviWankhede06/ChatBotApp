const express = require("express");
const router = express.Router();
const axios = require("axios");

// Function to summarize text using Hugging Face API
async function summarizeText(text) {
  const API_URL = "https://api-inference.huggingface.co/models/<model_name>"; // Replace <model_name> with the actual model, e.g., "facebook/bart-large-cnn"
  const API_TOKEN = "<your_hugging_face_api_key>"; // Replace with your actual API key

  try {
    const response = await axios.post(
      API_URL,
      { inputs: text },
      {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error summarizing text:", error);
    throw new Error("Failed to summarize text.");
  }
}

// Chatbot Route
router.post("/chat", async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  try {
    // Call the summarizeText function
    const summary = await summarizeText(query);
    res.json({ response: summary });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
});

module.exports = router;
