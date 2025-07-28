import React from 'react';
import type { StatsDisplayProps } from '../../types';
import './StatsDisplay.css';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
    stats,
    showReadingTime = false,
}) => {
    const { characterCount, wordCount, readingTime } = stats;

    return (
        <div className="stats-container">
            <div className="stat-item">
                <span className="stat-label">Characters</span>
                <span className="stat-value">{characterCount}</span>
            </div>

            <div className="stat-item">
                <span className="stat-label">Words</span>
                <span className="stat-value">{wordCount}</span>
            </div>

            {showReadingTime && (
                <div className="stat-item">
                    <span className="stat-label">Reading Time (min)</span>
                    <span className="stat-value">{readingTime.toFixed(1)}</span>
                </div>
            )}
        </div>
    );
};