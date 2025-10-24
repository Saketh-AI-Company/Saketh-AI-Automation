import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, User, Mic, MicOff, Sparkles } from 'lucide-react';

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

      recognitionRef.current.onerror = () => {
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
      title: "AI agents & automation",
      subtitle: "Intelligent business automation",
      icon: "🤖"
    },
    {
      title: "AI-powered websites",
      subtitle: "Smart websites with AI integration",
      icon: "🌐"
    },
    {
      title: "AI mobile apps",
      subtitle: "iOS & Android apps with AI features",
      icon: "📱"
    },
    {
      title: "Scale with AI",
      subtitle: "Complete AI-driven transformation",
      icon: "🚀"
    }
  ];

  return (
    <div className="relative min-h-screen bg-white flex flex-col overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white"></div>
      
      {/* Header - Modern with spacing */}
      {messages.length === 0 && (
        <div className="relative text-center pt-16 sm:pt-20 pb-8 sm:pb-12 px-4 animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">AI-Powered Assistance</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-dark-900 mb-6 leading-tight tracking-tight">
            Welcome to{' '}
            <span className="text-gradient">
              Saketh AI
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-dark-600 max-w-3xl mx-auto leading-relaxed font-light">
            Ask anything about our services, AI automation, or your business needs
          </p>
        </div>
      )}

      {/* Messages Container - Modern design */}
      {messages.length > 0 && (
        <div 
          ref={messagesContainerRef}
          className="relative flex-1 overflow-y-auto px-4 pt-6 pb-4 custom-scrollbar"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex items-start gap-4 animate-fade-in-up ${msg.isUser ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {!msg.isUser && (
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg overflow-hidden">
                    <img 
                      src="/footer-logo.png" 
                      alt="Saketh AI" 
                      className="w-8 h-8 object-cover"
                    />
                  </div>
                )}

                <div className={`flex flex-col max-w-[75%] ${msg.isUser ? 'items-end' : 'items-start'}`}>
                  <div className="text-xs font-medium text-dark-400 mb-2 px-1">
                    {msg.isUser ? 'You' : 'Saketh AI'} • {msg.timestamp.toLocaleTimeString()}
                  </div>
                  <div
                    className={`rounded-2xl px-5 py-4 text-base leading-relaxed shadow-sm ${
                      msg.isUser
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-primary-500/20'
                        : 'bg-white border border-dark-100 text-dark-800'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>

                {msg.isUser && (
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center shadow-lg">
                    <User className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-4 animate-fade-in">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg overflow-hidden">
                  <img 
                    src="/footer-logo.png" 
                    alt="Saketh AI" 
                    className="w-8 h-8 object-cover"
                  />
                </div>
                <div className="bg-white border border-dark-100 rounded-2xl px-5 py-4 shadow-sm">
                  <div className="flex items-center gap-3 text-dark-600">
                    <Loader2 className="w-5 h-5 animate-spin text-primary-500" />
                    <span className="text-base">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Invisible div for smooth scrolling reference */}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      {/* Suggested Prompts - Modern cards */}
      {messages.length === 0 && (
        <div className="relative px-4 pb-8 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {suggestedPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(prompt.title)}
                className="group relative overflow-hidden rounded-2xl bg-white/80 hover:bg-white border border-dark-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 p-6 text-left hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {prompt.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-dark-800 text-lg mb-1 group-hover:text-primary-600 transition-colors">
                      {prompt.title}
                    </h3>
                    <p className="text-dark-500 text-sm leading-relaxed">
                      {prompt.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Input Bar - More Visible */}
      <div className="relative sticky bottom-0 p-4 sm:p-6">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-transparent"></div>
        
        <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
          <div className="relative flex items-center bg-white shadow-2xl rounded-2xl border-2 border-primary-300 hover:border-primary-500 focus-within:border-primary-500 transition-all duration-300">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={isListening ? "Listening..." : "Ask about websites, mobile apps, AI automation..."}
              disabled={isLoading}
              className="flex-1 bg-transparent text-dark-800 placeholder-dark-400 focus:outline-none px-5 sm:px-6 py-4 text-base rounded-2xl"
            />

            {/* Voice Button */}
            <button
              type="button"
              onClick={handleVoiceSearch}
              className={`p-3 mr-2 rounded-xl transition-all duration-300 ${
                isListening 
                  ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                  : 'text-dark-400 hover:text-primary-600 hover:bg-primary-50'
              }`}
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
              className="p-3 mr-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:from-dark-200 disabled:to-dark-300 disabled:cursor-not-allowed text-white rounded-xl transition-all duration-300 hover:shadow-lg disabled:shadow-none"
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
          <div className="relative max-w-3xl mx-auto mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm animate-fade-in">
            {error}
          </div>
        )}

        {isListening && (
          <div className="relative max-w-3xl mx-auto mt-4 p-4 bg-primary-50 border border-primary-200 rounded-xl text-primary-700 text-sm text-center animate-fade-in">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Listening... Speak now!</span>
            </div>
          </div>
        )}

        {messages.length === 0 && !error && !isListening && (
          <div className="relative max-w-3xl mx-auto mt-4 text-center text-sm text-dark-400">
            AI can make mistakes. Let's discuss your project requirements.
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchHero;
