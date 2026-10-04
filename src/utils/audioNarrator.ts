// Native Web Speech API Narrator for Brazilian Portuguese
class AudioNarrator {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeaking = false;
  private isPaused = false;
  private activeText = '';
  private onStateChange: ((state: { isPlaying: boolean; isPaused: boolean; text: string }) => void) | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  setListener(callback: (state: { isPlaying: boolean; isPaused: boolean; text: string }) => void) {
    this.onStateChange = callback;
  }

  private notify() {
    if (this.onStateChange) {
      this.onStateChange({
        isPlaying: this.isSpeaking,
        isPaused: this.isPaused,
        text: this.activeText,
      });
    }
  }

  speak(text: string, rate = 1.0) {
    if (!this.synth) return;

    // Stop current speech
    this.stop();

    if (!text || text.trim().length === 0) return;

    this.activeText = text;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = rate;
    utterance.pitch = 1.0;

    // Choose the best pt-BR voice available
    const voices = this.synth.getVoices();
    const ptVoice = voices.find(v => v.lang === 'pt-BR' || v.lang.startsWith('pt')) || null;
    if (ptVoice) {
      utterance.voice = ptVoice;
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.isPaused = false;
      this.notify();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.isPaused = false;
      this.activeText = '';
      this.notify();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      this.isPaused = false;
      this.activeText = '';
      this.notify();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  pause() {
    if (this.synth && this.isSpeaking && !this.isPaused) {
      this.synth.pause();
      this.isPaused = true;
      this.notify();
    }
  }

  resume() {
    if (this.synth && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
      this.notify();
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
      this.isPaused = false;
      this.activeText = '';
      this.currentUtterance = null;
      this.notify();
    }
  }

  toggle(text: string, rate = 1.0) {
    if (this.isSpeaking && !this.isPaused) {
      if (this.activeText === text) {
        this.pause();
      } else {
        this.speak(text, rate);
      }
    } else if (this.isPaused && this.activeText === text) {
      this.resume();
    } else {
      this.speak(text, rate);
    }
  }

  getSpeakingState() {
    return {
      isPlaying: this.isSpeaking,
      isPaused: this.isPaused,
      activeText: this.activeText,
    };
  }
}

export const narrator = new AudioNarrator();
