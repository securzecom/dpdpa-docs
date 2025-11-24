// src/pages/dpdpa-bot.jsx
import React, { useState, useRef, useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function DpdpaBot() {
  const { siteConfig } = useDocusaurusContext();
  const apiBaseUrl = siteConfig.customFields?.dpdpaApiBaseUrl;

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content:
        "Hi, I'm DPDPA-GPT. Ask me anything about India's Digital Personal Data Protection Act (DPDPA), 2023.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    if (!apiBaseUrl) {
      setError('API base URL is not configured.');
      return;
    }

    const newUserMessage = {
      id: Date.now(),
      role: 'user',
      content: input.trim(),
    };

    const updatedMessages = [...messages, newUserMessage];

    setMessages(updatedMessages);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${apiBaseUrl}/api/dpdpa-gpt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();

      const assistantMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: data.reply || 'Sorry, I could not generate a response.',
      };

      setMessages([...updatedMessages, assistantMessage]);
    } catch (err) {
      console.error(err);
      setError('Something went wrong talking to DPDPA-GPT. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      title="DPDPA-Bot"
      description="Chat with DPDPA-GPT about the Digital Personal Data Protection Act"
    >
      <main className="dpdpaBotPage">
        {/* You can keep your fancy layout & CSS; using simple version here */}
        <div className="dpdpaBotChatCard">
          <div className="dpdpaBotChatHeader">
            <div className="dpdpaBotStatusDot" />
            <div>
              <h2 className="dpdpaBotChatTitle">DPDPA-GPT</h2>
              <p className="dpdpaBotChatSubTitle">
                Ask your DPDPA questions in plain English.
              </p>
            </div>
          </div>

          <div className="dpdpaBotChatWindow">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`dpdpaBotMessageRow ${
                  m.role === 'user'
                    ? 'dpdpaBotMessageRowUser'
                    : 'dpdpaBotMessageRowAssistant'
                }`}
              >
                <div className="dpdpaBotAvatar">
                  {m.role === 'user' ? 'You' : 'DP'}
                </div>
                <div
                  className={`dpdpaBotMessageBubble ${
                    m.role === 'user'
                      ? 'dpdpaBotMessageUser'
                      : 'dpdpaBotMessageAssistant'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="dpdpaBotMessageRow dpdpaBotMessageRowAssistant">
                <div className="dpdpaBotAvatar">DP</div>
                <div className="dpdpaBotMessageBubble dpdpaBotMessageAssistant">
                  <span className="dpdpaBotTypingDot" />
                  <span className="dpdpaBotTypingDot" />
                  <span className="dpdpaBotTypingDot" />
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {error && <div className="dpdpaBotError">{error}</div>}

          <form className="dpdpaBotInputBar" onSubmit={handleSend}>
            <input
              type="text"
              className="dpdpaBotInput"
              placeholder='Try: "What are the obligations of a Data Fiduciary under DPDPA?"'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="dpdpaBotSendButton"
              disabled={loading || !input.trim()}
            >
              {loading ? 'Sending…' : 'Send'}
            </button>
          </form>
        </div>
      </main>
    </Layout>
  );
}
