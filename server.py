
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import google.generativeai as genai
import os

# Configure your Gemini API key
genai.configure(api_key="")  # Replace with your actual API key

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/get-portfolio-allocation', methods=['POST'])
def get_portfolio_allocation():
    data = request.json
    prompt = f"Age: {data['age']}, Sex: {data['sex']}, Income (INR): {data['income']}, Income after Tax: {data['incomeAfterTax']}, Marriage Status: {data['marriageStatus']}, Number of Kids: {data['numOfKids']}, Age of Parents: {data['ageOfParents']}, Risk Appetite: {data['riskAppetite']}, Health Conditions: {data['healthConditions']}. Provide a portfolio allocation from an indian perspective in which percentage should be allocated to equities, bonds, mutual funds, fixed deposit and different types of commodities. We give you all the inputs so you have to give the allocation based on your knowledge. Be to the point and concise. You have to write a very short response which should consist of the portfolio allocation. Also based on input data, also provide the amount in rupees for which they should have health insurance for the whole family and the amt of term insurance that the individual should have for himself so that his family lives a good life. Anything other than that should not be said. Keep it concise. No bold font just normal lower case font.I repeat no bold fonts. The response should not contain any asterisks all lower case latin letters.Headings should contain normal plain latin letters. Dont emphasize on any word. No word should be bold, i repeat. No sentence should be bold. No question should be bolded.Ignore bold fonts completely"

    # Generate response using Gemini
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content(prompt)

    return jsonify({"portfolio": response.text})

@app.route('/get-gemini-response', methods=['POST'])
def get_gemini_response():
    data = request.json
    user_input = data['userInput']

    # Generate response using Gemini
    model = genai.GenerativeModel('gemini-1.5-flash')
    prompt = f"User asked: {user_input}.    So you are a helpbot in Kuber, a wealth managment website. and you have to help user navigate through the website. It has features like asset allocation calculator, tax calculater and adviser and other financial features. Provide a helpful response based on personal wealth management features like portfolio allocation, insurance, tax calculator, etc.Please be very concise and give  very short answers.Help user navigate"
    
    response = model.generate_content(prompt)

    return jsonify({"answer": response.text})

if __name__ == '__main__':
    app.run(debug=True)
