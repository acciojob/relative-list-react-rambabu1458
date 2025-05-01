import React from 'react';

const RelativeList = () => {
  const relatives = ['Uncle Raj', 'Aunt Meena', 'Grandparents', 'Cousin Neha', 'Brother Arjun'];
  
  return (
    <div>
      <h2>RelativeList</h2>
      <ol key="relativeList">
        {relatives.map((name, index) => (
          <li key={`relativeListItem${index + 1}`}>{name}</li>
        ))}
      </ol>
    </div>
  );
};

export default RelativeList;
