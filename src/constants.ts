import type { Chord, Note } from "./types";

export const frequencyMap: Record<Note, number> = {
  C4: 261.63,
  E4: 329.63,
  G4: 392.0,
  "E♭4": 311.13,
  "B♭4": 466.16,
  "B♭♭4": 415.3,
  B4: 493.88,
  A4: 440.0,
  D5: 587.33,
  F5: 698.46,
  A5: 880.0,
  F4: 349.23,
  D4: 293.66,
  "G♯4": 415.3,
  "G♭4": 369.99,
  "F♯4": 369.99,
  C5: 523.25,
  "C♯5": 554.37,
  E5: 659.26,
  G5: 783.99,
  "B♭5": 932.33,
  "A♯4": 466.16,
  "A♭4": 415.3,
  "D♯5": 622.25,
  "F♯5": 739.99,
  "C♯6": 1108.73,
  C6: 1046.5,
  "B♯4": 554.37,
  "E♭5": 622.25,
  D6: 1174.66,
  "C♭5": 277.18,
  E6: 1318.51,
  "D♭5": 277.18,
  "G♯5": 830.61,
  B5: 987.77,
  "F♯6": 1479.98,
  F6: 1396.91,
  "E♯5": 622.25,
  "A♯5": 932.33,
  "G♯6": 1661.22,
  G6: 1567.98,
};

