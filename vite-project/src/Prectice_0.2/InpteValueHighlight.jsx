import React, { useState } from 'react';

export default function InputValueHighlight() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const renderTextWithHighlights = (text) => {
    const parts = text.split(/(@\S+|#\S+)/g);
    return parts.map((part, index) => {
      if (part.startsWith('@') || part.startsWith('#')) {
        return <span key={index} style={{ color: 'red' }}>{part}</span>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          color: 'black', 
          pointerEvents: 'none',
          whiteSpace: 'pre-wrap',
          overflow: 'hidden'
        }}
      >
        {renderTextWithHighlights(value)}
      </div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        style={{ 
          position: 'relative', 
          background: 'transparent', 
          color: 'transparent',
          caretColor: 'black',
          width: '100%',
          height: '100%',
          border: '',
          padding: '10px',
          resize: 'none',
          overflow: 'hidden'
        }}
      />
    </div>
  );
}

// import React, { useState } from 'react';

// export default function InputValueHighlight() {
//   const [value, setValue] = useState("");

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   // Highlight logic applied in text
//   const highlightText = (text) => {
//     // Example: Highlight all occurrences of "example" in yellow
//     return text.replace(/(example)/gi, (match) => `<mark>${match}</mark>`);
//   };

//   return (
//     <textarea
//       value={value}
//       onChange={handleChange}
//       placeholder="Type here..."
//       style={{
//         width: '100%',
//         height: '100%',
//         border: '1px solid #ccc',
//         padding: '8px',
//         boxSizing: 'border-box',
//         resize: 'none',
//         color: 'black'
//       }}
//     />
//   );
// }
