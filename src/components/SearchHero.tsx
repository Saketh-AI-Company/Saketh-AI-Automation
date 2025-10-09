import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Bot, User, Mic, MicOff, Plus } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

// Animated Background Components
const AnimatedGlobe = () => (
  <div className="absolute top-10 left-10 opacity-20">
    <div className="w-32 h-32 rounded-full border-2 border-blue-400 animate-spin" style={{ animationDuration: '20s' }}>
      <div className="w-full h-full rounded-full border-2 border-purple-400 animate-ping" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
    </div>
  </div>
);

const AnimatedBrain = () => (
  <div className="absolute top-20 right-20 opacity-25">
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-blue-500 animate-pulse" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-2 left-2 w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-green-400 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  </div>
);

const FloatingNodes = () => (
  <>
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className={`absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-bounce`}
        style={{
          top: `${10 + (i * 12)}%`,
          left: `${5 + (i * 11)}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${3 + (i % 3)}s`
        }}
      ></div>
    ))}
  </>
);

const CircuitPattern = () => (
  <div className="absolute inset-0 opacity-10 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-96 h-96">
      <svg viewBox="0 0 400 400" className="w-full h-full animate-pulse">
        <path
          d="M50 50 L350 50 L350 150 L200 150 L200 250 L350 250 L350 350 L50 350 Z"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
);

const MatrixRain = () => (
  <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute text-green-400 text-xs font-mono animate-pulse"
        style={{
          left: `${i * 5}%`,
          top: `-10%`,
          animation: `matrixFall ${8 + (i % 5)}s linear infinite`,
          animationDelay: `${i * 0.3}s`
        }}
      >
        {String.fromCharCode(0x30A0 + Math.random() * 96)}
      </div>
    ))}
  </div>
);

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
    <div className="relative min-h-screen bg-gray-900 flex flex-col overflow-hidden">
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes matrixFall {
          from { transform: translateY(-100vh); opacity: 1; }
          to { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>

      {/* Animated Background Elements */}
      <AnimatedGlobe />
      <AnimatedBrain />
      <FloatingNodes />
      <CircuitPattern />
      <MatrixRain />

      {/* Additional floating elements */}
      <div className="absolute bottom-20 left-1/4 opacity-20">
        <div className="w-16 h-16 border-2 border-cyan-400 rounded-lg animate-spin" style={{ animationDuration: '15s' }}>
          <div className="w-8 h-8 bg-cyan-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
      </div>

      <div className="absolute top-1/3 right-1/4 opacity-15">
        <div className="relative">
          <div className="w-20 h-20 border-2 border-purple-400 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-2 left-2 w-16 h-16 border-2 border-blue-400 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
          <div className="absolute top-4 left-4 w-12 h-12 border-2 border-cyan-400 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Header - UPDATED with more spacing and bigger mobile font */}
      {messages.length === 0 && (
        <div className="text-center pt-12 sm:pt-20 pb-8 sm:pb-12 px-4 relative z-10">
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
          className="flex-1 overflow-y-auto px-4 pt-6 pb-4 relative z-10"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="max-w-4xl mx-auto space-y-4">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex items-start gap-3 sm:gap-4 ${msg.isUser ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {!msg.isUser && (
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
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
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
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
        <div className="px-4 pb-8 relative z-10">
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
      <div className="sticky bottom-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent p-4 sm:p-6 relative z-10">
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
