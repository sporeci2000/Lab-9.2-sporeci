import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { TextInput } from './components/TextInput/TextInput';
import { StatsDisplay } from './components/StatsDisplay/StatsDisplay';
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';

function App() {
  const [text, setText] = useState('');

  // Calculate statistics whenever text changes
  const characterCount = text.length;

  // Count words by splitting on whitespace and filtering out empty strings
  const wordCount = text.trim() === ''
    ? 0
    : text.trim().split(/\s+/).length;

  // Estimate reading time assuming 200 words per minute
  const readingTime = wordCount / 200;

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Character Counter Test</h1>

      <TextInput
        onTextChange={setText}
        placeholder="Type your text here..."
        initialValue=""
      />

      <StatsDisplay
        stats={{ characterCount, wordCount, readingTime }}
        showReadingTime={true}
      />

      <hr style={{ margin: '2rem 0' }} />

      <h1>CharacterCounter Component Test</h1>
      <CharacterCounter minWords={10} maxWords={100} targetReadingTime={1} />
    </div>
  );
}

export default App;