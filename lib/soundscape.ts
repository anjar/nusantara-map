/**
 * Web Audio API synthesizer for ancient Nusantara ambient soundscapes (Gamelan / Guqin).
 * Generates peaceful bronze pentatonic tones (Slendro & Pelog) with zero external assets,
 * zero network requests, and zero latency.
 */

class SoundscapeManager {
  private ctx: AudioContext | null = null;
  private timer: ReturnType<typeof setInterval> | null = null;
  private _isPlaying = false;

  // Slendro pentatonic notes (Hz)
  // 1 (Panunggal/Bem): 262Hz, 2 (Gulu): 294Hz, 3 (Dada): 330Hz, 5 (Lima): 392Hz, 6 (Nem): 440Hz, high 1: 524Hz
  private slendroScale = [131.0, 196.0, 261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25];

  private getAudioContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  private playTone(freq: number, duration = 3.5, volume = 0.08) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Bronze chime oscillator
    const osc = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    // Subtle harmonic overtone (characteristic of bronze gamelan kettle/metallophone)
    subOsc.type = 'triangle';
    subOsc.frequency.setValueAtTime(freq * 2.76, now);

    // Warm resonant lowpass filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.Q.setValueAtTime(4.0, now);

    // Strike attack and long reverberant decay
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(volume, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(filter);
    subOsc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    subOsc.start(now);
    osc.stop(now + duration + 0.1);
    subOsc.stop(now + duration + 0.1);
  }

  public toggle(): boolean {
    if (this._isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    if (typeof window === 'undefined') return;
    try {
      this.getAudioContext();
      this._isPlaying = true;

      // Play introductory deep gong
      this.playTone(131.0, 5.0, 0.12);

      let step = 0;
      this.timer = setInterval(() => {
        if (!this._isPlaying) return;
        step++;
        // Low ambient gong every 8 steps
        if (step % 8 === 0) {
          this.playTone(131.0, 5.5, 0.12);
        }
        // Melodic bonang / guqin note
        const note = this.slendroScale[Math.floor(Math.random() * this.slendroScale.length)];
        this.playTone(note, 3.2, 0.06);

        // Occasional companion chime
        if (Math.random() > 0.5) {
          setTimeout(() => {
            if (!this._isPlaying) return;
            const companion = this.slendroScale[Math.floor(Math.random() * (this.slendroScale.length - 2)) + 2];
            this.playTone(companion, 2.8, 0.04);
          }, 350);
        }
      }, 2400);
    } catch {
      this._isPlaying = false;
    }
  }

  public stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this._isPlaying = false;
  }

  public isPlaying(): boolean {
    return this._isPlaying;
  }
}

export const soundscape = new SoundscapeManager();
