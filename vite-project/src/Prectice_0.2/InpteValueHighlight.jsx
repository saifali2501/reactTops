import React, { useState } from 'react';

export default function InputValueHighlight() {
  const [value, setValue] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);

  const namesList = [
    "Alice", "Bob", "Charlie", "David", "Eve",
    "Frank", "Grace", "Hannah", "Isaac", "Jack"
  ];

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    
    // Filter names based on the input value
    const filtered = namesList.filter(name =>
      name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredNames(filtered);
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
    <div style={{ position: 'relative', margin: "90px 200px", width: '100%', height: '100%', overflow: 'hidden' }}>
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
          overflow: 'hidden',
          padding: '20px', 
          fontFamily: 'inherit',
          fontSize: 'inherit',
        }}
      >
        {renderTextWithHighlights(value)}
      </div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type here..."
        style={{ 
          position: 'relative', 
          background: 'transparent', 
          color: 'transparent',
          caretColor: 'black',
          width: '50%',
          height: '100%',
          padding: '20px',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          resize: 'none',
          overflow: 'hidden',
          zIndex: 1,
          outline: 'none', // This removes the focus outline
        }}
      />
      {value && (
        <div style={{ position: 'absolute', top: '100%', left: 0, width: '50%', background: '#fff', border: '1px solid #ccc', maxHeight: '200px', overflowY: 'auto' }}>
          {filteredNames.length > 0 ? (
            filteredNames.map((name, index) => (
              <div key={index} style={{ padding: '10px', cursor: 'pointer' }}>
                {name}
              </div>
            ))
          ) : (
            <div style={{ padding: '10px' }}>No results found</div>
          )}
        </div>
      )}
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
