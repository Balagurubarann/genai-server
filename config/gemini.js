require("dotenv").config();
const { GoogleGenAI } =  require("@google/genai");

const genai = new GoogleGenAI({});

module.exports = genai;
