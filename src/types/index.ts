// Props for the TextInput component
export interface TextInputProps {
    onTextChange: (text: string) => void;
    placeholder?: string;
    value: string;
}

//Describes the statistics we calculate from the text
export interface TextStats {
    characterCount: number;
    wordCount: number;
    readingTime: number; // in minutes
}

// Props for the StatsDisplay component
export interface StatsDisplayProps {
    stats: TextStats;
    showReadingTime?: boolean;
}

// Props for the CharacterCounter component
export interface CharacterCounterProps {
    minWords?: number;
    maxWords?: number;
    targetReadingTime?: number; // in minutes
}