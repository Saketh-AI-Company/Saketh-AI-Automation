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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex flex-col">
      {/* Header */}
      {messages.length === 0 && (
        <div className="text-center px-4 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Saketh AI Automation!
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Ask anything related to our services and your business queries?
          </p>
        </div>
      )}

      {/* Messages Container */}
      <div className="flex-1 flex flex-col px-2 sm:px-4 md:px-6 lg:px-8">
        {messages.length > 0 && (
          <div className="flex-1 overflow-y-auto py-4 space-y-4 max-w-4xl mx-auto w-full">
            {messages.map(msg => (
              <div 
                key={msg.id} 
                className={`flex items-start gap-2 sm:gap-3 ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!msg.isUser && (
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                )}
                <div className={`max-w-[85%] sm:max-w-[80%] md:max-w-[70%] ${
                  msg.isUser 
                    ? 'bg-blue-600 text-white rounded-2xl rounded-br-md' 
                    : 'bg-gray-800 text-white rounded-2xl rounded-bl-md'
                } px-3 sm:px-4 py-2 sm:py-3 shadow-lg`}>
                  <div className="text-xs sm:text-sm opacity-70 mb-1">
                    {msg.timestamp.toLocaleTimeString()}
                  </div>
                  <div className="text-sm sm:text-base leading-relaxed break-words">
                    {msg.text}
                  </div>
                </div>
                {msg.isUser && (
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="bg-gray-800 text-white rounded-2xl rounded-bl-md px-3 sm:px-4 py-2 sm:py-3 shadow-lg">
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Suggested Prompts */}
        {messages.length === 0 && (
          <div className="flex-1 flex items-center justify-center py-4 sm:py-8">
            <div className="w-full max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 px-2">
                {suggestedPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(prompt.title)}
                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-800/50 hover:bg-gray-700/50 active:bg-gray-600/50 transition-all duration-200 p-4 sm:p-6 text-left border border-gray-700/50 hover:border-gray-600 touch-manipulation"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl sm:text-2xl">{prompt.icon}</span>
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white leading-tight">
                        {prompt.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {prompt.subtitle}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Input Bar - Fixed at bottom */}
      <div className="sticky bottom-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50 p-2 sm:p-4">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <div className="flex items-center bg-gray-800 rounded-full border border-gray-700 focus-within:border-blue-500 transition-colors shadow-lg">
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
                disabled={isLoading}
                className={`p-2 sm:p-3 rounded-full transition-colors touch-manipulation ${
                  isListening 
                    ? 'text-red-400 bg-red-400/10 hover:bg-red-400/20' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {isListening ? (
                  <MicOff className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Mic className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>
              {/* Send Button */}
              <button
                type="submit"
                disabled={!searchQuery.trim() || isLoading}
                className="p-2 sm:p-3 mr-1 rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:opacity-50 transition-colors touch-manipulation"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin text-white" />
                ) : (
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                )}
              </button>
            </div>
          </form>
          {/* Status Messages */}
          {error && (
            <div className="text-red-400 text-xs sm:text-sm text-center mt-2 px-4">
              {error}
            </div>
          )}
          {isListening && (
            <div className="text-blue-400 text-xs sm:text-sm text-center mt-2 px-4 animate-pulse">
              🎤 Listening... Speak now!
            </div>
          )}
          {messages.length === 0 && !error && !isListening && (
            <div className="text-gray-400 text-xs sm:text-sm text-center mt-2 px-4">
              AI can make mistakes. Let's discuss your project requirements.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchHero;
