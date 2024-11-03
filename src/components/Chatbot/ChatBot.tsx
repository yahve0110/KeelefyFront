// components/VoiceflowChat.js
import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Check if the script already exists to prevent duplicate loading
    if (!document.getElementById('voiceflow-widget')) {
      const script = document.createElement('script');
      script.id = 'voiceflow-widget';
      script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
      script.type = 'text/javascript';

      script.onload = () => {
        if (window.voiceflow) {
          window.voiceflow.chat.load({
            verify: { projectID: '6723a2f20f721c13828c6256' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
          });
        }
      };

      document.body.appendChild(script);
    }
  }, []);

  return null; // No visible UI element is needed for the chat widget
};

export default Chatbot;
