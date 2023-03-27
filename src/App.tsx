import { useRef } from "react";
import "./App.css";
import { frequencyMap, chords } from "./constants";
import type { Chord, Note } from "./types";

const audioContext = new AudioContext();
const gainNode = audioContext.createGain();
gainNode.gain.value = 0.2;

const ChordButton = ({ chord, notes }: { chord: Chord; notes: Note[] }) => {
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const handleMouseDown = () => {
    notes.forEach((note) => {
      const oscillator = audioContext.createOscillator();
      oscillator.type = "triangle";
      oscillator.frequency.value = getFrequency(note);
      oscillator.connect(gainNode);
      oscillator.start();
      oscillatorsRef.current.push(oscillator);
    });

    gainNode.connect(audioContext.destination);
  };

  const handleMouseUp = () => {
    oscillatorsRef.current.forEach((oscillator) => {
      oscillator.stop();
    });
    oscillatorsRef.current = [];
  };

  const getFrequency = (note: Note) => {
    return frequencyMap[note];
  };

  return (
    <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      {chord}
    </button>
  );
};

function App() {
  const chordsFamily = Object.keys(chords).reduce<
    Record<"C" | "D" | "E" | "F" | "G" | "A" | "B", Chord[]>
  >(
    (memo, _chord) => {
      const chord = _chord as Chord;
      const family = chord[0] as "C" | "D" | "E" | "F" | "G" | "A" | "B";
      memo[family].push(chord as Chord);
      return memo;
    },
    {
      C: [],
      D: [],
      E: [],
      F: [],
      G: [],
      A: [],
      B: [],
    }
  );

  return (
    <div className="App">
      <h1>🎸</h1>

      {Object.keys(chordsFamily).map((family) => {
        const familyChords =
          chordsFamily[family as "C" | "D" | "E" | "F" | "G" | "A" | "B"];
        return (
          <div className="chords-family">
            {familyChords.map((chord) => {
              return <ChordButton chord={chord} notes={chords[chord]} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
