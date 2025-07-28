import React from 'react';
import type { TextInputProps } from '../../types';
import './TextInput.css';

export const TextInput: React.FC<TextInputProps> = ({
    onTextChange,
    placeholder = 'Start typing...',
    initialValue = ''
}) => {
    return (
        <div className="text-container">
            <textarea
                className="text-input"
                placeholder={placeholder}
                defaultValue={initialValue}
                onChange={(e) => onTextChange(e.target.value)}
                rows={6}
            />
        </div>
    );
};
