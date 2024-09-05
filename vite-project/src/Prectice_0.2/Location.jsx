import React, { useState } from 'react';
import { Input, ListGroup, ListGroupItem } from 'reactstrap';

const data = [
  { "Delhi": "Delhi" },
  { "Mumbai": "Mumbai" },
  { "Kolkāta": "Kolkāta" },
  { "Bangalore": "Bangalore" },
  { "Chennai": "Chennai" },
  { "city": "Hyderābād" },
  { "Pune": "Pune" },
  { "city": "Ahmedabad" },
  { "Surat": "sūrat" },
];

export default function Location() {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Filter locations based on search input or show all if input is focused
  const filteredLocations = data
    .filter((item) => {
      const location = Object.values(item)[0].toLowerCase();
      return showAll || location.includes(search.toLowerCase());
    })
    .sort((a, b) => {
      const locationA = Object.values(a)[0].toLowerCase();
      const locationB = Object.values(b)[0].toLowerCase();
      if (locationA.startsWith(search.toLowerCase())) return -1;
      if (locationB.startsWith(search.toLowerCase())) return 1;
      return 0;
    });

  const handleSelect = (location) => {
    setSearch(location); // Set selected location to input
    setShowAll(false); // Hide the list after selection
  };

  return (
    <div style={{ width: '300px', margin: '50px auto' }}>
      <Input
        type="text"
        placeholder="Search location..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowAll(true); // Show list while typing
        }}
        onFocus={() => setShowAll(true)} // Show all locations on focus
        onBlur={() => setTimeout(() => setShowAll(false), 100)} // Hide after losing focus
      />
      {showAll && (
        <ListGroup style={{ marginTop: '10px', maxHeight: '150px', overflowY: 'auto' }}>
          {filteredLocations.map((item, index) => (
            <ListGroupItem 
              key={index}
              onMouseDown={() => handleSelect(Object.values(item)[0])} // Use onMouseDown instead of onClick
              style={{ cursor: 'pointer' }}
            >
              {Object.values(item)[0]}
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </div>
  );
}
