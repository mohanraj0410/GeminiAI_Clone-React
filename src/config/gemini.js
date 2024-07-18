const {
    GoogleGenerativeAI,
} = require("@google/generative-ai");

const apiKey = "AIzaSyC3NN9VL4M6WmIT5LddB395l-CJWB8WP9g";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [
            {
                role: "user",
                parts: [
                    { text: "hi" },
                ],
            },
            {
                role: "model",
                parts: [
                    { text: "Hi! How can I help you today? \n" },
                ],
            },
        ],
    });

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text();
}

// console.log()

export default run;
