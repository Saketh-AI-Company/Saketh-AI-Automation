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
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Fixed scroll function - only scrolls within the messages container
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
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
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col">
      {/* Header - UPDATED with more spacing and bigger mobile font */}
      {messages.length === 0 && (
        <div className="text-center pt-12 sm:pt-20 pb-8 sm:pb-12 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Saketh AI Automation!
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ask anything related to our services and your business queries?
          </p>
        </div>
      )}

      {/* Messages Container - FIXED with proper scrolling */}
      {messages.length > 0 && (
        <div 
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto px-4 pt-6 pb-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="max-w-4xl mx-auto space-y-4">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex items-start gap-3 sm:gap-4 ${msg.isUser ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {!msg.isUser && (
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/footer-logo.png" 
                      alt="Saketh AI" 
                      className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full"
                    />
                  </div>
                )}

                <div className={`flex flex-col max-w-[80%] sm:max-w-[70%] ${msg.isUser ? 'items-end' : 'items-start'}`}>
                  <div className="text-xs text-gray-400 mb-1 px-2">
                    {msg.timestamp.toLocaleTimeString()}
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base leading-relaxed ${
                      msg.isUser
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800/80 text-gray-100 border border-gray-700/50'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>

                {msg.isUser && (
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-600 flex items-center justify-center">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/footer-logo.png" 
                    alt="Saketh AI" 
                    className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full"
                  />
                </div>
                <div className="bg-gray-800/80 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 border border-gray-700/50">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm sm:text-base">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Invisible div for smooth scrolling reference */}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      {/* Suggested Prompts */}
      {messages.length === 0 && (
        <div className="px-4 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {suggestedPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(prompt.title)}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-800/50 hover:bg-gray-700/50 active:bg-gray-600/50 transition-all duration-200 p-4 sm:p-6 text-left border border-gray-700/50 hover:border-gray-600 touch-manipulation"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-2xl sm:text-3xl flex-shrink-0">
                    {prompt.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white text-base sm:text-lg mb-1 sm:mb-2 group-hover:text-blue-300 transition-colors">
                      {prompt.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {prompt.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Input Bar - Fixed at bottom */}
      <div className="sticky bottom-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent p-4 sm:p-6">
        <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
          <div className="relative flex items-center bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700/50 shadow-2xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={isListening ? "Listening..." : "Ask about websites, mobile apps, AI automation..."}
              disabled={isLoading}
              className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-full"
            />

            {/* Voice Button */}
            <button
              type="button"
              onClick={handleVoiceSearch}
              className="p-2 sm:p-3 mr-1 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-700/50"
            >
              {isListening ? (
                <MicOff className="w-5 h-5" />
              ) : (
                <Mic className="w-5 h-5" />
              )}
            </button>

            {/* Send Button */}
            <button
              type="submit"
              disabled={!searchQuery.trim() || isLoading}
              className="p-2 sm:p-3 mr-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:opacity-50 text-white rounded-full transition-colors"
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
          <div className="max-w-4xl mx-auto mt-3 p-3 bg-red-900/50 border border-red-700/50 rounded-lg text-red-300 text-sm">
            {error}
          </div>
        )}

        {isListening && (
          <div className="max-w-4xl mx-auto mt-3 p-3 bg-blue-900/50 border border-blue-700/50 rounded-lg text-blue-300 text-sm text-center">
            🎤 Listening... Speak now!
          </div>
        )}

        {messages.length === 0 && !error && !isListening && (
          <div className="max-w-4xl mx-auto mt-3 text-center text-xs sm:text-sm text-gray-500">
            AI can make mistakes. Let's discuss your project requirements.
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchHero;
