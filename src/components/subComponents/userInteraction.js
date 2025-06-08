import { useState, useEffect, useRef, useCallback } from 'react';

const UserInteraction = () => {
    // State for managing the conversation
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! How can I help you today?", sender: 'ai' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);

    // Auto-scroll to bottom of messages
    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    // Handle user input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!inputValue.trim()) return;

        // Add user message to chat
        const userMessage = {
            id: messages.length + 1,
            text: inputValue,
            sender: 'user'
        };
        
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);
        setError(null);

        try {
            // Using fetch instead of axios
            const response = await fetch('YOUR_AI_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: inputValue,
                    conversation_history: messages
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Add AI response to chat
            const aiMessage = {
                id: messages.length + 2,
                text: data.reply,
                sender: 'ai'
            };
            
            setMessages(prev => [...prev, aiMessage]);
        } catch (err) {
            setError('Failed to get response from AI. Please try again.');
            console.error('AI Interaction Error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle quick replies/suggestions
    const handleQuickReply = (text) => {
        setInputValue(text);
    };

    // Sample quick replies
    const quickReplies = [
        "What can you do?",
        "Tell me about your features",
        "How does this work?"
    ];

    return (
        <div className="user-interaction-container">
            <div className="chat-header">
                <h2>AI Assistant</h2>
            </div>
            
            <div className="messages-container">
                {messages.map((message) => (
                    <div 
                        key={message.id} 
                        className={`message ${message.sender}`}
                    >
                        {message.text}
                    </div>
                ))}
                {isLoading && (
                    <div className="message ai loading">
                        <div className="typing-indicator">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                )}
                {error && <div className="error-message">{error}</div>}
                <div ref={messagesEndRef} />
            </div>
            
            <div className="quick-replies">
                {quickReplies.map((reply, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleQuickReply(reply)}
                        className="quick-reply-btn"
                    >
                        {reply}
                    </button>
                ))}
            </div>
            
            <form onSubmit={handleSubmit} className="input-form">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    disabled={isLoading}
                />
                <button type="submit" disabled={isLoading || !inputValue.trim()}>
                    {isLoading ? 'Sending...' : 'Send'}
                </button>
            </form>
        </div>
    );
};

export default UserInteraction;