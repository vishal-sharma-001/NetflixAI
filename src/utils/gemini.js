import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_AI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model