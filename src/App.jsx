import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Homepage from './components/Homepage'
import News from './components/News'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LoginPage from './components/Login'
import Calculator from './components/Calculator';
import UserForm from './components/Userform';
import Chatbot from './chatbot';
function App() {
  const [count, setCount] = useState(0)
  const [isChatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisible(prev => !prev);
  };
  return (
    <Router>
      <div className="min-h-screen bg-[#03052F] text-white">
        <Header />
        <button 
        onClick={toggleChatbot} 
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 z-50"
      >
        HELPBOT
      </button>
      {isChatbotVisible && (
        <div className="fixed bottom-16 right-4 w-96 z-50 text-green-700"> {/* Positioned in the bottom right */}
          <Chatbot />
        </div>
      )}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/news" element={<News />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cal" element={<Calculator />} />
          <Route path="/consult" element={<UserForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
