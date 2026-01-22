
import React, { useState, useRef, useEffect } from 'react';
import { getDesignAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am Rajeev\'s AI assistant. Ask me anything about his design process or philosophy!' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const response = await getDesignAdvice(input);
    
    setMessages(prev => [...prev, { role: 'model', text: response || '' }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 bg-[#1a1a1a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-500">
          <div className="p-4 bg-blue-600 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <i className="fas fa-robot text-sm"></i>
              </div>
              <span className="font-bold text-sm tracking-tight">Design AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div 
            ref={scrollRef}
            className="flex-1 p-4 h-[350px] overflow-y-auto space-y-4 text-sm"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                  msg.role === 'user' ? 'bg-blue-600 rounded-br-none' : 'bg-white/5 border border-white/10 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-2xl rounded-bl-none animate-pulse italic text-xs text-zinc-500">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/5 flex space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about design..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
            <button 
              onClick={handleSend}
              className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-zinc-200 transition-colors"
            >
              <i className="fas fa-paper-plane text-xs"></i>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
        >
          <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
          <i className="fas fa-comment-dots text-xl text-white"></i>
          <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Ask my AI Assistant
          </span>
        </button>
      )}
    </div>
  );
};

export default AIChatbot;
