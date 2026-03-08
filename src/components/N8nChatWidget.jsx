import { useEffect } from 'react';

const CHAT_URL =
  'https://n8n.shiftdeploy.com/webhook/c3a3ae19-1a19-449b-a9f7-4b43df83f86e/chat';
const CHAT_TARGET = '#sky-n8n-chat';

let chatInitialized = false;

export default function N8nChatWidget() {
  useEffect(() => {
    if (chatInitialized) {
      return;
    }

    let disposed = false;

    const initChat = async () => {
      await import('@n8n/chat/style.css');
      const { createChat } = await import('@n8n/chat');

      if (disposed || chatInitialized) {
        return;
      }

      createChat({
        webhookUrl: CHAT_URL,
        target: CHAT_TARGET,
        mode: 'window',
        showWelcomeScreen: false,
        initialMessages: ['Hi there! 👋', 'My name is Sky Dental AI. How can I assist you today?'],
        i18n: {
          en: {
            title: 'Hi there! 👋',
            subtitle: "Start a chat. We're here to help you 24/7.",
            footer: '',
            getStarted: 'New Conversation',
            inputPlaceholder: 'Type your question..',
          },
        },
      });

      chatInitialized = true;
    };

    initChat();

    return () => {
      disposed = true;
    };
  }, []);

  return <div id="sky-n8n-chat" className="sd-n8n-chat" />;
}
