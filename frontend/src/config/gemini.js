// import { GoogleGenAI } from "@google/genai";

// // Use env variable or hard-coded key
// const ai = new GoogleGenAI({
//   apiKey:'AIzaSyBe3v5-uIP3IbMquEuFetHMHDzkK6XYQ7c'
// });

// async function runChat(prompt) {
//   try {
//     const response = await ai.models.generateContent({
//       model: "gemini-2.5-flash",
//       contents: [{ type: "text", text: prompt }]
//     });
//     return console.log(response.output_text);
//   } catch (err) {
//     console.error("Error calling Gemini API:", err);
//     //return null;
//   }
// }

// export default runChat;

import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey:'AIzaSyBe3v5-uIP3IbMquEuFetHMHDzkK6XYQ7c'});

async function runChart(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [{role: "user", parts:[{text: prompt}] }],
  });
  console.log(response.text);
  return response.text;
}

export default runChart;

