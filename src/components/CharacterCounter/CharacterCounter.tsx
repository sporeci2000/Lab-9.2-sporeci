import React, { useState } from 'react';
import type { CharacterCounterProps } from '../../types';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';
import './CharacterCounter.css';

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
    minWords = 0,
    maxWords = Infinity,
    targetReadingTime = 0, // in minutes
}) => {
    const [text, setText] = useState('');

    const characterCount = text.length;

    const wordCount = text.trim() === ''
        ? 0
        : text.trim().split(/\s+/).length;

    const readingTime = wordCount / 200; // estimate reading time

    // Progress for reading time (0 to 100%)
    const readingProgress = targetReadingTime > 0
        ? Math.min((readingTime / targetReadingTime) * 100, 100)
        : 0;

    // Validation checks
    const isBelowMin = wordCount < minWords;
    const isAboveMax = wordCount > maxWords;

    return (
        <div className="container">
            <div className="section">
                <TextInput
                    onTextChange={setText}
                    placeholder="Start typing here..."
                    initialValue=""
                />
            </div>

            <div className="section">
                <StatsDisplay
                    stats={{ characterCount, wordCount, readingTime }}
                    showReadingTime={targetReadingTime > 0}
                />
            </div>

            <div className="section">
                {targetReadingTime > 0 && (
                    <>
                        <label>Reading time progress:</label>
                        <div className="progress-bar-background" aria-label="Reading time progress">
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${readingProgress}%` }}
                            />
                        </div>
                    </>
                )}
            </div>

            <div className="section">
                {isBelowMin && (
                    <p className="warning">
                        Minimum word count not reached. Minimum required: {minWords}
                    </p>
                )}
                {isAboveMax && (
                    <p className="warning">
                        Maximum word count exceeded. Maximum allowed: {maxWords}
                    </p>
                )}
            </div>
        </div>
    );
};