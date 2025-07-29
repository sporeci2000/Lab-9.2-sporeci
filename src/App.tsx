//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import { TextInput } from './components/TextInput/TextInput';
//import { StatsDisplay } from './components/StatsDisplay/StatsDisplay';
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';

function App() {
  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Character Counter</h1>
      <CharacterCounter minWords={10} maxWords={100} targetReadingTime={1} />
    </div>
  );
}

export default App;