export const chords: Record<Chord, Note[]> = {
  C: ["C4", "E4", "G4"],
  Cm: ["C4", "E♭4", "G4"],
  C7: ["C4", "E4", "G4", "B♭4"],
  Cm7: ["C4", "E♭4", "G4", "B♭♭4"],
  Cmaj7: ["C4", "E4", "G4", "B4"],
  C6: ["C4", "E4", "G4", "A4"],
  Cm6: ["C4", "E♭4", "G4", "A4"],
  C9: ["C4", "E4", "G4", "B♭4", "D5"],
  Cm9: ["C4", "E♭4", "G4", "B♭4", "D5"],
  C11: ["C4", "E4", "G4", "B♭4", "D5", "F5"],
  Cm11: ["C4", "E♭4", "G4", "B♭4", "D5", "F5"],
  C13: ["C4", "E4", "G4", "B♭4", "D5", "F5", "A5"],
  Cm13: ["C4", "E♭4", "G4", "B♭4", "D5", "F5", "A5"],
  Csus4: ["C4", "F4", "G4"],
  Csus2: ["C4", "D4", "G4"],
  Caug: ["C4", "E4", "G♯4"],
  Cdim: ["C4", "E♭4", "G♭4"],
  "Cm7♭5": ["C4", "E♭4", "G♭4", "B♭♭4"],
  D: ["D4", "F♯4", "A4"],
  Dm: ["D4", "F4", "A4"],
  D7: ["D4", "F♯4", "A4", "C5"],
  Dm7: ["D4", "F4", "A4", "C5"],
  Dmaj7: ["D4", "F♯4", "A4", "C♯5"],
  D6: ["D4", "F♯4", "A4", "B4"],
  Dm6: ["D4", "F♯4", "A4", "B4"],
  D9: ["D4", "F♯4", "A4", "C5", "E5"],
  Dm9: ["D4", "F4", "A4", "C5", "E5"],
  D11: ["D4", "F♯4", "A4", "C5", "E5", "G5"],
  Dm11: ["D4", "F4", "A4", "C5", "E5", "G5"],
  D13: ["D4", "F♯4", "A4", "C5", "E5", "G5", "B♭5"],
  Dm13: ["D4", "F4", "A4", "C5", "E5", "G5", "B♭5"],
  Dsus4: ["D4", "G4", "A4"],
  Dsus2: ["D4", "E4", "A4"],
  Daug: ["D4", "F♯4", "A♯4"],
  Ddim: ["D4", "F4", "G♯4"],
  "Dm7♭5": ["D4", "F4", "A♭4", "C5"],
  E: ["E4", "G♯4", "B4"],
  Em: ["E4", "G4", "B4"],
  E7: ["E4", "G♯4", "B4", "D5"],
  Em7: ["E4", "G4", "B4", "D5"],
  Emaj7: ["E4", "G♯4", "B4", "D♯5"],
  E6: ["E4", "G♯4", "B4", "C♯5"],
  Em6: ["E4", "G♯4", "B4", "C♯5"],
  E9: ["E4", "G♯4", "B4", "D5", "F♯5"],
  Em9: ["E4", "G4", "B4", "D5", "F♯5"],
  E11: ["E4", "G♯4", "B4", "D5", "F♯5", "A5"],
  Em11: ["E4", "G4", "B4", "D5", "F♯5", "A5"],
  E13: ["E4", "G♯4", "B4", "D5", "F♯5", "A5", "C♯6"],
  Em13: ["E4", "G4", "B4", "D5", "F♯5", "A5", "C6"],
  Esus4: ["E4", "A4", "B4"],
  Esus2: ["E4", "F♯4", "B4"],
  Eaug: ["E4", "G♯4", "B♯4"],
  Edim: ["E4", "G4", "B♭4"],
  "Em7♭5": ["E4", "G4", "B♭4", "D5"],
  F: ["F4", "A4", "C5"],
  Fm: ["F4", "A♭4", "C5"],
  F7: ["F4", "A4", "C5", "E♭5"],
  Fm7: ["F4", "A♭4", "C5", "E♭5"],
  Fmaj7: ["F4", "A4", "C5", "E5"],
  F6: ["F4", "A4", "C5", "D5"],
  Fm6: ["F4", "A♭4", "C5", "D5"],
  F9: ["F4", "A4", "C5", "E♭5", "G5"],
  Fm9: ["F4", "A♭4", "C5", "E♭5", "G5"],
  F11: ["F4", "A4", "C5", "E♭5", "G5", "B♭5"],
  Fm11: ["F4", "A♭4", "C5", "E♭5", "G5", "B♭5"],
  F13: ["F4", "A4", "C5", "E♭5", "G5", "B♭5", "D6"],
  Fm13: ["F4", "A♭4", "C5", "E♭5", "G5", "B♭5", "D6"],
  Fsus4: ["F4", "B♭4", "C5"],
  Fsus2: ["F4", "G4", "C5"],
  Faug: ["F4", "A4", "C♯5"],
  Fdim: ["F4", "A♭4", "C♭5"],
  "Fm7♭5": ["F4", "A♭4", "C♭5", "E♭5"],
  G: ["G4", "B4", "D5"],
  Gm: ["G4", "B♭4", "D5"],
  G7: ["G4", "B4", "D5", "F5"],
  Gm7: ["G4", "B♭4", "D5", "F5"],
  Gmaj7: ["G4", "B4", "D5", "F♯5"],
  G6: ["G4", "B4", "D5", "E5"],
  Gm6: ["G4", "B♭4", "D5", "E5"],
  G9: ["G4", "B4", "D5", "F5", "A5"],
  Gm9: ["G4", "B♭4", "D5", "F5", "A5"],
  G11: ["G4", "B4", "D5", "F5", "A5", "C6"],
  Gm11: ["G4", "B♭4", "D5", "F5", "A5", "C6"],
  G13: ["G4", "B4", "D5", "F5", "A5", "C6", "E6"],
  Gm13: ["G4", "B♭4", "D5", "F5", "A5", "C6", "E6"],
  Gsus4: ["G4", "C5", "D5"],
  Gsus2: ["G4", "A4", "D5"],
  Gaug: ["G4", "B4", "D♯5"],
  Gdim: ["G4", "B♭4", "D♭5"],
  "Gm7♭5": ["G4", "B♭4", "D♭5", "F5"],
  A: ["A4", "C♯5", "E5"],
  Am: ["A4", "C5", "E5"],
  A7: ["A4", "C♯5", "E5", "G5"],
  Am7: ["A4", "C5", "E5", "G5"],
  Amaj7: ["A4", "C♯5", "E5", "G♯5"],
  A6: ["A4", "C♯5", "E5", "F♯5"],
  Am6: ["A4", "C♯5", "E5", "F♯5"],
  A9: ["A4", "C♯5", "E5", "G5", "B5"],
  Am9: ["A4", "C5", "E5", "G5", "B5"],
  A11: ["A4", "C♯5", "E5", "G5", "B5", "D6"],
  Am11: ["A4", "C5", "E5", "G5", "B5", "D6"],
  A13: ["A4", "C♯5", "E5", "G5", "B5", "D6", "F♯6"],
  Am13: ["A4", "C5", "E5", "G5", "B5", "D6", "F6"],
  Asus4: ["A4", "D5", "E5"],
  Asus2: ["A4", "B4", "E5"],
  Aaug: ["A4", "C♯5", "E♯5"],
  Adim: ["A4", "C5", "E♭5"],
  "Am7♭5": ["A4", "C5", "E♭5", "G5"],
  B: ["B4", "D♯5", "F♯5"],
  Bm: ["B4", "D5", "F♯5"],
  B7: ["B4", "D♯5", "F♯5", "A5"],
  Bm7: ["B4", "D5", "F♯5", "A5"],
  Bmaj7: ["B4", "D♯5", "F♯5", "A♯5"],
  B6: ["B4", "D♯5", "F♯5", "G♯5"],
  Bm6: ["B4", "D♯5", "F♯5", "G♯5"],
  B9: ["B4", "D♯5", "F♯5", "A5", "C♯6"],
  Bm9: ["B4", "D5", "F♯5", "A5", "C♯6"],
  B11: ["B4", "D♯5", "F♯5", "A5", "C♯6", "E6"],
  Bm11: ["B4", "D5", "F♯5", "A5", "C♯6", "E6"],
  B13: ["B4", "D♯5", "F♯5", "A5", "C♯6", "E6", "G♯6"],
  Bm13: ["B4", "D5", "F♯5", "A5", "C♯6", "E6", "G6"],
  Bsus4: ["B4", "E5", "F♯5"],
  Bsus2: ["B4", "C♯5", "F♯5"],
  Baug: ["B4", "D♯5", "G5"],
  Bdim: ["B4", "D5", "F5"],
  "Bm7♭5": ["B4", "D5", "F5", "A5"],
};