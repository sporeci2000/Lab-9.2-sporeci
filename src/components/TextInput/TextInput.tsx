import React from 'react';
import type { TextInputProps } from '../../types';
import './TextInput.css';

//Define the TextInput component
export const TextInput: React.FC<TextInputProps> = ({
    onTextChange,
    placeholder = 'Start typing...',
    value,
}) => {
    return (
        <div className="text-container">
            {/* Textarea for input */}
            <textarea
                className="text-input"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onTextChange(e.target.value)}
                rows={6}
            />
        </div>
    );
};
