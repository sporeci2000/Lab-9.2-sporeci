import React, { useState } from 'react';
import type { CharacterCounterProps } from '../../types';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';
import './CharacterCounter.css';

//Define the CharacterCounter component 
export const CharacterCounter: React.FC<CharacterCounterProps> = ({
    minWords = 25,
    maxWords = 100,
    targetReadingTime = 0, // in minutes

}) => {

    //State to hold user text - initialized empty
    const [text, setText] = useState('');

    //Function to handle text changes from the TextInput component
    const handleTextChange = (newText: string) => {
        setText(newText);
    };

    //Calculate the number of characters in current text
    const characterCount = text.length;

    const wordCount = text.trim() === ''
        ? 0
        : text.trim().split(/\s+/).length;

    const readingTime = wordCount / 200; //estimate reading time

    //Progress for reading time (0 to 100%)
    const readingProgress = targetReadingTime > 0
        ? Math.min((readingTime / targetReadingTime) * 100, 100)
        : 0;

    //Validation checks
    const isBelowMin = wordCount < minWords;
    const isAboveMax = wordCount > maxWords;

    //Check if user typed something
    const hasInput = text.trim().length > 0;

    return (
        <div className="container">
            <div className="section">
                <TextInput
                    onTextChange={handleTextChange}
                    placeholder="Start typing your content here..."
                    value={text} 
                />
            </div>

            <div className="section">
                <StatsDisplay
                    stats={{ characterCount, wordCount, readingTime }}
                    showReadingTime={targetReadingTime > 0}
                />
            </div>

            <div className="section">

                {hasInput && isBelowMin && (
                    <p className="warning">
                        Please write at least {minWords} words.
                    </p>
                )}
                {hasInput && isAboveMax && (
                    <p className="warning">
                        Maximum word count exceeded. Maximum allowed: {maxWords}
                    </p>
                )}
            </div>
        </div>
    );
};