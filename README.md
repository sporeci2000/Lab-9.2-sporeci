I used React’s useState to keep track of the text the user types. Every time the text changes, I update this state so the app knows what the user has typed.
To calculate reading time, I assumed people read about 200 words per minute. So, I divided the number of words by 200 to get how many minutes it might take to read.
The app stays fast even when typing quickly because the calculations are simple and happen quickly on each change. I didn’t do anything complex inside the typing handler to avoid slowing down.
The hardest parts were counting words correctly (like ignoring extra spaces), making sure the stats always match the text, stopping the user from typing more than the max words without breaking their typing, and showing the right warning messages only when needed. Also, I made sure the reading time looks nice with decimals.

REFERENCES:
https://legacy.reactjs.org/docs/hooks-state.html 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split 
https://legacy.reactjs.org/docs/components-and-props.html 
https://legacy.reactjs.org/docs/jsx-in-depth.html 