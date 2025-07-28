import React from 'react';
import type { StatsDisplayProps } from '../../types';
import './StatsDisplay.css';

//Define the StatsDisplay component
export const StatsDisplay: React.FC<StatsDisplayProps> = ({
    stats,
    showReadingTime = false,
}) => {
    const { characterCount, wordCount, readingTime } = stats;

    return (
        <div className="stats-container">
            <div className="stat-span">
                <span className="stat-label">Characters</span>
                <span className="stat-number">{characterCount}</span>
            </div>

            <div className="stat-span">
                <span className="stat-label">Words</span>
                <span className="stat-number">{wordCount}</span>
            </div>

            {showReadingTime && (
                <div className="stat-span">
                    <span className="stat-label">Reading Time</span>
                    <span className="stat-number">{readingTime.toFixed(2)}</span>
                </div>
            )}
        </div>
    );
};