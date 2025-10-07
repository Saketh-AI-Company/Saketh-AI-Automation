import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Bot, User, Mic, MicOff, Plus } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

function SearchHero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState('');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        setError('Voice recognition failed. Please try again.');
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const handleVoiceSearch = () => {
    if (!recognitionRef.current) {
      setError('Voice recognition not supported in this browser.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setError('');
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: searchQuery.trim(),
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setSearchQuery('');
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('https://n8n.srv954053.hstgr.cloud/webhook/search-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userMessage.text }),
      });
      
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      
      const responseText = data.output || data.answer || data.response || data.result || JSON.stringify(data);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText || 'No answer found.',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      setError('Failed to get answer. Please try again.');
      console.error('API Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSearch(e as any);
    }
  };

  const suggestedPrompts = [
    {
      title: "Build a custom website",
      subtitle: "Create responsive, modern websites",
      icon: "🌐"
    },
    {
      title: "Develop mobile apps", 
      subtitle: "iOS & Android app development",
      icon: "📱"
    },
    {
      title: "AI agents & automation",
      subtitle: "Intelligent business automation",
      icon: "🤖"
    },
    {
      title: "Scale my business",
      subtitle: "Complete digital transformation", 
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-6">
        
        {/* Messages Container */}
        {messages.length > 0 && (
          <div className="flex-1 flex flex-col pt-8 pb-6">
            <div className="space-y-4 max-h-[70vh] overflow-y-auto py-4">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                      msg.isUser
                        ? 'bg-blue-600 text-white ml-12'
                        : 'bg-gray-700 text-gray-100 mr-12'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {msg.isUser ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4 text-blue-400" />
                      )}
                      <span className="text-xs text-gray-300">
                        {msg.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                    <div className="whitespace-pre-line">{msg.text}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 rounded-2xl px-4 py-3 mr-12">
                    <Loader2 className="w-5 h-5 animate-spin text-blue-400" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        )}

        {/* Initial Welcome Screen */}
        {messages.length === 0 && (
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-4xl font-extrabold mb-6 leading-tight">
                  <span className="text-blue-400">Welcome to Saketh AI Automation!</span>
             </h1>

              <p className="text-base md:text-lg text-gray-400">
                Ask anything related to our services and your business queries?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {suggestedPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(prompt.title)}
                  className="group relative overflow-hidden rounded-2xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 p-6 text-left border border-gray-700/50 hover:border-gray-600"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{prompt.icon}</span>
                    <div>
                      <h3 className="text-white font-medium mb-1">{prompt.title}</h3>
                      <p className="text-gray-400 text-sm">{prompt.subtitle}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Input with Voice */}
        <div className="pb-8">
          <div className="relative max-w-2xl mx-auto w-full">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-full p-2 focus-within:border-blue-500/50 transition-all duration-300">
                <button
                  type="button"
                  className="p-3 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-700/50"
                >
                  <Plus className="w-5 h-5" />
                </button>
                
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={isListening ? "Listening..." : "Ask about websites, mobile apps, AI automation..."}
                  disabled={isLoading}
                  className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none px-4 py-3 text-lg"
                />
                
                <button
                  type="button"
                  onClick={handleVoiceSearch}
                  className={`p-3 transition-colors rounded-full hover:bg-gray-700/50 mr-2 ${
                    isListening 
                      ? 'text-red-400 animate-pulse' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isListening ? (
                    <MicOff className="w-5 h-5" />
                  ) : (
                    <Mic className="w-5 h-5" />
                  )}
                </button>
                
                <button
                  type="submit"
                  disabled={isLoading || !searchQuery.trim()}
                  className="p-3 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-full transition-all duration-200 hover:scale-105"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
            </form>

            {/* Status Messages */}
            {error && (
              <div className="text-red-400 text-center mt-4 text-sm">
                {error}
              </div>
            )}
            
            {isListening && (
              <div className="text-blue-400 text-center mt-4 text-sm">
                🎤 Listening... Speak now!
              </div>
            )}
          </div>

          {messages.length === 0 && (
            <div className="text-center mt-8 text-gray-500 text-sm">
              <p>AI can make mistakes. Let's discuss your project requirements.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchHero;
