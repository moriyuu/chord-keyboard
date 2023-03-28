import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import { frequencyMap, chords, chordsFamily } from "./constants";
import type { Chord, Note, ChordFamily } from "./types";

const isEqualSet = <A,>(set1: Set<A>, arr2: Array<A>) => {
  const set2 = new Set(arr2);

  if (set1.size !== set2.size) {
    return false;
  }

  for (const value of set1) {
    if (!set2.has(value)) {
      return false;
    }
  }
  for (const value of set2) {
    if (!set1.has(value)) {
      return false;
    }
  }

  return true;
};

const audioContext = new AudioContext();
const gainNode = audioContext.createGain();
gainNode.gain.value = 0.2;

const ChordButton = ({
  chord,
  notes,
  chordFamily,
}: {
  chord: Chord;
  notes: Note[];
  chordFamily: ChordFamily;
}) => {
  const [playing, setPlaying] = useState(false);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const pressingKeys = useRef(new Set<string>()); // すべて小文字前提とする

  const pressingKeysEqualTo = useCallback((keys: string[]) => {
    return isEqualSet(pressingKeys.current, keys);
  }, []);

  const getFrequency = (note: Note) => {
    return frequencyMap[note];
  };

  const start = useCallback(() => {
    if (playing) {
      return;
    }

    notes.forEach((note) => {
      const oscillator = audioContext.createOscillator();
      oscillator.type = "triangle";
      oscillator.frequency.value = getFrequency(note);
      oscillator.connect(gainNode);
      oscillator.start();
      oscillatorsRef.current.push(oscillator);
    });

    gainNode.connect(audioContext.destination);

    setPlaying(true);
  }, [notes, playing, getFrequency]);

  const stop = useCallback(() => {
    oscillatorsRef.current.forEach((oscillator) => {
      oscillator.stop();
    });
    oscillatorsRef.current = [];

    setPlaying(false);
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      pressingKeys.current.add(event.key.toLowerCase());

      // C ...
      if (chord === `${chordFamily}`) {
        if (pressingKeysEqualTo([chordFamily.toLowerCase()])) {
          start();
        } else {
          stop();
        }
      }

      // Cm ...
      if (chord === `${chordFamily}m`) {
        if (pressingKeysEqualTo([chordFamily.toLowerCase(), "m"])) {
          start();
        } else {
          stop();
        }
      }

      // C7 ...
      if (chord === `${chordFamily}7`) {
        if (pressingKeysEqualTo([chordFamily.toLowerCase(), "7"])) {
          start();
        } else {
          stop();
        }
      }

      // Cm7 ...
      if (chord === `${chordFamily}m7`) {
        if (pressingKeysEqualTo([chordFamily.toLowerCase(), "m", "7"])) {
          start();
        } else {
          stop();
        }
      }

      // Cmaj7 ...
      if (chord === `${chordFamily}maj7`) {
        console.log("pressingKeys.current", pressingKeys.current);
        if (pressingKeysEqualTo([chordFamily.toLowerCase(), "j", "7"])) {
          start();
        } else {
          stop();
        }
      }

      // C6 ...
      if (chord === `${chordFamily}6`) {
        if (pressingKeysEqualTo([chordFamily.toLowerCase(), "6"])) {
          start();
        } else {
          stop();
        }
      }

      // Cm6 ...
      if (chord === `${chordFamily}m6`) {
        if (pressingKeysEqualTo([chordFamily.toLowerCase(), "m", "6"])) {
          start();
        } else {
          stop();
        }
      }

      // C9 ...
      if (chord === `${chordFamily}9`) {
        if (pressingKeysEqualTo([chordFamily.toLowerCase(), "9"])) {
          start();
        } else {
          stop();
        }
      }

      // Cm9 ...
      if (chord === `${chordFamily}m9`) {
        if (pressingKeysEqualTo([chordFamily.toLowerCase(), "m", "9"])) {
          start();
        } else {
          stop();
        }
      }

      // C11 ...
      if (chord === `${chordFamily}11`) {
        if (pressingKeysEqualTo([chordFamily.toLowerCase(), "1"])) {
          start();
        } else {
          stop();
        }
      }

      // Cm11 ...
      if (chord === `${chordFamily}m11`) {
        if (pressingKeysEqualTo([chordFamily.toLowerCase(), "m", "1"])) {
          start();
        } else {
          stop();
        }
      }

      // C13 ...
      if (chord === `${chordFamily}13`) {
        if (pressingKeysEqualTo([chordFamily.toLowerCase(), "3"])) {
          start();
        } else {
          stop();
        }
      }

      // Cm13 ...
      if (chord === `${chordFamily}m13`) {
        if (pressingKeysEqualTo([chordFamily.toLowerCase(), "m", "3"])) {
          start();
        } else {
          stop();
        }
      }

      // C# ...
      if (chord === `${chordFamily}#`) {
        if (pressingKeysEqualTo([chordFamily.toLowerCase(), "shift"])) {
          start();
        } else {
          stop();
        }
      }

      // C#m ...
      if (chord === `${chordFamily}#m`) {
        if (pressingKeysEqualTo([chordFamily.toLowerCase(), "shift", "m"])) {
          start();
        } else {
          stop();
        }
      }
    },
    [start, stop, pressingKeysEqualTo]
  );

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      pressingKeys.current.delete(event.key.toLowerCase());

      stop();
    },
    [stop]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <button
      onMouseDown={start}
      onMouseUp={stop}
      className={playing ? "active" : ""}
    >
      {chord}
    </button>
  );
};

function App() {
  return (
    <div className="App">
      <h1>🎸</h1>

      {Object.keys(chordsFamily).map((_family) => {
        const chordFamily = _family as ChordFamily;
        const familyChords = chordsFamily[chordFamily];
        return (
          <div className="chords-family">
            {familyChords.map((chord) => {
              return (
                <ChordButton
                  chord={chord}
                  notes={chords[chord]}
                  chordFamily={chordFamily}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
