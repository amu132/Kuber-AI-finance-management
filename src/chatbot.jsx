import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
    const [messages, setMessages] = useState([
        { id: Date.now(), text: "Hi, how may I help you?", isBot: true }
    ]);
    const [userInput, setUserInput] = useState('');

    const handleSend = async (e) => {
        e.preventDefault();

        if (userInput.trim() === '') return;

        // Add user message to the chat
        const userMessage = { id: Date.now(), text: userInput, isBot: false };
        setMessages((prev) => [...prev, userMessage]);

        // Send user input to backend and get response from Gemini
        try {
            const response = await axios.post('http://localhost:5000/get-gemini-response', {
                userInput: userInput
            });

            const botResponse = {
                id: Date.now(),
                text: response.data.answer,
                isBot: true,
            };
            setMessages((prev) => [...prev, botResponse]);
        } catch (error) {
            console.error("Error fetching response from Gemini:", error);
            const errorMessage = {
                id: Date.now(),
                text: "Sorry, I'm having trouble retrieving information right now.",
                isBot: true,
            };
            setMessages((prev) => [...prev, errorMessage]);
        }

        setUserInput(''); // Clear input after sending
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="overflow-y-auto max-h-60">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`my-2 p-2 rounded-lg transition-colors duration-200 ${msg.isBot ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-800'
                            }`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSend} className="flex mt-4">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="border border-gray-300 rounded-lg p-3 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                    placeholder="Type your message..."
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg ml-2 transition duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Send
                </button>
            </form>
        </div>

    );
}

export default Chatbot;
