
import React, { useState, useEffect } from 'react';
import { Volume2, Loader2 } from 'lucide-react';

interface PronunciationBtnProps {
  text: string;
  lang: 'en' | 'fr' | 'ar';
  className?: string;
}

const PronunciationBtn: React.FC<PronunciationBtnProps> = ({ text, lang, className = "" }) => {
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      setSupported(true);
    }
  }, []);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!supported || speaking) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Map internal lang codes to BCP 47 language tags
    switch (lang) {
      case 'ar': utterance.lang = 'ar-SA'; break;
      case 'fr': utterance.lang = 'fr-FR'; break;
      case 'en': utterance.lang = 'en-US'; break;
      default: utterance.lang = 'en-US';
    }

    utterance.rate = 0.9; // Slightly slower for clarity
    utterance.pitch = 1;

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  if (!supported) return null;

  return (
    <button
      onClick={handleSpeak}
      className={`inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:bg-academic-primary/20 text-academic-primary hover:scale-110 ${speaking ? 'animate-pulse bg-academic-primary/20' : ''} ${className}`}
      title="Play Pronunciation"
      aria-label={`Listen to pronunciation of ${text}`}
    >
      {speaking ? <Loader2 size={18} className="animate-spin" /> : <Volume2 size={18} />}
    </button>
  );
};

export default PronunciationBtn;
